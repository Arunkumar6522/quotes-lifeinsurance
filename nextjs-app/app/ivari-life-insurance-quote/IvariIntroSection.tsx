"use client";
import { useLang } from "@/lib/i18n";

export default function IvariIntroSection() {
  const { lang } = useLang();
  const isFr = lang === "fr";

  const stats = [
    { value: "1928", label: isFr ? "Dans le marché canadien depuis" : "In the Canadian market since" },
    { value: "A", label: isFr ? "Cote AM Best (Excellent) 2026" : "AM Best rating (Excellent) 2026" },
    { value: "700K+", label: isFr ? "Assurés au Canada" : "Policyholders across Canada" },
  ];

  return (
    <section style={{ padding: "52px 0", background: "#fff", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/company/ivari.png" alt="ivari" style={{ height: "32px", width: "auto" }} />
              <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "#D4A017", margin: 0 }}>
                {isFr ? "QUI EST IVARI ?" : "WHO IS IVARI?"}
              </p>
            </div>
            <p style={{ fontSize: "17px", color: "var(--body)", lineHeight: 1.8, maxWidth: "680px" }}>
              {isFr
                ? "ivari est une compagnie d'assurance vie canadienne présente sur le marché depuis 1928 — administrant des polices d'assureurs antérieurs dont Transamerica Life Canada. Avec une cote AM Best A (Excellent) en 2026 et plus de 700 000 assurés, ivari propose une gamme ciblée d'assurance temporaire, universelle, maladies graves et sans examen médical."
                : "ivari is a Canadian life insurance company whose products have been in the market since 1928 — including policies from Transamerica Life Canada. Rated AM Best A (Excellent) in 2026 with over 700,000 policyholders, ivari offers a focused range of term, universal life, critical illness, and no-medical coverage."}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "160px" }}>
            {stats.map((s) => (
              <div key={s.value} style={{ background: "#FBF5E6", borderRadius: "12px", padding: "14px 18px", textAlign: "center", border: "1px solid var(--border)" }}>
                <p style={{ fontSize: "22px", fontWeight: 900, color: "#D4A017", fontFamily: "var(--font-sora), sans-serif", marginBottom: "2px" }}>{s.value}</p>
                <p style={{ fontSize: "11px", color: "var(--muted)", lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:700px){.ivari-intro-grid{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </section>
  );
}
