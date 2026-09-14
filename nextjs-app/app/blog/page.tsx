import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllPosts } from "@/lib/blogger";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Tips & News — Quotes Life Insurance Blog",
  description: "Expert life insurance tips, guides, and news from Quotes Life Insurance. Learn about term life, whole life, critical illness, and more.",
};

export default async function BlogPage() {
  const posts = await getAllPosts(18);

  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <div style={{
          background: "var(--dark)", padding: "56px 0 48px", textAlign: "center",
        }}>
          <div className="container">
            <span style={{
              display: "inline-block", fontSize: "11px", fontWeight: 800,
              letterSpacing: "2px", textTransform: "uppercase",
              color: "var(--green)", marginBottom: "14px",
            }}>
              Insurance Tips &amp; News
            </span>
            <h1 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff",
              fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.02em",
            }}>
              Our Blog
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", marginTop: "12px", fontSize: "15px" }}>
              Tips, guides and news to help you make smarter life insurance decisions.
            </p>
          </div>
        </div>

        {/* Posts grid */}
        <section style={{ padding: "64px 0", background: "#fff" }}>
          <div className="container">
            {posts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <p style={{ color: "var(--muted)" }}>No posts found.</p>
                <a href="https://artstarofficial.blogspot.com" target="_blank" rel="noopener"
                  className="btn-primary" style={{ marginTop: "16px", display: "inline-flex" }}>
                  Visit Blog ↗
                </a>
              </div>
            ) : (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "28px",
              }}>
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}
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
                          <img src={post.thumb} alt={post.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        ) : (
                          <div style={{
                            width: "100%", height: "100%",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "48px",
                          }}>📰</div>
                        )}
                      </div>

                      {/* Content */}
                      <div style={{ padding: "20px 20px 24px" }}>
                        <div style={{
                          display: "flex", alignItems: "center",
                          justifyContent: "space-between", marginBottom: "10px",
                        }}>
                          <span style={{
                            fontSize: "11px", fontWeight: 700,
                            background: "var(--bg-soft)", color: "var(--green)",
                            padding: "3px 10px", borderRadius: "20px",
                          }}>
                            {post.category}
                          </span>
                          <span style={{ fontSize: "11px", color: "var(--muted)" }}>{post.date}</span>
                        </div>
                        <h2 style={{
                          fontSize: "15px", fontWeight: 700,
                          color: "var(--dark)", lineHeight: 1.45, marginBottom: "10px",
                        }}>
                          {post.title.length > 72 ? post.title.slice(0, 72) + "…" : post.title}
                        </h2>
                        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>
                          {post.excerpt.slice(0, 120)}…
                        </p>
                        <p style={{
                          marginTop: "14px", fontSize: "13px",
                          fontWeight: 700, color: "var(--green)",
                        }}>
                          Read more →
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .blog-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.10) !important;
          transform: translateY(-4px) !important;
        }
      `}</style>
    </>
  );
}
