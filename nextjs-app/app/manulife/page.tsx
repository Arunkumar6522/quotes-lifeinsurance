import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";

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
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />

        {/* ── LeadBot Form — Manulife only ── */}
        <section style={{ background: "#fff", padding: "80px 0 96px" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="section-label">
                <span className="section-label-dot" />
                Manulife Life Insurance
              </span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", marginTop: 16, marginBottom: 12 }}>
                Get Your Free Manulife Quote
              </h2>
              <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto", fontSize: 16, lineHeight: 1.7 }}>
                As an authorized Manulife broker, we compare Manulife alongside 20+ top Canadian carriers to find you the best rate. No fees, ever.
              </p>
            </div>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              <div id="leadforms-embd-form" />
            </div>
          </div>
        </section>

        <AboutSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />

      {/* LeadBot scripts — loaded only on this page */}
      <Script
        id="leadbot-token"
        strategy="afterInteractive"
      >{`window.form_token = "GLFT-SLXXIK16MWTFAIC7BTF8VQAQO5O";`}</Script>
      <Script
        src="https://api.useleadbot.com/lead-bots/get-pixel-script.js"
        strategy="afterInteractive"
      />
    </>
  );
}
