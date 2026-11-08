"use client";
import { useLang } from "@/lib/i18n";

// ── Small Intro (after hero) ─────────────────────────────────────────────────
export function ForestersIntroSection() {
  const { lang } = useLang();
  const isFr = lang === "fr";

  const stats = [
    { value: "1874", label: isFr ? "Fondée en" : "Founded" },
    { value: "3M+", label: isFr ? "Membres et clients" : "Members & clients" },
    { value: "🎁", label: isFr ? "Avantages membres inclus dans chaque police" : "Member benefits with every policy" },
  ];

  return (
    <section style={{ padding: "52px 0", background: "#fff", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gap: "48px", alignItems: "center" }} className="carrier-intro-grid">
          <div>
            <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "10px" }}>
              {isFr ? "QUI EST FORESTERS FINANCIAL ?" : "WHO IS FORESTERS FINANCIAL?"}
            </p>
            <p style={{ fontSize: "17px", color: "var(--body)", lineHeight: 1.8, maxWidth: "680px" }}>
              {isFr
                ? "Foresters Financial est une société fraternelle de bienfaisance qui protège les familles depuis 1874. Contrairement aux assureurs traditionnels, chaque police Foresters s'accompagne d'avantages uniques pour les membres — bourses d'orphelins, subventions communautaires, remises dentaires — sans frais supplémentaires. Foresters sert plus de 3 millions de membres au Canada, aux États-Unis et au Royaume-Uni."
                : "Foresters Financial is a fraternal benefit society that has been protecting families since 1874. Unlike traditional insurers, every Foresters policy comes with unique member benefits — orphan scholarships, community grants, dental discounts — at no extra cost. Foresters serves over 3 million members across Canada, the US, and the UK."}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "160px" }}>
            {stats.map((s) => (
              <div key={s.value} style={{ background: "var(--bg-soft)", borderRadius: "12px", padding: "14px 18px", textAlign: "center", border: "1px solid var(--border)" }}>
                <p style={{ fontSize: "22px", fontWeight: 900, color: "var(--green)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "2px" }}>{s.value}</p>
                <p style={{ fontSize: "11px", color: "var(--muted)", lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`.carrier-intro-grid { grid-template-columns: 1fr auto; } @media(max-width:700px){.carrier-intro-grid{grid-template-columns:1fr!important;} }`}</style>
      </div>
    </section>
  );
}

export function ForestersAdvisorsSection() {
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
              ? "Nous sommes des conseillers indépendants — pas des employés de Foresters. Nous comparons Foresters avec plus de 20 assureurs canadiens pour trouver votre meilleure couverture."
              : "We are independent advisors — not Foresters Financial employees. We compare Foresters alongside 20+ Canadian carriers to find your best coverage at the lowest rate."}
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

export function ForestersInfoSection() {
  const { lang } = useLang();
  const isFr = lang === "fr";

  const timeline = [
    { year: "1874", text: isFr ? "Fondée sous le nom de The Independent Order of Foresters à Hamilton, Ontario." : "Founded as The Independent Order of Foresters in Hamilton, Ontario." },
    { year: "1962", text: isFr ? "Les opérations canadiennes s'installent à Toronto." : "Canadian operations establish headquarters in Toronto." },
    { year: "2000s", text: isFr ? "Développement des avantages uniques pour les membres — bourses d'orphelins, subventions communautaires, remises dentaires." : "Develops unique member benefits — orphan scholarships, community grants, dental and vision discounts." },
    { year: "2015", text: isFr ? "The Independent Order of Foresters se rebaptise Foresters Financial, reflétant sa portée mondiale." : "The Independent Order of Foresters rebrands to Foresters Financial, reflecting its global reach." },
    { year: "Today", text: isFr ? "Société fraternelle de bienfaisance servant le Canada, les États-Unis et le Royaume-Uni avec plus de 3 millions de membres et clients." : "Fraternal benefit society serving Canada, the US, and UK with over 3 million members and clients." },
  ];

  const products = [
    {
      name: "BrightLife Term",
      type: isFr ? "Assurance temporaire" : "Term Life",
      desc: isFr
        ? "Couverture temporaire abordable avec primes nivelées pour 10, 20 ou 30 ans. Renouvelable et convertible en produit permanent. Avantages membres inclus."
        : "Affordable level-premium term coverage for 10, 20, or 30 years. Renewable and convertible to a permanent product. Member benefits included.",
    },
    {
      name: "BrightLife Grow",
      type: isFr ? "Vie entière" : "Whole Life",
      desc: isFr
        ? "Assurance vie entière participante avec primes garanties, valeur de rachat garantie, et possibilité de dividendes annuels non garantis. Protection à vie."
        : "Participating whole life with guaranteed premiums, guaranteed cash value, and opportunity for non-guaranteed annual dividends. Lifetime protection.",
    },
    {
      name: "BrightLife Protect",
      type: isFr ? "Vie universelle" : "Universal Life",
      desc: isFr
        ? "Couverture permanente flexible avec composante d'épargne à imposition différée. Cotisations et montant d'assurance ajustables selon votre situation."
        : "Flexible permanent coverage with a tax-deferred savings component. Adjustable premiums and death benefit to suit your changing needs.",
    },
    {
      name: isFr ? "Assurance sans examen médical" : "No-Medical Life",
      type: isFr ? "Sans examen" : "No Medical",
      desc: isFr
        ? "Options d'assurance vie temporaire et permanente sans examen médical pour les personnes qui ne se qualifient pas pour une couverture traditionnelle souscrite."
        : "Term and permanent life insurance options without a medical exam for those who may not qualify for traditionally underwritten coverage.",
    },
  ];

  const memberBenefits = [
    { icon: "🎓", title: isFr ? "Bourses d'orphelins" : "Orphan Scholarships", desc: isFr ? "Si un parent assuré décède, les enfants admissibles peuvent recevoir des bourses d'études universitaires." : "If an insured parent dies, eligible children may receive university scholarship payments." },
    { icon: "🏫", title: isFr ? "Bourses concurrentielles" : "Competitive Scholarships", desc: isFr ? "Les membres actifs peuvent demander des bourses d'études annuelles pour leurs enfants." : "Active members can apply for annual academic scholarships for their children." },
    { icon: "🦷", title: isFr ? "Remises dentaires et visuelles" : "Dental & Vision Discounts", desc: isFr ? "Réductions chez des dentistes, optométristes et autres fournisseurs de soins de santé participants." : "Discounts at participating dentists, optometrists, and other health care providers." },
    { icon: "🤝", title: isFr ? "Subventions communautaires" : "Community Grants", desc: isFr ? "Foresters Financial finance des projets communautaires proposés par les membres dans leur région." : "Foresters Financial funds community projects nominated by members in their local area." },
  ];

  return (
    <section style={{ padding: "72px 0", background: "var(--bg-soft)", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        {/* Disclaimer */}
        <div style={{ background: "#fff", border: "1.5px solid var(--green)", borderRadius: "14px", padding: "18px 20px", marginBottom: "52px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p style={{ fontSize: "13px", color: "var(--body)", lineHeight: 1.75, margin: 0 }}>
            <strong>{isFr ? "Avis de courtier indépendant : " : "Independent broker disclosure: "}</strong>
            {isFr
              ? "Quotes Life Insurance est exploité par DCW Financial Inc. Nous sommes des conseillers indépendants agréés par Experior Financial Group Inc. Cette page n'est pas un site Web de Foresters Financial. Foresters n'a pas approuvé cette page. Les caractéristiques des produits et les primes sont confirmées dans votre soumission personnalisée."
              : "Quotes Life Insurance is operated by DCW Financial Inc. We are independent advisors licensed through Experior Financial Group Inc. This page is not a Foresters Financial website. Foresters Financial has not endorsed or approved this page. Product features, eligibility, and premiums are confirmed in your personalised quote."}
          </p>
        </div>

        {/* About Foresters */}
        <div style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "8px" }}>
            {isFr ? "À PROPOS DE FORESTERS FINANCIAL" : "ABOUT FORESTERS FINANCIAL"}
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: "var(--dark)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "16px" }}>
            {isFr ? "Foresters Financial en bref" : "Foresters Financial at a glance"}
          </h2>
          <p style={{ fontSize: "15px", color: "var(--body)", lineHeight: 1.8, maxWidth: "720px", marginBottom: "36px" }}>
            {isFr
              ? "Foresters Financial est une société fraternelle de bienfaisance qui protège les familles depuis 1874, fondée sous le nom de The Independent Order of Foresters. Contrairement aux assureurs traditionnels, chaque police Foresters s'accompagne d'avantages uniques pour les membres — bourses, subventions communautaires, et plus — sans frais supplémentaires. Foresters sert le Canada, les États-Unis et le Royaume-Uni."
              : "Foresters Financial is a fraternal benefit society that has been protecting families since 1874, originally founded as The Independent Order of Foresters. Unlike traditional insurers, every Foresters policy comes with unique member benefits — scholarships, community grants, and more — at no additional cost. Foresters serves Canada, the US, and the UK."}
          </p>

          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {timeline.map((item, i) => (
              <div key={item.year} style={{ display: "flex", gap: "20px", alignItems: "flex-start", paddingBottom: i < timeline.length - 1 ? "20px" : "0" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "60px", height: "28px", background: "var(--green)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#fff" }}>{item.year}</span>
                  </div>
                  {i < timeline.length - 1 && <div style={{ width: "2px", flex: 1, background: "var(--border)", marginTop: "6px", minHeight: "24px" }} />}
                </div>
                <p style={{ fontSize: "13px", color: "var(--body)", lineHeight: 1.65, paddingTop: "4px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Member Benefits highlight */}
        <div style={{ background: "linear-gradient(135deg, #0f1623 0%, #1a2e1d 100%)", borderRadius: "20px", padding: "32px 28px", marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "8px" }}>
            {isFr ? "AVANTAGE UNIQUE" : "WHAT MAKES FORESTERS DIFFERENT"}
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#fff", marginBottom: "8px", fontFamily: "var(--font-sora), sans-serif" }}>
            {isFr ? "Avantages membres inclus dans chaque police" : "Member benefits included with every policy"}
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "24px" }}>
            {isFr
              ? "En tant que société fraternelle de bienfaisance, Foresters Financial offre des avantages que la plupart des assureurs ne proposent pas — sans frais supplémentaires pour les membres assurés."
              : "As a fraternal benefit society, Foresters Financial offers advantages most insurers simply don't — at no extra cost to insured members."}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {memberBenefits.map((b) => (
              <div key={b.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "12px", padding: "18px 16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: "24px", display: "block", marginBottom: "10px" }}>{b.icon}</span>
                <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>{b.title}</h4>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "8px" }}>
            {isFr ? "PRODUITS" : "PRODUCTS"}
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: "var(--dark)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "24px" }}>
            {isFr ? "Produits d'assurance Foresters Financial" : "Foresters Financial Life Insurance Products"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
            {products.map((p) => (
              <div key={p.name} style={{ background: "#fff", borderRadius: "16px", padding: "22px 20px", border: "1px solid var(--border)" }}>
                <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--green)", background: "var(--bg-soft)", padding: "3px 10px", borderRadius: "20px", display: "inline-block", marginBottom: "10px" }}>{p.type}</span>
                <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--dark)", marginBottom: "8px" }}>{p.name}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "14px", fontStyle: "italic" }}>
            {isFr
              ? "Aucun prix n'est affiché — les tarifs Foresters sont confirmés dans votre soumission personnalisée selon votre âge, santé et montant de couverture."
              : "No prices shown — Foresters rates are confirmed in your personalised quote based on your age, health, and coverage amount."}
          </p>
        </div>

        {/* Official link */}
        <div style={{ background: "#fff", borderRadius: "14px", padding: "20px 24px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 800, color: "var(--dark)", marginBottom: "12px" }}>
            {isFr ? "En savoir plus sur le site officiel de Foresters" : "Learn more on Foresters Financial's official site"}
          </h3>
          <a href="https://www.foresters.com/en-ca" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "#4285F4", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            foresters.com/en-ca <span style={{ fontSize: "11px", color: "var(--muted)" }}>(foresters.com)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
