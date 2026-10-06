"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blogger";
import { BlogViewAll, BlogNoArticles } from "@/components/BlogReadMore";

interface Props {
  enPosts: BlogPost[];
  frPosts: BlogPost[];
}

export default function BlogSectionPosts({ enPosts, frPosts }: Props) {
  const { lang } = useLang();
  const isFr  = lang === "fr";
  const posts = isFr ? frPosts : enPosts;

  if (posts.length === 0) return <BlogNoArticles />;

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
        {posts.map((post) => {
          const card = (
            <article style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)", background: "#fff", transition: "box-shadow 0.25s, transform 0.25s", height: "100%" }} className="blog-card">
              <div style={{ height: "200px", overflow: "hidden", background: "#f4f6f8" }}>
                {post.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.thumb} alt={post.title} loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} className="blog-thumb" />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }}>📰</div>
                )}
              </div>
              <div style={{ padding: "18px 18px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "4px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, background: "var(--bg-soft)", color: "var(--green)", padding: "3px 10px", borderRadius: "20px" }}>{post.category}</span>
                  <span style={{ fontSize: "11px", color: "var(--muted)" }}>{post.date}</span>
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--dark)", lineHeight: 1.4, marginBottom: "8px" }}>
                  {post.title.length > 72 ? post.title.slice(0, 72) + "…" : post.title}
                </h3>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--green)" }}>
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

      <div style={{ textAlign: "center", marginTop: "48px" }}>
        {isFr ? (
          <Link href="/articles"
            className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            Voir tous les articles →
          </Link>
        ) : (
          <BlogViewAll />
        )}
      </div>
    </>
  );
}
