"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

// ── Translations ──────────────────────────────────────────
export const translations = {
  en: {
    // Nav
    home: "Home", services: "Services", about: "About", contact: "Contact",
    getQuote: "Get a Free Quote",
    // Services dropdown
    termLife: "Term Life Insurance", wholeLife: "Whole Life Insurance",
    universalLife: "Universal Life Insurance", criticalIllness: "Critical Illness Coverage",
    disability: "Disability Insurance",
    // Hero
    heroLabel: "AMF Licensed Broker · Lic. #179631",
    heroH1a: "Protect What", heroH1b: "Matters Most", heroH1c: "to Your Family",
    heroSub: "We compare 20+ top Canadian carriers — Manulife, Desjardins, Foresters and more — to find you the best coverage at the lowest rate. Our advice is always",
    heroFree: "100% free",
    heroCta1: "Get My Free Quote →", heroCta2: "Learn More",
    heroFormTitle: "Get Your Life Insurance Quote",
    heroFormLabel: "Free Quote — No Obligation",
    // Trust
    trust1: "AMF Regulated", trust2: "Free Advice", trust3: "20+ Carriers", trust4: "4.9 Rating",
    // About
    aboutLabel: "About Us",
    aboutH2a: "Every Family Deserves", aboutH2b: "Financial Security",
    aboutP1: "Quotes Life Insurance — operated by DCW Financial Inc. — is a family-built, client-first brokerage led by Denesh Logeswaran and Lucia Medina. Founded in 1998.",
    aboutP2: "We operate as independent advisors contracted through Experior Financial Group Inc. (MGA), giving us access to 20+ top Canadian carriers — so we always recommend what's right for you.",
    aboutAmf: "AMF Licensed & Regulated",
    aboutAmfSub: "Licence #179631 · Firm Registration #608808",
    aboutCta: "Learn More About Us →",
    stat1: "Families Protected", stat2: "Carrier Partners", stat3: "Years Experience", stat4: "Google Rating",
    // Services section
    servicesLabel: "Our Services",
    servicesH2a: "Coverage for Every", servicesH2b: "Stage of Life",
    servicesSub: "Compare policies across 20+ carriers — one call, zero fees.",
    viewAll: "View All Services",
    // WhyUs
    whyLabel: "Why Choose Us",
    whyH2a: "Your Family Deserves the Best —", whyH2b: "Here's Why We're It",
    // Partners
    partnersLabel: "Our Carriers",
    partnersH2: "Insurance Companies We Represent",
    // Testimonials
    testLabel: "Testimonials",
    testH2a: "Client Feedback That", testH2b: "Speaks Volumes",
    testSub: "Based on 10 Google Reviews",
    // CTA
    ctaH2: "Ready to Protect Your Family?",
    ctaSub: "Get your free quote in minutes. No fees, no pressure — just expert advice from licensed Canadian brokers.",
    ctaBtn: "Get My Free Quote →",
    // Footer
    footerTagline: "A family-built, client-first brokerage.",
    footerFounders: "Operated by Denesh Logeswaran & Lucia Medina.",
    footerMGA: "Contracted through Experior Financial Group Inc. (MGA)",
    footerLinks: "Quick Links", footerServices: "Our Services", footerContact: "Contact",
    footerVerify: "Verify Licence ↗",
    footerCopyright: "Quotes Life Insurance — DCW Financial Inc. All rights reserved.",
    footerPrivacy: "Privacy Policy", footerTerms: "Terms of Service",
    footerAmf: "Regulated by the AMF — Autorité des marchés financiers",
    footerAmfNumbers: "Licence #179631 | Firm Registration #608808",
  },
  fr: {
    home: "Accueil", services: "Services", about: "À propos", contact: "Contact",
    getQuote: "Obtenir un devis",
    termLife: "Assurance vie temporaire", wholeLife: "Assurance vie entière",
    universalLife: "Assurance vie universelle", criticalIllness: "Couverture maladies graves",
    disability: "Assurance invalidité",
    heroLabel: "Courtier agréé AMF · Lic. #179631",
    heroH1a: "Protégez Ce Qui", heroH1b: "Compte Le Plus", heroH1c: "pour Votre Famille",
    heroSub: "Nous comparons 20+ assureurs canadiens de premier plan — Manuvie, Desjardins, Foresters et plus — pour vous trouver la meilleure couverture au taux le plus bas. Nos conseils sont toujours",
    heroFree: "100% gratuits",
    heroCta1: "Mon devis gratuit →", heroCta2: "En savoir plus",
    heroFormTitle: "Obtenez votre devis d'assurance vie",
    heroFormLabel: "Devis gratuit — Sans obligation",
    trust1: "Réglementé AMF", trust2: "Conseils gratuits", trust3: "20+ assureurs", trust4: "Note 4.9",
    aboutLabel: "À propos de nous",
    aboutH2a: "Chaque famille mérite", aboutH2b: "la sécurité financière",
    aboutP1: "Quotes Life Insurance — exploité par DCW Financial Inc. — est un courtage familial et axé sur le client, dirigé par Denesh Logeswaran et Lucia Medina. Fondé en 1998.",
    aboutP2: "Nous agissons à titre de conseillers indépendants sous contrat avec Experior Financial Group Inc. (MGA), ce qui nous donne accès à 20+ assureurs canadiens de premier plan.",
    aboutAmf: "Agréé et réglementé par l'AMF",
    aboutAmfSub: "Licence n° 179631 · Cabinet n° 608808",
    aboutCta: "En savoir plus →",
    stat1: "Familles protégées", stat2: "Partenaires assureurs", stat3: "Ans d'expérience", stat4: "Note Google",
    servicesLabel: "Nos services",
    servicesH2a: "Couverture pour", servicesH2b: "chaque étape de vie",
    servicesSub: "Comparez les polices auprès de 20+ assureurs — un appel, zéro frais.",
    viewAll: "Voir tous les services",
    whyLabel: "Pourquoi nous choisir",
    whyH2a: "Votre famille mérite le mieux —", whyH2b: "Voici pourquoi c'est nous",
    partnersLabel: "Nos assureurs",
    partnersH2: "Compagnies d'assurance que nous représentons",
    testLabel: "Témoignages",
    testH2a: "Des avis clients qui", testH2b: "parlent d'eux-mêmes",
    testSub: "Basé sur 10 avis Google",
    ctaH2: "Prêt à protéger votre famille ?",
    ctaSub: "Obtenez votre devis gratuit en quelques minutes. Sans frais, sans pression — juste des conseils d'experts.",
    ctaBtn: "Mon devis gratuit →",
    footerTagline: "Un courtage familial, axé sur le client.",
    footerFounders: "Exploité par Denesh Logeswaran & Lucia Medina.",
    footerMGA: "Sous contrat avec Experior Financial Group Inc. (MGA)",
    footerLinks: "Liens rapides", footerServices: "Nos services", footerContact: "Contact",
    footerVerify: "Vérifier la licence ↗",
    footerCopyright: "Quotes Life Insurance — DCW Financial Inc. Tous droits réservés.",
    footerPrivacy: "Politique de confidentialité", footerTerms: "Conditions d'utilisation",
    footerAmf: "Réglementé par l'AMF — Autorité des marchés financiers",
    footerAmfNumbers: "Licence n° 179631 | Cabinet n° 608808",
  },
} as const;

export type Lang = keyof typeof translations;
export type T    = (typeof translations)[Lang];

// ── Context ───────────────────────────────────────────────
interface LangCtx { lang: Lang; t: T; setLang: (l: Lang) => void; }
const Ctx = createContext<LangCtx>({
  lang: "en", t: translations.en, setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const setLang = useCallback((l: Lang) => setLangState(l), []);
  return (
    <Ctx.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() { return useContext(Ctx); }
