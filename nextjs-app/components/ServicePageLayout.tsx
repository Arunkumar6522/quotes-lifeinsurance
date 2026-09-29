"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useModal } from "@/lib/modal";
import { useRouter } from "next/navigation";
import { useLang } from "@/lib/i18n";

export interface ServicePageProps {
  title: string;
  titleFr: string;
  tagline: string;
  taglineFr?: string;
  icon: string;
  color: string;
  description: string;
  descriptionFr?: string;
  highlights: { heading: string; text: string }[];
  highlightsFr?: { heading: string; text: string }[];
  bestFor: string[];
  bestForFr?: string[];
  faqs: { q: string; a: string }[];
  faqsFr?: { q: string; a: string }[];
}

/* ── Per-service SVG icons ─────────────────────────────── */
const ServiceIcons: Record<string, React.ReactElement> = {
  "Term Life Insurance": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  "Whole Life Insurance": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  "Universal Life Insurance": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  ),
  "Critical Illness Coverage": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  "Disability Insurance": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
    </svg>
  ),
};

/* ── Per-service cover images ─────────────────────────────── */
const ServiceCovers: Record<string, { image: string; position: string; gradient?: string }> = {
  "Term Life Insurance":       { image: "/cover-term-life.jpg",        position: "center center" },
  "Whole Life Insurance":      { image: "/cover-whole-life.jpg",       position: "center 40%" },
  "Universal Life Insurance":  { image: "/cover-universal-life.jpg",   position: "center center" },
  "Critical Illness Coverage": { image: "/cover-critical-illness.jpg", position: "center 40%" },
  "Disability Insurance":      { image: "/cover-disability.jpg",       position: "center 35%" },
};

const otherServices = [
  { label: "Term Life Insurance",       href: "/services/term-life" },
  { label: "Whole Life Insurance",      href: "/services/whole-life" },
  { label: "Universal Life Insurance",  href: "/services/universal-life" },
  { label: "Critical Illness Coverage", href: "/services/critical-illness" },
  { label: "Disability Insurance",      href: "/services/disability" },
];

/* Highlight icons — each point gets a distinct SVG */
const HighlightIcons = [
  // Check shield
  <svg key="0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
  </svg>,
  // Clock
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>,
  // Refresh / convert
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
  </svg>,
  // Lock
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>,
  // Star
  <svg key="4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>,
  // Arrow right
  <svg key="5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>,
];

const frServiceNames: Record<string, string> = {
  "Term Life Insurance": "Assurance vie temporaire",
  "Whole Life Insurance": "Assurance vie entière",
  "Universal Life Insurance": "Assurance vie universelle",
  "Critical Illness Coverage": "Couverture maladies graves",
  "Disability Insurance": "Assurance invalidité",
};

