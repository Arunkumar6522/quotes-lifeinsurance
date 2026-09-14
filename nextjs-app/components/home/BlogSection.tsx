import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────
interface BlogPost {
  title: string;
  link: string;
  thumb: string;
  date: string;
  category: string;
}

// ── Server-side fetch (runs at build time / ISR) ──────────────────────────────
async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      "https://artstarofficial.blogspot.com/feeds/posts/default?alt=json&max-results=6",
      { next: { revalidate: 3600 } } // refresh every hour
    );
    if (!res.ok) return [];
    const data = await res.json();
    const entries: any[] = data?.feed?.entry ?? [];

    return entries.map((e) => {
      // Title
      const title: string = e.title?.$t ?? "Untitled";

      // Link
      const altLink = (e.link ?? []).find((l: any) => l.rel === "alternate");
      const link: string = altLink?.href ?? "https://artstarofficial.blogspot.com";

      // Thumbnail — prefer media$thumbnail, fall back to first <img> in content
      let thumb: string = e.media$thumbnail?.url ?? "";
      if (thumb) {
        // Upgrade small thumbnail to 600px version
        thumb = thumb.replace(/\/s\d+-c\//, "/s600/").replace(/\/s\d+\//, "/s600/");
      } else {
        const content: string = e.content?.$t ?? "";
        const match = content.match(/src="(https?:\/\/[^"]+)"/);
        thumb = match?.[1] ?? "";
      }

      // Date
      const rawDate: string = e.published?.$t ?? "";
      const date = rawDate
        ? new Date(rawDate).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "";

      // Category
      const cats: any[] = e.category ?? [];
      const category: string = cats[0]?.term ?? "Blog";

      return { title, link, thumb, date, category };
    });
  } catch {
    return [];
  }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default async function BlogSection() {
  const posts = await getPosts();

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="section-label">News &amp; Blog</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
            Latest Tips &amp;{" "}
            <span style={{ color: "var(--green)" }}>News</span>
          </h2>
        </div>

        {posts.length === 0 ? (
          /* Fallback if feed fails */
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">Could not load articles right now.</p>
            <Link
              href="https://artstarofficial.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Visit Our Blog ↗
            </Link>
          </div>
        ) : (
          <>
            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map((post) => (
                <a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ border: "1px solid var(--border)", display: "block" }}
                >
                  {/* Thumbnail */}
                  <div
                    className="overflow-hidden bg-gray-100"
                    style={{ height: "200px" }}
                  >
                    {post.thumb ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={post.thumb}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-5xl"
                        style={{ background: "var(--bg-soft)" }}
                      >
                        📰
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Category + date */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          background: "var(--bg-soft)",
                          color: "var(--green)",
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold text-base leading-snug mb-3 group-hover:text-[var(--green)] transition-colors"
                      style={{ color: "var(--dark)" }}
                    >
                      {post.title.length > 72
                        ? post.title.slice(0, 72) + "…"
                        : post.title}
                    </h3>

                    {/* Read more */}
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--green)" }}
                    >
                      Read article →
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* View all */}
            <div className="text-center mt-10">
              <Link
                href="https://artstarofficial.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View All Articles ↗
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
