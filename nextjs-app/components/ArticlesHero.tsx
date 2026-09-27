"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { useLang } from "@/lib/i18n";

export default function ArticlesHero() {
  const { t } = useLang();
  return (
    <section className="blog-hero">
      <div className="blog-hero-overlay" />
      <div className="container blog-hero-content">
        <div style={{ marginBottom: "20px" }}>
          <Breadcrumb crumbs={[
            { label: t.home, href: "/" },
            { label: t.articles },
          ]} />
        </div>
        <span style={{
          display: "inline-block", fontSize: "11px", fontWeight: 800,
          letterSpacing: "2px", textTransform: "uppercase",
          color: "var(--green)", marginBottom: "12px",
        }}>
          {t.articlesLabel}
        </span>
        <h1 style={{
          fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 900, color: "#fff",
          fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.02em",
        }}>
          {t.articlesH1}
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", marginTop: "10px", fontSize: "15px", maxWidth: "480px" }}>
          {t.articlesPageSub}
        </p>
      </div>
    </section>
  );
}