export default function ServicePageLayout({ data }: { data: ServicePageProps }) {
  const { openModal } = useModal();
  const router = useRouter();
  const { t, lang } = useLang();
  const ServiceIcon = ServiceIcons[data.title] ?? ServiceIcons["Term Life Insurance"];
  const cover = ServiceCovers[data.title] ?? ServiceCovers["Term Life Insurance"];
  const displayTitle = lang === "fr" && data.titleFr ? data.titleFr : data.title;
  const displayTagline = lang === "fr" && data.taglineFr ? data.taglineFr : data.tagline;
  const displayDescription = lang === "fr" && data.descriptionFr ? data.descriptionFr : data.description;
  const displayHighlights = lang === "fr" && data.highlightsFr ? data.highlightsFr : data.highlights;
  const displayBestFor = lang === "fr" && data.bestForFr ? data.bestForFr : data.bestFor;
  const displayFaqs = lang === "fr" && data.faqsFr ? data.faqsFr : data.faqs;

  const isLifeInsurance = ["Term Life Insurance","Whole Life Insurance","Universal Life Insurance"].includes(data.title);
  const handleQuoteClick = () => { if (isLifeInsurance) { openModal(); } else { router.push("/contact"); } };

  return (
    <>
      <Header />
      <main>

        {/* ── Cover Image Hero ─────────────────────── */}
        <section className="sp-cover" style={{
          background: cover.image
            ? `linear-gradient(180deg, rgba(15,22,35,0.3) 0%, rgba(15,22,35,0.88) 70%, rgba(15,22,35,0.98) 100%), url('${cover.image}') ${cover.position} / cover no-repeat`
            : (cover.gradient ?? "linear-gradient(135deg, #1a3a1d 0%, #0f1623 100%)"),
        }}>
          <div className="container sp-cover-content">
            {/* Back button & Breadcrumb */}
            <div className="sp-nav-row">
              <button onClick={() => router.back()} className="sp-back-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                {t.spBack}
              </button>
              <nav className="sp-breadcrumb">
                <Link href="/" className="sp-breadcrumb-link">{t.home}</Link>
                <span className="sp-breadcrumb-sep">/</span>
                <span className="sp-breadcrumb-current">{displayTitle}</span>
              </nav>
            </div>

            {/* Hero content */}
            <div className="sp-hero-body">
              <h1 className="sp-hero-h1">{displayTitle}</h1>
              <p className="sp-hero-tagline">{displayTagline}</p>
              <div className="sp-hero-actions">
                <button onClick={handleQuoteClick} className="sp-hero-cta">
                  {t.spGetFreeQuote}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main ─────────────────────────────────── */}
        <section className="sp-main">
          <div className="container">
            <div className="sp-layout">

              {/* ── Left ─────────────────────────────── */}
              <div className="sp-left">

                {/* Overview */}
                <p className="sp-overview">{displayDescription}</p>

                {/* Highlights */}
                <div className="sp-highlights">
                  <h2 className="sp-section-h2">{t.spKeyBenefits}</h2>
                  <div className="sp-highlights-grid">
                    {displayHighlights.map((h, i) => (
                      <div key={i} className="sp-highlight-card">
                        <div className="sp-highlight-icon">
                          {HighlightIcons[i % HighlightIcons.length]}
                        </div>
                        <h3 className="sp-highlight-h3">{h.heading}</h3>
                        <p className="sp-highlight-p">{h.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best for */}
                <div className="sp-bestfor">
                  <h2 className="sp-section-h2">{t.spBestFor}</h2>
                  <div className="sp-bestfor-list">
                    {displayBestFor.map((b) => (
                      <div key={b} className="sp-bestfor-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--green)" }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div className="sp-faqs">
                  <h2 className="sp-section-h2">{t.spFaq}</h2>
                  {displayFaqs.map((faq, i) => (
                    <div key={i} className="sp-faq">
                      <div className="sp-faq-q">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--green)" }}>
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                          <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        {faq.q}
                      </div>
                      <p className="sp-faq-a">{faq.a}</p>
                    </div>
                  ))}
                </div>

              </div>

              {/* ── Right sidebar ────────────────────── */}
              <aside className="sp-sidebar" style={{ position: "sticky", top: "90px", alignSelf: "start" }}>

                {/* Quote CTA card */}
                <div className="sp-cta-card">
                  <span className="sp-cta-label">{t.spFreeObligation}</span>
                  <h3 className="sp-cta-h3">{t.spGetYourQuote}</h3>
                  <p className="sp-cta-sub">{t.spCompareRates}</p>
                  <button onClick={handleQuoteClick} className="sp-cta-btn">
                    {t.spGetFreeQuote}
                  </button>
                </div>

                {/* Other services */}
                <div className="sp-other">
                  <p className="sp-other-heading">{t.spOtherServices}</p>
                  <ul className="sp-other-list">
                    {otherServices.filter(s => s.label !== data.title).map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="sp-other-link">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--green)" }}>
                            <polyline points="9 18 15 12 9 6"/>
                          </svg>
                          {lang === "fr" ? (frServiceNames[s.label] || s.label) : s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </aside>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ── Cover Hero with background image ── */
        .sp-cover {
          position: relative;
          min-height: 400px;
          display: flex;
          align-items: flex-end;
          padding: 0 0 52px;
          background-size: cover !important;
          background-position: center !important;
        }
        .sp-cover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,22,35,0.3) 0%, rgba(15,22,35,0.88) 70%, rgba(15,22,35,0.98) 100%);
        }
        .sp-cover-content {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* Back button & Breadcrumb row */
        .sp-nav-row {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 36px;
          padding-top: 36px;
        }
        .sp-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          padding: 12px 22px;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          backdrop-filter: blur(8px);
        }
        .sp-back-btn:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.4);
          transform: translateX(-2px);
        }
        .sp-breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
        }
        .sp-breadcrumb-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.15s;
        }
        .sp-breadcrumb-link:hover {
          color: #fff;
        }
        .sp-breadcrumb-sep {
          color: rgba(255,255,255,0.3);
          font-size: 14px;
        }
        .sp-breadcrumb-current {
          color: var(--green);
          font-weight: 700;
        }

        .sp-hero-body { max-width: 640px; }

        /* Clean square icon badge — no emoji */
        .sp-hero-icon {
          width: 68px; height: 68px;
          border-radius: 18px;
          background: rgba(0,167,89,0.2);
          color: var(--green);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          border: 1px solid rgba(0,167,89,0.35);
          backdrop-filter: blur(8px);
        }

        .sp-hero-h1 {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 900; color: #fff; line-height: 1.08;
          letter-spacing: -0.03em;
          font-family: var(--font-sora), sans-serif;
          margin-bottom: 14px;
        }
        .sp-hero-tagline {
          font-size: 17px; color: rgba(255,255,255,0.65);
          line-height: 1.7; margin-bottom: 32px; max-width: 520px;
        }
        .sp-hero-actions {
          display: flex; gap: 14px; flex-wrap: wrap; align-items: center;
        }
        .sp-hero-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green); color: #fff;
          font-weight: 800; font-size: 15px;
          padding: 15px 32px; border-radius: 50px;
          border: none; cursor: pointer; font-family: inherit;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 24px rgba(0,167,89,0.4);
        }
        .sp-hero-cta:hover { background: var(--green-dark); transform: translateY(-2px); }

        /* ── Main layout ── */
        .sp-main { background: #fff; padding: 72px 0 80px; }
        .sp-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 56px;
          align-items: start;
        }

        .sp-left {
          min-width: 0;
        }

        /* ── Left content ── */
        .sp-overview {
          font-size: 16px; color: var(--body);
          line-height: 1.85; margin-bottom: 52px;
          padding-bottom: 52px;
          border-bottom: 1px solid var(--border);
        }
        .sp-section-h2 {
          font-size: 1.25rem; font-weight: 800;
          color: var(--dark); margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        /* Highlights grid */
        .sp-highlights { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid var(--border); }
        .sp-highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .sp-highlight-card {
          padding: 24px 20px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--bg-soft);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .sp-highlight-card:hover {
          border-color: rgba(0,167,89,0.35);
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }
        .sp-highlight-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(0,167,89,0.1); color: var(--green);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }
        .sp-highlight-h3 {
          font-size: 14px; font-weight: 700; color: var(--dark);
          margin-bottom: 8px; line-height: 1.35;
        }
        .sp-highlight-p {
          font-size: 13px; color: var(--muted); line-height: 1.7;
        }

        /* Best for */
        .sp-bestfor { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid var(--border); }
        .sp-bestfor-list {
          display: flex; flex-wrap: wrap; gap: 10px;
        }
        .sp-bestfor-item {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 13px; font-weight: 600; color: var(--dark);
          background: #fff; border: 1px solid var(--border);
          border-radius: 50px; padding: 8px 16px;
          transition: border-color 0.2s, color 0.2s;
        }
        .sp-bestfor-item:hover { border-color: var(--green); color: var(--green); }

        /* FAQs */
        .sp-faqs {}
        .sp-faq {
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
        }
        .sp-faq:last-child { border-bottom: none; }
        .sp-faq-q {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 15px; font-weight: 700; color: var(--dark);
          margin-bottom: 10px; line-height: 1.4;
        }
        .sp-faq-a {
          font-size: 14px; color: var(--body); line-height: 1.8;
          padding-left: 26px;
        }

        /* ── Sidebar ── */
        .sp-sidebar {
          position: sticky;
          top: 90px;
          align-self: start;
          display: flex; flex-direction: column; gap: 14px;
        }

        /* CTA card */
        .sp-cta-card {
          background: var(--dark);
          border-radius: 18px;
          padding: 28px 24px;
          display: flex; flex-direction: column; align-items: flex-start;
        }
        .sp-cta-label {
          font-size: 10px; font-weight: 800;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--green); margin-bottom: 10px;
        }
        .sp-cta-h3 {
          font-size: 18px; font-weight: 800; color: #fff;
          line-height: 1.25; margin-bottom: 10px;
        }
        .sp-cta-sub {
          font-size: 13px; color: rgba(255,255,255,0.55);
          line-height: 1.65; margin-bottom: 20px;
        }
        .sp-cta-btn {
          width: 100%; display: flex; justify-content: center;
          align-items: center; gap: 8px;
          background: var(--green); color: #fff;
          font-weight: 800; font-size: 14px;
          padding: 13px 20px; border-radius: 50px;
          border: none; cursor: pointer; font-family: inherit;
          transition: background 0.2s, transform 0.2s;
          margin-bottom: 10px;
        }
        .sp-cta-btn:hover { background: var(--green-dark); transform: translateY(-1px); }
        .sp-cta-note {
          font-size: 11px; color: rgba(255,255,255,0.3);
          width: 100%; text-align: center;
        }

        /* Other services */
        .sp-other {
          background: #fff; border: 1px solid var(--border);
          border-radius: 14px; padding: 18px 20px;
        }
        .sp-other-heading {
          font-size: 10px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 1.5px;
          color: var(--muted); margin-bottom: 12px;
        }
        .sp-other-list { list-style: none; display: flex; flex-direction: column; gap: 2px; }
        .sp-other-link {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 10px; font-size: 13px; font-weight: 600;
          color: var(--body); text-decoration: none;
          border-radius: 8px; transition: background 0.15s, color 0.15s;
        }
        .sp-other-link:hover { background: var(--bg-soft); color: var(--green); }

        /* ── MOBILE FIRST ── */
        @media (max-width: 900px) {
          .sp-layout {
            grid-template-columns: 1fr;
          }
          .sp-sidebar {
            position: static;
          }
          .sp-highlights-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .sp-main { padding: 48px 0 56px; }
          .sp-cover { min-height: 320px; padding-bottom: 36px; }
          .sp-nav-row { 
            flex-direction: column; 
            align-items: flex-start; 
            gap: 16px; 
            padding-top: 24px;
            margin-bottom: 24px;
          }
          .sp-back-btn { padding: 10px 18px; font-size: 13px; }
          .sp-breadcrumb { font-size: 13px; }
          .sp-hero-h1 { font-size: 1.9rem; }
          .sp-hero-actions { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </>
  );
}
