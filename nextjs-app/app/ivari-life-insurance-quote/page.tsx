import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import AboutSection from "@/components/home/AboutSection";
import GoogleReviewsSection from "@/components/home/GoogleReviewsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";
import { IvariAdvisorsSection, IvariInfoSection } from "./ClientSections";
import IvariIntro from "./IvariIntroSection";

export const metadata: Metadata = {
  title: "ivari Life Insurance Canada | Compare & Get a Free Quote | DCW Financial",
  description:
    "Looking for ivari life insurance? DCW Financial Inc. compares ivari alongside 20+ top Canadian carriers to find you the best rate. AM Best A (Excellent) rated. 100% free advice. AMF Licensed #179631.",
  keywords:
    "ivari life insurance Canada, ivari insurance quote, ivari term life insurance, ivari universal life insurance, ivari critical illness insurance, ivari no medical life insurance, ivari Term 30, ivari SelectOptions, ivari insurance broker Montreal, ivari insurance Quebec, compare ivari insurance, assurance vie ivari, courtier ivari Montréal",
  alternates: { canonical: "https://quotes-lifeinsurance.com/ivari-life-insurance-quote" },
  openGraph: {
    type: "website", locale: "en_CA", alternateLocale: "fr_CA",
    url: "https://quotes-lifeinsurance.com/ivari-life-insurance-quote",
    siteName: "Quotes Life Insurance",
    title: "ivari Life Insurance Canada | Compare & Get a Free Quote",
    description: "DCW Financial Inc. compares ivari with 20+ Canadian carriers to find your best rate. Free quotes, no fees. AMF Licensed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ivari Life Insurance — DCW Financial Inc." }],
  },
};

export default function IvariPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero with ivari logo */}
        <HeroSection
          overrideH1a="ivari Life Insurance"
          overrideH1b="Compare & Get Your Free Quote"
          overrideSub="ivari has been in the Canadian market since 1928 — offering term, universal life, critical illness, and no-medical coverage, including the uniquely flexible Term 30 with built-in SelectOptions. We compare ivari with 20+ carriers to find your best fit. Our advice is always"
          overrideH1aFr="Assurance vie ivari"
          overrideH1bFr="Comparez et obtenez votre soumission gratuite"
          overrideSubFr="ivari est présent sur le marché canadien depuis 1928 — offrant l'assurance temporaire, vie universelle, maladies graves et sans examen médical, incluant la formule flexible Temporaire 30 avec SelectOptions. Nous comparons ivari à plus de 20 assureurs canadiens. Nos conseils sont toujours"
          carrierLogo="/company/ivari.png"
          carrierName="ivari"
        />
        {/* 2. Small intro about ivari */}
        <IvariIntro />
        {/* 3. Meet the expert advisors */}
        <IvariAdvisorsSection />
        {/* 4. Full ivari deep-dive */}
        <IvariInfoSection />
        {/* 5. Rest of page */}
        <PartnersSection />
        <AboutSection />
        <GoogleReviewsSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
