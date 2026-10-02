import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";
import CarrierLogoOverride from "@/components/CarrierLogoOverride";

export const metadata: Metadata = {
  title: "Manulife Life Insurance Canada | Compare & Get a Free Quote | DCW Financial",
  description:
    "Looking for Manulife life insurance? As an authorized Manulife broker, DCW Financial Inc. compares Manulife alongside 20+ top Canadian carriers — Desjardins, Foresters, iA Financial & more — to find you the best rate. 100% free advice. AMF Licensed #179631.",
  keywords:
    "Manulife life insurance Canada, Manulife insurance quote, Manulife term life insurance, Manulife whole life insurance, Manulife insurance broker, Manulife insurance Montreal, Manulife insurance Quebec, compare Manulife insurance, Manulife insurance rates, Manulife insurance review, Manulife life insurance cost, authorized Manulife broker Canada, Manulife insurance alternative, best Manulife life insurance plan, Manulife insurance agent Montreal, assurance vie Manuvie, Manuvie assurance vie Québec, courtier Manuvie Montréal, soumission assurance Manuvie",
  alternates: {
    canonical: "https://quotes-lifeinsurance.com/manulife",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    url: "https://quotes-lifeinsurance.com/manulife",
    siteName: "Quotes Life Insurance",
    title: "Manulife Life Insurance Canada | Compare & Get a Free Quote",
    description:
      "Authorized Manulife broker in Montreal. We compare Manulife with 20+ Canadian carriers to find your best rate. Free quotes, no fees. AMF Licensed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manulife Life Insurance — DCW Financial Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manulife Life Insurance Canada | Free Quote — DCW Financial",
    description:
      "Compare Manulife life insurance with 20+ Canadian carriers. Free quotes from an authorized Manulife broker. AMF Licensed.",
    images: ["https://quotes-lifeinsurance.com/og-image.png"],
  },
};

export default function ManulifePage() {
  return (
    <>
      <CarrierLogoOverride logoSrc="/company/manulife.png" carrierName="Manulife" logoSize="xlarge" />
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <AboutSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
