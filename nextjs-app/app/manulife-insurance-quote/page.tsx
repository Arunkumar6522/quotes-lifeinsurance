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
              ? "Nous sommes des conseillers indépendants — pas des employés de Manuvie. Nous comparons Manuvie avec plus de 20 assureurs canadiens pour trouver votre meilleure couverture."
              : "We are independent advisors — not Manulife employees. We compare Manulife alongside 20+ Canadian carriers to find your best coverage at the lowest rate."}
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

// ── About Manulife ───────────────────────────────────────────────────────────
function ManulifeInfoSection() {
  const { lang } = useLang();
  const isFr = lang === "fr";

  const timeline = [
    { year: "1887", text: isFr ? "Fondée sous le nom de The Manufacturers Life Insurance Company." : "Founded as The Manufacturers Life Insurance Company." },
    { year: "1925", text: isFr ? "Bureau principal au 200, rue Bloor, Toronto." : "Head office at 200 Bloor Street, Toronto officially opens." },
    { year: "1942", text: isFr ? "Première compagnie nord-américaine à offrir une assurance vie aux personnes atteintes de diabète." : "First North American company to offer life insurance to people living with diabetes." },
    { year: "1993", text: isFr ? "Lancement de Banque Manuvie — première compagnie d'assurance canadienne à ouvrir une banque." : "Manulife Bank launches — first Canadian insurance company to open a bank." },
    { year: "1999", text: isFr ? "Entre en Bourse — plus grande introduction en Bourse de l'histoire du Canada à l'époque." : "Goes public on TSX, NYSE, SEHK and PSE — largest IPO in Canada's history at the time." },
    { year: "2004", text: isFr ? "Fusion avec John Hancock — devient le plus grand assureur vie au Canada à l'époque." : "Merger with John Hancock — becomes the largest life insurer in Canada at that time." },
    { year: "2016", text: isFr ? "Premier assureur au Canada à offrir une assurance vie aux personnes séropositives." : "First insurer in Canada to offer life insurance to people who are HIV positive." },
  ];

  const products = [
    {
      name: "Family Term",
      type: isFr ? "Assurance temporaire" : "Term Life",
      desc: isFr
        ? "Couverture temporaire flexible (10, 20, 65 ans ou jusqu'à 100 ans) pour la protection hypothécaire et le remplacement de revenu. Renouvelable et convertible."
        : "Flexible term coverage (10, 20, 65, or to age 100) for mortgage protection and income replacement. Renewable and convertible.",
    },
    {
      name: "Manulife Par",
      type: isFr ? "Vie entière" : "Whole Life",
      desc: isFr
        ? "Couverture vie entière avec primes garanties, valeur de rachat garantie, et possibilité de toucher des participations annuelles non garanties."
        : "Lifetime coverage with guaranteed premiums, guaranteed cash value growth, and opportunity to earn non-guaranteed annual dividends.",
    },
    {
      name: "Manulife UL",
      type: isFr ? "Vie universelle" : "Universal Life",
      desc: isFr
        ? "Couverture permanente avec composante d'investissement. Rendements à imposition différée, cotisations flexibles, choix de comptes de placement."
        : "Permanent coverage with an investment component. Tax-deferred returns, flexible deposits, and choice of investment accounts.",
    },
    {
      name: "Guaranteed Issue Life",
      type: isFr ? "Sans examen médical" : "No Medical",
      desc: isFr
        ? "Protection vie entière sans examen médical, primes garanties, et approbation rapide. Couverture de 10 000 $ à 100 000 $ pour les 18–70 ans."
        : "Lifelong protection, no medical exam, guaranteed premiums, fast approval. Coverage $10,000–$100,000 for ages 18–70.",
    },
    {
      name: "Synergy",
      type: isFr ? "Combinaison 3-en-1" : "3-in-1 Combo",
      desc: isFr
        ? "Une seule police combinant vie, invalidité et maladies graves. Une demande, une souscription, une prime. 100 000 $ à 500 000 $ pour les 18–50 ans."
        : "One policy combining life, disability, and critical illness. One application, one underwriting, one premium. $100K–$500K for ages 18–50.",
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
              ? "Quotes Life Insurance est exploité par DCW Financial Inc. Nous sommes des conseillers indépendants agréés par Experior Financial Group Inc. Cette page n'est pas un site Web de Manuvie. Manuvie n'a pas approuvé cette page. Les caractéristiques des produits et les primes sont confirmées dans votre soumission personnalisée."
              : "Quotes Life Insurance is operated by DCW Financial Inc. We are independent advisors licensed through Experior Financial Group Inc. This page is not a Manulife website. Manulife has not endorsed or approved this page. Product features, eligibility, and premiums are confirmed in your personalised quote."}
          </p>
        </div>

        {/* About Manulife */}
        <div style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "8px" }}>
            {isFr ? "À PROPOS DE MANUVIE" : "ABOUT MANULIFE"}
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: "var(--dark)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "16px" }}>
            {isFr ? "Manuvie en bref" : "Manulife at a glance"}
          </h2>
          <p style={{ fontSize: "15px", color: "var(--body)", lineHeight: 1.8, maxWidth: "720px", marginBottom: "36px" }}>
            {isFr
              ? "Manuvie a débuté en 1887 sous le nom de The Manufacturers Life Insurance Company, avec son siège social au 200, rue Bloor, Toronto, ouvert en 1925. Aujourd'hui, Manuvie offre l'assurance vie temporaire, l'assurance vie entière participante, l'assurance vie universelle, l'assurance vie sans examen médical et une assurance combinée au Canada, ainsi que le programme Vitalité Manuvie sur les polices admissibles. Les détails complets sont disponibles sur le site officiel de Manuvie, manulife.ca."
              : "Manulife began in 1887 as The Manufacturers Life Insurance Company, with its Toronto head office at 200 Bloor Street opening in 1925. Today Manulife offers term life insurance, participating whole life, universal life, guaranteed issue life, and combination insurance in Canada, along with the Manulife Vitality wellness program on eligible policies. Full, current product detail is available on Manulife's official site, manulife.ca."}
          </p>

          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {timeline.map((item, i) => (
              <div key={item.year} style={{ display: "flex", gap: "20px", alignItems: "flex-start", paddingBottom: i < timeline.length - 1 ? "20px" : "0" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "56px", height: "28px", background: "var(--green)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#fff" }}>{item.year}</span>
                  </div>
                  {i < timeline.length - 1 && <div style={{ width: "2px", flex: 1, background: "var(--border)", marginTop: "6px", minHeight: "24px" }} />}
                </div>
                <p style={{ fontSize: "13px", color: "var(--body)", lineHeight: 1.65, paddingTop: "4px" }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "16px" }}>
            {isFr ? "Source : Manuvie, « Notre histoire » — manulife.com/ca/en/about-us/who-we-are/our-story" : "Source: Manulife, \"Our Story\" — manulife.com/ca/en/about-us/who-we-are/our-story"}
          </p>
        </div>

        {/* Products */}
        <div style={{ marginBottom: "52px" }}>
          <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "8px" }}>
            {isFr ? "PRODUITS" : "PRODUCTS"}
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: "var(--dark)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "24px" }}>
            {isFr ? "Produits d'assurance vie Manuvie" : "Manulife Life Insurance Products"}
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
            {isFr ? "Aucun prix n'est affiché sur cette page car Manuvie ne publie pas les tarifs des produits conseiller en ligne — votre soumission est préparée pour vous." : "No price is shown on this page because Manulife does not publish advisor-product prices online — your quote is prepared for you."}
          </p>
        </div>

        {/* Vitality */}
        <div style={{ background: "#fff", borderRadius: "16px", padding: "28px 24px", marginBottom: "40px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--dark)", marginBottom: "10px" }}>
            {isFr ? "🌿 Programme Vitalité Manuvie" : "🌿 Manulife Vitality Program"}
          </h3>
          <p style={{ fontSize: "14px", color: "var(--body)", lineHeight: 1.75, margin: 0 }}>
            {isFr
              ? "Les polices Manuvie admissibles incluent Vitalité Go de Manuvie sans frais supplémentaires, avec des récompenses pour les saines habitudes. Sur l'assurance temporaire familiale et Manuvie VU avec Vitalité Plus, la participation au programme peut réduire vos coûts d'assurance jusqu'à 15 %, avec 10 % automatiquement la première année. Consultez un conseiller pour savoir comment Vitalité s'appliquerait à la police que vous envisagez."
              : "Eligible Manulife policies include Manulife Vitality Go at no added cost, with rewards for healthy habits. On Family Term and Manulife UL with Vitality Plus, engaging with the program can reduce your insurance costs by up to 15%, with 10% automatically in the first year. Ask an advisor how Vitality would apply to the policy you are considering."}
          </p>
        </div>

        {/* Official links */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--dark)", marginBottom: "14px" }}>
            {isFr ? "En savoir plus sur le site officiel de Manuvie" : "Learn more on Manulife's official site"}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { label: isFr ? "Histoire et chronologie de Manuvie" : "Manulife story, history and timeline", href: "https://www.manulife.com/ca/en/about-us/who-we-are/our-story" },
              { label: isFr ? "Aperçu des assurances" : "Insurance overview — term, permanent, guaranteed issue", href: "https://www.manulife.ca/personal/insurance/insurance-explained.html" },
              { label: "Manulife Par — whole life insurance", href: "https://www.manulife.com/ca/en/personal/insurance/our-products/life-insurance/permanent-life-insurance/manulife-par-whole-life" },
              { label: isFr ? "FAQ Vitalité Manuvie" : "Manulife Vitality — frequently asked questions", href: "https://www.manulife.com/ca/en/personal/support/insurance/vitality/faq" },
              { label: isFr ? "Clients existants — accès en ligne" : "Existing customers — access online accounts", href: "https://www.manulife.com/ca/en/personal/support/access-online-accounts" },
            ].map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "13px", color: "#4285F4", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                {link.label} <span style={{ fontSize: "11px", color: "var(--muted)" }}>(manulife.ca)</span>
              </a>
            ))}
          </div>
        </div>

        {/* Trademark footnote */}
        <p style={{ fontSize: "11px", color: "var(--muted)", lineHeight: 1.7, borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
          {isFr
            ? "Manuvie, Temporaire familiale, Synergy et Vitalité Manuvie sont des marques de commerce de La Compagnie d'Assurance-Vie Manufacturers et sont utilisées ici en texte ordinaire pour identifier les produits discutés. Vitalité, Vitalité Go et Vitalité Plus sont des marques de commerce de Vitality Group International, Inc. et sont utilisées par La Compagnie d'Assurance-Vie Manufacturers et ses affiliés sous licence. Les produits d'assurance sont émis par l'assureur applicable."
            : "Manulife, Family Term, Synergy, and Manulife Vitality are trademarks of The Manufacturers Life Insurance Company and are used here in plain text to identify the products discussed. Vitality, Vitality Go, and Vitality Plus are trademarks of Vitality Group International, Inc. and are used by The Manufacturers Life Insurance Company and its affiliates under licence. Insurance products are issued by the applicable carrier."}
        </p>

      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ManulifePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExpertAdvisorsSection />
        <PartnersSection />
        <AboutSection />
        <ManulifeInfoSection />
        <GoogleReviewsSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
