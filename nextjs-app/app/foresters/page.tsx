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

export const metadata: Metadata = {
  title: "Foresters Life Insurance Canada | Compare & Get a Free Quote | DCW Financial",
  description:
    "Looking for Foresters life insurance? As an authorized Foresters broker, DCW Financial Inc. compares Foresters alongside 20+ top Canadian carriers to find you the best rate. 100% free advice. AMF Licensed #179631.",
  keywords:
    "Foresters life insurance Canada, Foresters insurance quote, Foresters term life insurance, Foresters Financial Canada, Foresters insurance broker Montreal, Foresters insurance Quebec, compare Foresters insurance, Foresters insurance rates, Foresters insurance review, authorized Foresters broker Canada, Foresters life insurance cost, Foresters insurance agent Montreal, assurance vie Foresters, Foresters assurance vie Québec, courtier Foresters Montréal",
  alternates: {
    canonical: "https://quotes-lifeinsurance.com/foresters",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    url: "https://quotes-lifeinsurance.com/foresters",
    siteName: "Quotes Life Insurance",
    title: "Foresters Life Insurance Canada | Compare & Get a Free Quote",
    description:
      "Authorized Foresters broker in Montreal. We compare Foresters with 20+ Canadian carriers to find your best rate. Free quotes, no fees. AMF Licensed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Foresters Life Insurance — DCW Financial Inc." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foresters Life Insurance Canada | Free Quote — DCW Financial",
    description: "Compare Foresters life insurance with 20+ Canadian carriers. Free quotes from an authorized Foresters broker. AMF Licensed.",
    images: ["https://quotes-lifeinsurance.com/og-image.png"],
  },
};

export default function ForestersPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
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
