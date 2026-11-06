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
import { ExpertAdvisorsSection, ManulifeInfoSection } from "./ClientSections";

export const metadata: Metadata = {
  title: "Manulife Life Insurance Canada | Compare & Get a Free Quote | DCW Financial",
  description:
    "Looking for Manulife life insurance? DCW Financial Inc. compares Manulife alongside 20+ top Canadian carriers — Desjardins, Foresters, iA Financial & more — to find you the best rate. 100% free advice. AMF Licensed #179631.",
  keywords:
    "Manulife life insurance Canada, Manulife insurance quote, Manulife term life insurance, Manulife whole life insurance, Manulife insurance broker, Manulife insurance Montreal, Manulife insurance Quebec, compare Manulife insurance, Manulife insurance rates, Manulife insurance review, Manulife life insurance cost, Manulife broker Canada, Manulife insurance agent Montreal, assurance vie Manuvie, Manuvie assurance vie Québec, courtier Manuvie Montréal",
  alternates: {
    canonical: "https://quotes-lifeinsurance.com/manulife-insurance-quote",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    url: "https://quotes-lifeinsurance.com/manulife-insurance-quote",
    siteName: "Quotes Life Insurance",
    title: "Manulife Life Insurance Canada | Compare & Get a Free Quote",
    description:
      "DCW Financial Inc. compares Manulife with 20+ Canadian carriers to find your best rate. Free quotes, no fees. AMF Licensed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Manulife Life Insurance — DCW Financial Inc." }],
  },
};

export default function ManulifePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          overrideH1a="Manulife Life Insurance"
          overrideH1b="Compare & Get Your Free Quote"
          overrideSub="Manulife is one of Canada's largest life insurers — offering term, whole life, universal life, and the Manulife Vitality wellness program. As independent advisors we compare Manulife with 20+ Canadian carriers to find what's genuinely right for you. Our advice is always"
        />
        <ManulifeInfoSection />
        <ManulifeInfoSection />
        <ExpertAdvisorsSection carrier="manulife" />
        <PartnersSection />
        <GoogleReviewsSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
