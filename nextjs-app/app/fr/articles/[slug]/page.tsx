import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { getPostBySlug, getAllPosts } from "@/lib/blogger";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import QuoteButton from "@/components/QuoteButton";

// Only serve pre-generated FR slugs — no dynamic fallback in static export
export const dynamicParams = false;

// ── Pre-build all FR article routes at build time ──────────────────────────────
export async function generateStaticParams() {
  const posts = await getAllPosts(50, true); // true = French blogspot
  return posts.map((p) => ({ slug: p.slug }));
}

// ── Metadata (French) ─────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, true);
  if (!post) return { title: "Article introuvable" };
  return {
    title: `${post.title} | Citations Assurance Vie`,
    description: post.excerpt,
    alternates: { canonical: `https://quotes-lifeinsurance.com/fr/articles/${slug}` },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function FrBlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, true); // Always FR
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="blogpost-hero">
          <div className="blogpost-hero-overlay" />
          <div className="container blogpost-hero-content">
            <div style={{ marginBottom: "20px" }}>
              <Breadcrumb crumbs={[
                { label: "Accueil", href: "/" },
                { label: "Articles", href: "/articles" },
                { label: post.title.slice(0, 40) + (post.title.length > 40 ? "…" : "") },
              ]} />
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, background: "rgba(0,167,89,0.2)", color: "var(--green)", padding: "4px 12px", borderRadius: "20px" }}>
                {post.category}
              </span>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{post.date}</span>
            </div>
            <h1 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#fff", fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: "720px" }}>
              {post.title}
            </h1>
          </div>
        </section>

        {/* Main content */}
        <section style={{ padding: "56px 0 80px", background: "#fff" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "56px", alignItems: "start" }} className="post-layout">

              {/* Article body */}
              <article style={{ minWidth: 0, overflow: "hidden" }}>
                <div className="blog-content" suppressHydrationWarning
                  dangerouslySetInnerHTML={{ __html: post.content }} />
                <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                  <Link href="/articles" style={{ fontSize: "14px", fontWeight: 600, color: "var(--green)", textDecoration: "none" }}>
                    ← Retour aux articles
                  </Link>
                </div>
              </article>

              {/* Sidebar — French */}
              <aside style={{ display: "flex", flexDirection: "column", gap: "20px", position: "sticky", top: "100px", alignSelf: "start" }} data-lenis-prevent>
                <div style={{ background: "var(--green)", borderRadius: "20px", padding: "28px 24px", textAlign: "center" }}>
                  <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>
                    Gratuit, sans obligation
                  </p>
                  <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "10px", lineHeight: 1.3 }}>
                    Obtenez votre devis gratuit
                  </h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginBottom: "20px", lineHeight: 1.6 }}>
                    Comparez plus de 20 assureurs canadiens en quelques minutes. Toujours gratuit.
                  </p>
                  <QuoteButton label="Obtenir mon devis →" style={{ width: "100%", justifyContent: "center", background: "#fff", color: "var(--green)", border: "none" }} />
                </div>

                <div style={{ background: "var(--bg-soft)", borderRadius: "16px", padding: "20px", border: "1px solid var(--border)" }}>
                  <p style={{ fontSize: "11px", fontWeight: 800, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>
                    Nos services
                  </p>
                  {[
                    { label: "Assurance vie temporaire",   href: "/services/term-life" },
                    { label: "Assurance vie entière",      href: "/services/whole-life" },
                    { label: "Assurance vie universelle",  href: "/services/universal-life" },
                    { label: "Assurance maladies graves",  href: "/services/critical-illness" },
                    { label: "Assurance invalidité",       href: "/services/disability" },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} style={{ display: "block", padding: "9px 0", fontSize: "13px", fontWeight: 600, color: "var(--body)", textDecoration: "none", borderBottom: "1px solid var(--border)", transition: "color 0.15s" }} className="footer-link">
                      {s.label} →
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .blogpost-hero { position: relative; background: linear-gradient(135deg, #1a3a1d 0%, #0f1623 100%); background-image: url('/cover-blog.jpg'); background-size: cover; background-position: center; min-height: 340px; display: flex; align-items: flex-end; padding: 0 0 48px; }
        .blogpost-hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,22,35,0.4) 0%, rgba(15,22,35,0.88) 70%, rgba(15,22,35,0.98) 100%); }
        .blogpost-hero-content { position: relative; z-index: 1; }
        @media (max-width: 600px) { .blogpost-hero { min-height: 280px; padding-bottom: 36px; } }
        .post-layout { grid-template-columns: 1fr 340px; }
        .post-layout > article { min-width: 0; overflow: hidden; }
        @media (max-width: 900px) { .post-layout { grid-template-columns: 1fr !important; } }
        .blog-content { font-size: 16px; line-height: 1.9; color: #374151; max-width: 100%; overflow-x: hidden; word-break: break-word; }
        .blog-content img, .blog-content iframe, .blog-content table { max-width: 100% !important; height: auto; }
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5 { color: var(--dark); font-weight: 700; margin: 40px 0 16px; line-height: 1.3; font-family: var(--font-sora), sans-serif; }
        .blog-content h1 { font-size: 1.9rem; } .blog-content h2 { font-size: 1.5rem; } .blog-content h3 { font-size: 1.2rem; }
        .blog-content p { margin-bottom: 22px; color: #374151; }
        .blog-content b, .blog-content strong { font-weight: 700; color: var(--dark); }
        .blog-content img { max-width: 100%; height: auto; border-radius: 12px; margin: 28px auto; display: block; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .blog-content a { color: var(--green); text-decoration: underline; text-underline-offset: 3px; }
        .blog-content ul, .blog-content ol { padding-left: 28px; margin: 0 0 22px; }
        .blog-content li { margin-bottom: 10px; line-height: 1.75; }
        .blog-content .separator { text-align: center; margin: 24px 0; }
        .blog-content img[width] { width: 100% !important; max-width: 600px !important; }
      `}</style>
    </>
  );
}
