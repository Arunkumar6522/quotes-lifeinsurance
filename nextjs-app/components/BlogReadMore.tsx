"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export function BlogReadMore() {
  const { t } = useLang();
  return (
    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--green)", marginTop: "12px" }}>
      {t.blogReadArticle}
    </p>
  );
}

export function BlogViewAll() {
  const { t } = useLang();
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <Link href="/articles" className="btn-outline">{t.blogViewAll}</Link>
    </div>
  );
}

export function BlogNoArticles() {
  const { t } = useLang();
  return (
    <div style={{ textAlign: "center", padding: "40px 0" }}>
      <p style={{ color: "var(--muted)", marginBottom: "16px" }}>{t.blogNoArticles}</p>
      <Link href="/articles" className="btn-outline">{t.blogViewArticles}</Link>
    </div>
  );
}
