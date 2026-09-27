import Link from "next/link";
import { getAllPosts } from "@/lib/blogger";
import BlogSectionHeader from "@/components/BlogSectionHeader";
import { BlogReadMore, BlogViewAll, BlogNoArticles } from "@/components/BlogReadMore";

export default async function BlogSection() {
  const posts = await getAllPosts(6);

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">

        {/* Translated Heading */}
        <BlogSectionHeader />

        {posts.length === 0 ? (
          <BlogNoArticles />
        ) : (
          <>
            {/* 3-col cards grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/articles/${post.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <article style={{
                    borderRadius: "16px", overflow: "hidden",
                    border: "1px solid var(--border)", background: "#fff",
                    transition: "box-shadow 0.25s, transform 0.25s",
                    height: "100%",
                  }}
                    className="blog-card"
                  >
                    {/* Thumbnail */}
                    <div style={{ height: "200px", overflow: "hidden", background: "var(--bg-soft)" }}>
                      {post.thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={post.thumb} alt={post.title} loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                          className="blog-thumb"
                        />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }}>📰</div>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ padding: "18px 18px 22px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                        <span style={{ fontSize: "11px", fontWeight: 700, background: "var(--bg-soft)", color: "var(--green)", padding: "3px 10px", borderRadius: "20px" }}>
                          {post.category}
                        </span>
                        <span style={{ fontSize: "11px", color: "var(--muted)" }}>{post.date}</span>
                      </div>
                      <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--dark)", lineHeight: 1.4, marginBottom: "8px" }}>
                        {post.title.length > 72 ? post.title.slice(0, 72) + "…" : post.title}
                      </h3>
                      <BlogReadMore />
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <BlogViewAll />
          </>
        )}
      </div>

      <style>{`
        .blog-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.09) !important; transform: translateY(-4px) !important; }
        .blog-card:hover .blog-thumb { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
