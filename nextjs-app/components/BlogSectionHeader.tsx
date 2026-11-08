"use client";
import { useLang } from "@/lib/i18n";

export default function BlogSectionHeader() {
  const { t } = useLang();
  return (
    <div style={{ textAlign: "center", marginBottom: "48px" }}>
      <span className="section-label">{t.blogLabel}</span>
      <h2 style={{
        fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
        fontWeight: 800, marginTop: "8px", color: "var(--dark)",
      }}>
        {t.blogH2a}{" "}<span style={{ color: "var(--green)" }}>{t.blogH2b}</span>
      </h2>
    </div>
  );
}
