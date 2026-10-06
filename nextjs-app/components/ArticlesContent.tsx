"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blogger";

interface Props {
  enPosts: BlogPost[];
  frPosts: BlogPost[];
}

export default function ArticlesContent({ enPosts, frPosts }: Props) {
  const { lang } = useLang();
  const isFr  = lang === "fr";
  const posts = isFr ? frPosts : enPosts;

  return (
    <section style={{ padding: "48px 0 64px", background: "#fff" }}>
      <div className="container">
        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <p style={{ color: "var(--muted)" }}>
              {isFr ? "Aucun article trouvé." : "No articles found."}
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => {
              const card = (
                <article className="blog-card" style={{
                  borderRadius: "16px", overflow: "hidden",
                  border: "1px solid var(--border)", background: "#fff",
                  height: "100%", transition: "box-shadow 0.25s, transform 0.25s",
                }}>
                  <div style={{ height: "190px", overflow: "hidden", background: "#f8f8f8" }}>
                    {post.thumb ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.thumb} alt={post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "42px" }}>📰</div>
                    )}
                  </div>
                  <div style={{ padding: "16px 16px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "4px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, background: "var(--bg-soft)", color: "var(--green)", padding: "3px 10px", borderRadius: "20px" }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: "11px", color: "var(--muted)" }}>{post.date}</span>
                    </div>
                    <h2 style={{ fontSize: "14px", fontWeight: 700, color: "var(--dark)", lineHeight: 1.45, marginBottom: "8px" }}>
                      {post.title.length > 70 ? post.title.slice(0, 70) + "…" : post.title}
                    </h2>
                    <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6 }}>
                      {post.excerpt.slice(0, 110)}…
                    </p>
                    <p style={{ marginTop: "10px", fontSize: "13px", fontWeight: 700, color: "var(--green)" }}>
                      {isFr ? "Lire la suite →" : "Read more →"}
                    </p>
                  </div>
                </article>
              );

              return (
                <Link key={post.slug}
                  href={isFr ? `/fr/articles/${post.slug}` : `/articles/${post.slug}`}
                  style={{ textDecoration: "none", display: "block" }}>
                  {card}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .blog-grid { grid-template-columns: 1fr !important; gap: 14px !important; } }
        .blog-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.09) !important; transform: translateY(-3px) !important; }
      `}</style>
    </section>
  );
}
