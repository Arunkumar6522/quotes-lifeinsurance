import type { Metadata } from "next";
import { Nunito, Sora } from "next/font/google";
import Script from "next/script";
import { LangProvider } from "@/lib/i18n";
import { ModalProvider } from "@/lib/modal";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";
import PageTransition from "@/components/PageTransition";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quotes-lifeinsurance.com"),
  title: "Quotes Life Insurance | Free Life Insurance Quotes in Canada",
  description:
    "Get free life insurance quotes from 20+ top Canadian carriers. DCW Financial Inc. compares Manulife, Desjardins, Foresters & more to find you the best coverage at the lowest rate. AMF Licensed #179631. Serving Montreal, Quebec & all of Canada.",
  keywords:
    "life insurance Canada, free life insurance quotes Canada, best life insurance Canada, term life insurance Canada, whole life insurance Canada, universal life insurance Canada, critical illness insurance Canada, disability insurance Canada, life insurance broker Montreal, life insurance Quebec, life insurance Montreal, life insurance quote Montreal, life insurance agent Montreal, affordable life insurance Canada, compare life insurance Canada, no medical exam life insurance Canada, life insurance for newcomers Canada, life insurance for seniors Canada, mortgage life insurance Canada, life insurance for self-employed Canada, AMF licensed broker Quebec, independent insurance broker Canada, courtier assurance vie Montréal, assurance vie Québec, assurance vie temporaire Québec, meilleure assurance vie Québec, soumission assurance vie Québec, comparer assurance vie Québec, assurance vie Montréal, assurance vie pas cher Québec, assurance maladies graves Québec, assurance invalidité Québec, assurance vie familiale Québec, assurance vie prêt hypothécaire Québec, prix assurance vie Québec, DCW Financial Inc, Experior Financial Group Quebec",
  authors: [{ name: "DCW Financial Inc." }],
  creator: "DCW Financial Inc.",
  publisher: "DCW Financial Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    url: "https://quotes-lifeinsurance.com",
    siteName: "Quotes Life Insurance",
    title: "Quotes Life Insurance | Free Life Insurance Quotes in Canada",
    description:
      "Compare 20+ top Canadian life insurance carriers. Free quotes, no fees, expert advice from AMF licensed brokers. Serving Montreal, Quebec & all of Canada.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quotes Life Insurance - Free Life Insurance Quotes in Canada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quotes Life Insurance | Free Life Insurance Quotes in Canada",
    description:
      "Compare 20+ top Canadian life insurance carriers. Free quotes, no fees, expert advice from AMF licensed brokers.",
    images: ["https://quotes-lifeinsurance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://quotes-lifeinsurance.com",
    languages: {
      "en-CA": "https://quotes-lifeinsurance.com",
      "fr-CA": "https://quotes-lifeinsurance.com",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${sora.variable}`}>
      <head>
        {/* iPhone Dynamic Island + Samsung Fold viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#00a759" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Google Search Console verification — add GSC_VERIFICATION to env */}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_VERIFICATION} />
        )}
        {/* llms.txt — for AI/LLM discoverability (ChatGPT, Claude, Perplexity, Gemini) */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt — AI readable site summary" />
        {/* Preload hero background — reduces LCP */}
        <link rel="preload" as="image" href="/hero-bg.jpg" fetchPriority="high" />
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://app.leadcapture.io" />
        <link rel="dns-prefetch" href="https://app.leadcapture.io" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        {/* JSON-LD Structured Data — for Google, LLMs & AI search */}
        <Script id="jsonld-org" type="application/ld+json" strategy="afterInteractive">{`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "InsuranceAgency",
              "@id": "https://quotes-lifeinsurance.com/#organization",
              "name": "DCW Financial Inc.",
              "alternateName": "Quotes Life Insurance",
              "url": "https://quotes-lifeinsurance.com",
              "logo": "https://quotes-lifeinsurance.com/logo.png",
              "description": "DCW Financial Inc. is an AMF-licensed independent life insurance brokerage in Montreal, Quebec. We compare 20+ top Canadian carriers including Manulife, Desjardins, Foresters, iA Financial, Empire Life, Humania, and more to find the best coverage at the lowest rate. Our advice is always 100% free.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4900 Rue Jean-Talon O UNIT 200",
                "addressLocality": "Montreal",
                "addressRegion": "QC",
                "postalCode": "H4P 1W9",
                "addressCountry": "CA"
              },
              "areaServed": [
                { "@type": "Country", "name": "Canada" },
                { "@type": "Province", "name": "Quebec" },
                { "@type": "Province", "name": "Ontario" },
                { "@type": "Province", "name": "British Columbia" }
              ],
              "serviceType": [
                "Term Life Insurance",
                "Whole Life Insurance",
                "Universal Life Insurance",
                "Critical Illness Insurance",
                "Disability Insurance",
                "Health and Dental Insurance",
                "Travel Insurance",
                "Business Insurance"
              ],
              "knowsAbout": [
                "Life Insurance Canada",
                "Term Life Insurance Canada",
                "Whole Life Insurance Canada",
                "Critical Illness Insurance Canada",
                "Disability Insurance Canada",
                "Manulife Insurance",
                "Desjardins Insurance",
                "Foresters Financial",
                "iA Financial Group",
                "AMF Regulated Insurance",
                "Independent Insurance Broker",
                "Free Life Insurance Quotes Canada"
              ],
              "founder": [
                { "@type": "Person", "name": "Denesh Logeswaran", "jobTitle": "Co-Founder & Director" },
                { "@type": "Person", "name": "Lucia Medina", "jobTitle": "Co-Founder & Director" }
              ],
              "license": "AMF Licence #179631",
              "telephone": "+1-514-662-0403",
              "priceRange": "Free",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "1",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://maps.google.com/?cid=5123821588915673731"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://quotes-lifeinsurance.com/#website",
              "url": "https://quotes-lifeinsurance.com",
              "name": "Quotes Life Insurance",
              "description": "Free life insurance quotes from 20+ top Canadian carriers. AMF licensed broker.",
              "publisher": { "@id": "https://quotes-lifeinsurance.com/#organization" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://quotes-lifeinsurance.com/articles?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does life insurance cost in Canada?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Life insurance costs in Canada vary by age, health, and coverage amount. A healthy 30-year-old can get $500,000 in term life insurance for as low as $25-$40/month. We compare 20+ carriers to find you the best rate. Get a free quote to see your exact price."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best life insurance in Canada?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best life insurance in Canada depends on your needs and budget. Top carriers include Manulife, Desjardins, Foresters, iA Financial, Empire Life, and Canada Protection Plan. As an independent broker, we compare all of them to find what's best for you."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is life insurance advice free in Canada?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, working with an independent insurance broker like DCW Financial Inc. is 100% free. We are compensated by the insurance carrier only if you choose to take a policy. You never pay us a fee."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need life insurance in Canada?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If anyone depends on your income — a spouse, children, or business partner — life insurance is essential. It replaces your income, pays off debts, covers funeral costs, and protects your family's financial future."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is term life insurance in Canada?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Term life insurance provides coverage for a set period (10, 20, or 30 years). It's the most affordable type of life insurance in Canada and is ideal for protecting your family during your working years. Coverage amounts typically range from $100,000 to $10 million."
                  }
                }
              ]
            }
          ]
        }
      `}</Script>
      {/* Google Analytics 4 — loaded after page is fully interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID ?? 'G-YBFPTJ2GCT'}', { page_path: window.location.pathname });
      `}</Script>
      {/* Remove LeadBot popup wrapper the instant it's created — prevents double form */}
      <Script id="leadbot-popup-killer" strategy="afterInteractive">{`
        (function() {
          function removePopup() {
            var el = document.getElementById('lead-bot-wrapper-3604s');
            if (el) el.remove();
          }
          removePopup();
          var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(m) {
              m.addedNodes.forEach(function(node) {
                if (node.nodeType === 1 && node.id === 'lead-bot-wrapper-3604s') {
                  node.remove();
                }
              });
            });
          });
          observer.observe(document.body, { childList: true, subtree: false });
        })();
      `}</Script>
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "var(--font-nunito), system-ui, sans-serif", minHeight: "100vh" }}>
        <LangProvider>
          <ModalProvider>
            <PageLoader />
            <RevealObserver />
            <SmoothScroll>
              <PageTransition>
                {children}
              </PageTransition>
            </SmoothScroll>
          </ModalProvider>
        </LangProvider>
      </body>
    </html>
  );
}
