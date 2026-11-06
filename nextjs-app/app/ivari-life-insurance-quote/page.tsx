"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import AboutSection from "@/components/home/AboutSection";
import GoogleReviewsSection from "@/components/home/GoogleReviewsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";
import { useLang } from "@/lib/i18n";

// ── Expert Advisors ──────────────────────────────────────────────────────────
function ExpertAdvisorsSection() {
  const { lang } = useLang();
  const isFr = lang === "fr";

  const advisors = [
    {
      name: "Denesh Logeswaran",
      role: isFr ? "Co-fondateur & Directeur" : "Co-Founder & Director",
      bio: isFr
        ? "Mentor d'une équipe croissante de conseillers agréés au Canada, Denesh se concentre sur des stratégies de protection pratiques et fiscalement avantageuses pour les familles et les entrepreneurs."
        : "A builder and mentor to a growing team of licensed agents across Canada, Denesh focuses on practical, tax-aware protection strategies for families and entrepreneurs.",
      image: "/testimonials/denesh.jpg",
    },
    {
      name: "Lucia Medina",
      role: isFr ? "Co-fondatrice & Directrice" : "Co-Founder & Director",
      bio: isFr
        ? "Reconnue pour sa défense des clients et ses normes de service rigoureuses, Lucia dirige nos opérations pour assurer un suivi rapide et une gestion proactive des polices."
        : "Known for her client advocacy and meticulous service standards, Lucia leads our service operations to ensure prompt follow-through and proactive policy maintenance.",
      image: "/testimonials/lucia.jpg",
    },
  ];

  return (
    <section style={{ padding: "64px 0", background: "#fff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "8px" }}>
            {isFr ? "CONSEILLERS INDÉPENDANTS" : "INDEPENDENT ADVISORS"}
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "var(--dark)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "12px" }}>
            {isFr ? "Vos conseillers experts" : "Your Expert Advisors"}
          </h2>
          <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            {isFr
              ? "Nous sommes des conseillers indépendants — pas des employés d'ivari. Nous comparons ivari avec plus de 20 assureurs canadiens pour trouver votre meilleure couverture."
              : "We are independent advisors — not ivari employees. We compare ivari alongside 20+ Canadian carriers to find your best coverage at the lowest rate."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", maxWidth: "680px", margin: "0 auto" }}>
          {advisors.map((a) => (
            <div key={a.name} style={{ background: "var(--bg-soft)", borderRadius: "20px", padding: "32px 24px", textAlign: "center", border: "1px solid var(--border)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.image} alt={a.name} style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 16px", display: "block", border: "3px solid var(--green)" }} />
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--dark)", marginBottom: "4px" }}>{a.name}</h3>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--green)", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: "12px" }}>{a.role}</p>
              <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>{a.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ivari ──────────────────────────────────────────────────────────────
function IvariInfoSection() {
  const { lang } = useLang();
  const isFr = lang === "fr";

  const stats = [
    { value: "1928", label: isFr ? "Dans le marché canadien depuis" : "In the Canadian market since" },
    { value: "A", label: isFr ? "Cote AM Best (Excellent) — juillet 2026" : "AM Best rating (Excellent) — July 2026" },
    { value: "700K+", label: isFr ? "Assurés au Canada" : "Policyholders across Canada" },
    { value: "$15B", label: isFr ? "Actif total" : "Total assets" },
  ];

  const products = [
    {
      name: isFr ? "Assurance temporaire" : "Term Life Insurance",
      type: isFr ? "Temporaire" : "Term",
      desc: isFr
        ? "Disponible en 10, 20 et 30 ans avec des primes garanties. La Temporaire 30 inclut des options uniques SelectOptions exercisables entre la 15e et la 20e année."
        : "Available in 10, 20, and 30-year terms with guaranteed level premiums. Term 30 includes unique built-in SelectOptions exercisable between the 15th and 20th anniversary.",
      highlight: isFr ? "Couverture conjointe jusqu'à 5 assurés" : "Joint coverage for up to 5 insured lives",
    },
    {
      name: isFr ? "Assurance vie universelle" : "Universal Life Insurance",
      type: isFr ? "Vie universelle" : "Universal Life",
      desc: isFr
        ? "Couverture permanente avec valeur de fonds. Inclut la Prestation de vie (accès aux fonds en cas d'invalidité ou de maladie grave) et le Programme d'assistance compassionnelle."
        : "Permanent lifetime coverage with fund value. Includes Living Benefits (access your fund if disabled or critically ill) and the Compassionate Assistance Program for terminal illness.",
      highlight: "",
    },
    {
      name: isFr ? "Assurance maladies graves" : "Critical Illness Insurance",
      type: isFr ? "Maladies graves" : "Critical Illness",
      desc: isFr
        ? "Disponible en 4 conditions (cancer, infarctus, AVC, pontage) ou 25 conditions. Peut s'ajouter en avenant sur une police vie sans frais supplémentaires."
        : "4-condition (cancer, heart attack, stroke, bypass) or 25-condition version. Can be added as a rider with no additional policy fee. Bundling can save up to 15%.",
      highlight: isFr ? "Prestation de détection précoce incluse" : "Early Detection Benefit included",
    },
    {
      name: isFr ? "Assurance sans examen médical" : "No-Medical Life Insurance",
      type: isFr ? "Sans examen" : "No Medical",
      desc: isFr
        ? "Vie simplifiée (jusqu'à 500 000 $, 18–74 ans) et Vie garantie (jusqu'à 25 000 $, acceptation garantie, sans questions de santé). Pour ceux qui ont été refusés ailleurs."
        : "Simplified Life (up to $500,000, ages 18–74) and Guaranteed Life (up to $25,000, guaranteed acceptance, no health questions). A real option for those declined elsewhere.",
      highlight: "",
    },
  ];

  return (
    <section style={{ padding: "72px 0", background: "var(--bg-soft)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        {/* Independence disclaimer */}
        <div style={{ background: "#fff", border: "1.5px solid var(--green)", borderRadius: "14px", padding: "18px 20px", marginBottom: "52px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p style={{ fontSize: "13px", color: "var(--body)", lineHeight: 1.75, margin: 0 }}>
            <strong>{isFr ? "Avis de courtier indépendant : " : "Independent broker disclosure: "}</strong>
            {isFr
              ? "Quotes Life Insurance est exploité par DCW Financial Inc. Nous sommes des conseillers indépendants agréés par Experior Financial Group Inc. Cette page n'est pas un site Web d'ivari. ivari n'a pas approuvé cette page. Les caractéristiques des produits et les primes sont confirmées dans votre soumission personnalisée."
              : "Quotes Life Insurance is operated by DCW Financial Inc. We are independent advisors licensed through Experior Financial Group Inc. This page is not an ivari website. ivari has not endorsed or approved this page. Product features, eligibility, and premiums are confirmed in your personalised quote."}
          </p>
        </div>

        {/* About ivari */}
        <div style={{ marginBottom: "52px" }}>
          <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "8px" }}>
            {isFr ? "À PROPOS D'IVARI" : "ABOUT IVARI"}
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: "var(--dark)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "16px" }}>
            {isFr ? "ivari en bref" : "ivari at a glance"}
          </h2>
          <p style={{ fontSize: "15px", color: "var(--body)", lineHeight: 1.8, maxWidth: "720px", marginBottom: "36px" }}>
            {isFr
              ? "ivari est une compagnie d'assurance vie canadienne présente dans le marché canadien depuis 1928, administrant des polices d'assureurs antérieurs dont Transamerica Life Canada. Elle appartient à Sagicor Financial Company Ltd. depuis octobre 2023 et est membre d'Assuris, ce qui protège les assurés en cas de défaillance d'un assureur. Son bureau principal est au 200-5000, rue Yonge, Toronto. En juillet 2026, AM Best a rehaussé sa cote à A (Excellent), soulignant une capitalisation très solide selon la mesure d'adéquation du capital."
              : "ivari is a Canadian life insurance company whose people and products have been in the Canadian market since 1928, administering policies from earlier insurers including Transamerica Life Canada. It has been owned by Sagicor Financial Company Ltd. since October 2023, is regulated by OSFI, and is a member of Assuris — protecting policyholders if a life insurer fails. Head office at 200-5000 Yonge Street, Toronto. In July 2026, AM Best upgraded its financial strength rating to A (Excellent), citing Sagicor's risk-adjusted capitalisation at the strongest level on its capital adequacy measure."}
          </p>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
            {stats.map((s) => (
              <div key={s.value} style={{ background: "#fff", borderRadius: "14px", padding: "20px 16px", textAlign: "center", border: "1px solid var(--border)" }}>
                <p style={{ fontSize: "28px", fontWeight: 900, color: "var(--green)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "6px" }}>{s.value}</p>
                <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Term 30 highlight */}
        <div style={{ background: "linear-gradient(135deg, #0f1623 0%, #1a2e1d 100%)", borderRadius: "20px", padding: "32px 28px", marginBottom: "40px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "28px", flexShrink: 0 }}>⭐</span>
            <div>
              <h3 style={{ fontSize: "17px", fontWeight: 900, color: "#fff", marginBottom: "8px", fontFamily: "var(--font-sora), sans-serif" }}>
                {isFr ? "La Temporaire 30 d'ivari — unique sur le marché" : "ivari Term 30 — uniquely flexible"}
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.82)", lineHeight: 1.75, marginBottom: "16px" }}>
                {isFr
                  ? "Contrairement à la plupart des temporaires 30 ans, la Temporaire 30 d'ivari renouvelle automatiquement à 30 ans en couverture permanente avec primes fixes jusqu'à 100 ans. Entre la 15e et la 20e année, trois options intégrées (SelectOptions) peuvent être exercées :"
                  : "Unlike most 30-year terms, ivari's Term 30 automatically renews at year 30 into permanent coverage with level premiums to age 100. Between the 15th and 20th coverage anniversary, three built-in options can be exercised:"}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { name: "Select30", desc: isFr ? "Arrêtez les primes et réduisez votre couverture pour le reste du terme de 30 ans." : "Stop paying premiums and reduce coverage for the remainder of the 30-year term." },
                  { name: "SelectLIFE", desc: isFr ? "Arrêtez les primes, réduisez et prolongez la couverture à vie en couverture libérée." : "Stop premiums, reduce and extend coverage for life as paid-up final expense coverage." },
                  { name: "SelectVALUE", desc: isFr ? "Accédez à la valeur de rachat — par retrait, réduction de couverture, ou conversion à une vie universelle ivari." : "Access the policy's cash value by surrendering, decreasing coverage, or converting to ivari universal life." },
                ].map((opt) => (
                  <div key={opt.name} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--green)", background: "rgba(0,167,89,0.2)", padding: "2px 8px", borderRadius: "20px", flexShrink: 0, marginTop: "2px" }}>{opt.name}</span>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0 }}>{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "8px" }}>
            {isFr ? "PRODUITS" : "PRODUCTS"}
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: "var(--dark)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "24px" }}>
            {isFr ? "Produits d'assurance ivari" : "ivari Life Insurance Products"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
            {products.map((p) => (
              <div key={p.name} style={{ background: "#fff", borderRadius: "16px", padding: "22px 20px", border: "1px solid var(--border)" }}>
                <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--green)", background: "var(--bg-soft)", padding: "3px 10px", borderRadius: "20px", display: "inline-block", marginBottom: "10px" }}>{p.type}</span>
                <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--dark)", marginBottom: "8px" }}>{p.name}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65, marginBottom: p.highlight ? "10px" : "0" }}>{p.desc}</p>
                {p.highlight && (
                  <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--green)", display: "flex", alignItems: "center", gap: "4px" }}>
                    ✓ {p.highlight}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Official link */}
        <div style={{ background: "#fff", borderRadius: "14px", padding: "20px 24px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--dark)", marginBottom: "12px" }}>
            {isFr ? "En savoir plus sur le site officiel d'ivari" : "Learn more on ivari's official site"}
          </h3>
          <a href="https://www.ivari.ca" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "#4285F4", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            ivari.ca <span style={{ fontSize: "11px", color: "var(--muted)" }}>(ivari.ca)</span>
          </a>
        </div>

      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function IvariPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExpertAdvisorsSection />
        <PartnersSection />
        <AboutSection />
        <IvariInfoSection />
        <GoogleReviewsSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
