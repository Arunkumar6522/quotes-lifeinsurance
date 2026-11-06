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
import { ForestersAdvisorsSection, ForestersInfoSection } from "./ClientSections";
import ForestersIntro from "./ForestersIntroSection";

export const metadata: Metadata = {
  title: "Foresters Life Insurance Canada | Compare & Get a Free Quote | DCW Financial",
  description:
    "Looking for Foresters life insurance? DCW Financial Inc. compares Foresters alongside 20+ top Canadian carriers to find you the best rate. Every Foresters policy includes unique member benefits — scholarships, community grants & more. AMF Licensed #179631.",
  keywords:
    "Foresters life insurance Canada, Foresters Financial insurance quote, Foresters term life insurance, Foresters BrightLife Term, Foresters member benefits, Foresters insurance broker Montreal, Foresters insurance Quebec, compare Foresters insurance, Foresters broker Canada, assurance vie Foresters, Foresters assurance vie Québec, courtier Foresters Montréal",
  alternates: { canonical: "https://quotes-lifeinsurance.com/foresters-life-insurance-quote" },
  openGraph: {
    type: "website", locale: "en_CA", alternateLocale: "fr_CA",
    url: "https://quotes-lifeinsurance.com/foresters-life-insurance-quote",
    siteName: "Quotes Life Insurance",
    title: "Foresters Life Insurance Canada | Compare & Get a Free Quote",
    description: "DCW Financial Inc. compares Foresters with 20+ Canadian carriers to find your best rate. Free quotes, no fees. AMF Licensed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Foresters Life Insurance — DCW Financial Inc." }],
  },
};

export default function ForestersPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero with Foresters logo */}
        <HeroSection
          overrideH1a="Foresters Life Insurance"
          overrideH1b="Compare & Get Your Free Quote"
          overrideSub="Foresters Financial has been protecting families since 1874 — and every policy comes with unique member benefits like orphan scholarships, community grants, and dental discounts, at no extra cost. We compare Foresters with 20+ carriers to find your best fit. Our advice is always"
          carrierLogo="/company/foresters.png"
          carrierName="Foresters Financial"
        />
        {/* 2. Small intro about Foresters */}
        <ForestersIntro />
        {/* 3. Meet the expert advisors */}
        <ForestersAdvisorsSection />
        {/* 4. Full Foresters deep-dive */}
        <ForestersInfoSection />
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
