const FEED_BASE_EN = "https://quotes-lifeinsurance007.blogspot.com/feeds/posts/default";
const FEED_BASE_FR = "https://quoteslifeinsurancefr.blogspot.com/feeds/posts/default";

function getFeedBase(french = false) {
  return french ? FEED_BASE_FR : FEED_BASE_EN;
}

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
  // Use media$thumbnail scaled up — most reliable source across both blogs
  if (e.media$thumbnail?.url) {
    return e.media$thumbnail.url
      .replace(/\/s72-c\//, "/s1200/")
      .replace(/\/s\d+-c\//, "/s1200/")
      .replace(/\/s\d+\//, "/s1200/");
  }
  // Fallback: first image in content
  const html: string = e.content?.$t ?? "";
  const m = html.match(/src="(https?:\/\/[^"]+)"/);
  return m?.[1] ?? "";
}

function getLink(e: any): string {
  const links: any[] = e.link ?? [];
  return links.find((l: any) => l.rel === "alternate")?.href
    ?? "https://quotes-lifeinsurance007.blogspot.com";
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
export async function getAllPosts(max = 20, french = false): Promise<BlogPost[]> {
  const feedBase = getFeedBase(french);
  try {
    const res = await fetch(
      `${feedBase}?alt=json&max-results=${max}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.feed?.entry ?? [])
      .map(entryToPost)
      .filter((p: BlogPost) => p.slug);
  } catch {
    return [];
  }
}

// ── Fetch single post by ID ─────────────────────────────────────────────────
export async function getPostBySlug(slug: string, french = false): Promise<BlogPost | null> {
  const feedBase = getFeedBase(french);
  try {
    const res = await fetch(
      `${feedBase}?alt=json&max-results=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const entries: any[] = data.feed?.entry ?? [];
    const entry = entries.find((e: any) => makeSlug(e.id?.$t ?? "") === slug);
    return entry ? entryToPost(entry) : null;
  } catch {
    return null;
  }
}
