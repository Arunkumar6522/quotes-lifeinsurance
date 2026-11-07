"use client";
import { useLang } from "@/lib/i18n";

export default function ForestersIntroSection() {
  const { lang } = useLang();
  const isFr = lang === "fr";

  const stats = [
    { value: "1874", label: isFr ? "Fondée en" : "Founded" },
    { value: "3M+", label: isFr ? "Membres et clients" : "Members & clients" },
    { value: "🎁", label: isFr ? "Avantages membres dans chaque police" : "Member benefits with every policy" },
  ];

  return (
    <section style={{ padding: "52px 0", background: "#fff", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/company/foresters.png" alt="Foresters Financial" style={{ height: "32px", width: "auto" }} />
              <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "#D4A017", margin: 0 }}>
                {isFr ? "QUI EST FORESTERS FINANCIAL ?" : "WHO IS FORESTERS FINANCIAL?"}
              </p>
            </div>
            <p style={{ fontSize: "17px", color: "var(--body)", lineHeight: 1.8, maxWidth: "680px" }}>
              {isFr
                ? "Foresters Financial est une société fraternelle de bienfaisance qui protège les familles depuis 1874. Contrairement aux assureurs traditionnels, chaque police Foresters s'accompagne d'avantages uniques pour les membres — bourses d'orphelins, subventions communautaires, remises dentaires — sans frais supplémentaires. Foresters sert plus de 3 millions de membres au Canada, aux États-Unis et au Royaume-Uni."
                : "Foresters Financial is a fraternal benefit society that has been protecting families since 1874. Unlike traditional insurers, every Foresters policy comes with unique member benefits — orphan scholarships, community grants, dental discounts — at no extra cost. Foresters serves over 3 million members across Canada, the US, and the UK."}
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
        <style>{`@media(max-width:700px){.foresters-intro-grid{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </section>
  );
}
