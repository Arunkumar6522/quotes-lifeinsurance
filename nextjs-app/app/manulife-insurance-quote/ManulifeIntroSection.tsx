"use client";
import { useLang } from "@/lib/i18n";

export default function ManulifeIntroSection() {
  const { lang } = useLang();
  const isFr = lang === "fr";

  const stats = [
    { value: "1887", label: isFr ? "Fondée en" : "Founded" },
    { value: "200+", label: isFr ? "Pays et territoires" : "Countries & territories" },
    { value: "5★", label: isFr ? "Temporaire, vie entière, VU, sans examen" : "Term, whole life, UL, no-medical" },
  ];

  return (
    <section style={{ padding: "52px 0", background: "#fff", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/company/manulife.png" alt="Manulife" style={{ height: "32px", width: "auto" }} />
              <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "#D4A017", margin: 0 }}>
                {isFr ? "QUI EST MANUVIE ?" : "WHO IS MANULIFE?"}
              </p>
            </div>
            <p style={{ fontSize: "17px", color: "var(--body)", lineHeight: 1.8, maxWidth: "680px" }}>
              {isFr
                ? "Manuvie est l'un des plus grands assureurs vie au Canada, offrant l'assurance temporaire, la vie entière participante, la vie universelle, la couverture sans examen médical, et le programme Vitalité Manuvie. Fondée en 1887, Manuvie sert des millions de familles canadiennes à travers un réseau de conseillers indépendants comme nous."
                : "Manulife is one of Canada's largest life insurers, offering term life, participating whole life, universal life, no-medical coverage, and the Manulife Vitality wellness program. Founded in 1887, Manulife serves millions of Canadian families through a network of independent advisors like us."}
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
        <style>{`@media(max-width:700px){.manulife-intro-grid{grid-template-columns:1fr!important;}}`}</style>
      </div>
    </section>
  );
}
