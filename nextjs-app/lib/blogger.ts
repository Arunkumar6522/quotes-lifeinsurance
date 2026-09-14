const BLOG_ID   = "1808952853777607677"; // from the feed id
const FEED_BASE = "https://artstarofficial.blogspot.com/feeds/posts/default";

export interface BlogPost {
  slug:     string;
  title:    string;
  link:     string;
  thumb:    string;
  date:     string;
  rawDate:  string;
  category: string;
  excerpt:  string;
  content:  string;
  author:   string;
}

function getThumb(e: any): string {
  if (e.media$thumbnail?.url) {
    return e.media$thumbnail.url
      .replace(/\/s72-c\//, "/s800/")
      .replace(/\/s\d+-c\//, "/s800/")
      .replace(/\/s\d+\//, "/s800/");
  }
  const html: string = e.content?.$t ?? "";
  const m = html.match(/src="(https?:\/\/[^"]+)"/);
  return m?.[1] ?? "";
}

function getLink(e: any): string {
  const links: any[] = e.link ?? [];
  return links.find((l: any) => l.rel === "alternate")?.href
    ?? "https://artstarofficial.blogspot.com";
}

function fmtDate(s: string): string {
  if (!s) return "";
  return new Date(s).toLocaleDateString("en-CA", {
    year: "numeric", month: "long", day: "numeric",
  });
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

// Extract numeric post ID — slug IS the post ID
function makeSlug(postId: string): string {
  const m = postId.match(/\.post-(\d+)$/);
  return m ? m[1] : "";
}

function entryToPost(e: any): BlogPost {
  return {
    slug:     makeSlug(e.id?.$t ?? ""),
    title:    e.title?.$t ?? "Untitled",
    link:     getLink(e),
    thumb:    getThumb(e),
    date:     fmtDate(e.published?.$t ?? ""),
    rawDate:  e.published?.$t ?? "",
    category: e.category?.[0]?.term ?? "Blog",
    excerpt:  stripHtml(e.content?.$t ?? "").slice(0, 220),
    content:  e.content?.$t ?? "",
    author:   e.author?.[0]?.name?.$t ?? "Quotes Life Insurance",
  };
}

// ── Fetch all posts (for listing page) ───────────────────────────────────────
export async function getAllPosts(max = 20): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${FEED_BASE}?alt=json&max-results=${max}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.feed?.entry ?? [])
      .map(entryToPost)
      .filter((p: BlogPost) => p.slug); // skip any without valid slugs
  } catch {
    return [];
  }
}

// ── Fetch single post by ID — uses Blogger's direct entry URL ─────────────────
// This is O(1) — fetches ONE post, not all 50
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Direct entry URL: much faster than fetching all posts
    const url = `https://www.blogger.com/feeds/${BLOG_ID}/posts/default/${slug}?alt=json`;
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (res.ok) {
      const data = await res.json();
      const entry = data.entry;
      if (entry) return entryToPost(entry);
    }

    // Fallback: search in full feed
    const fallback = await fetch(
      `${FEED_BASE}?alt=json&max-results=50`,
      { next: { revalidate: 3600 } }
    );
    if (!fallback.ok) return null;
    const fallbackData = await fallback.json();
    const entries: any[] = fallbackData.feed?.entry ?? [];
    const entry = entries.find((e: any) => makeSlug(e.id?.$t ?? "") === slug);
    return entry ? entryToPost(entry) : null;
  } catch {
    return null;
  }
}
