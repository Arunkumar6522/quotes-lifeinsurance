"use client";
import QuoteButton from "@/components/QuoteButton";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLang, Lang } from "@/lib/i18n";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const solutionItems = [
    { label: t.termLife,        href: "/services/term-life" },
    { label: t.wholeLife,       href: "/services/whole-life" },
    { label: t.universalLife,   href: "/services/universal-life" },
    { label: t.criticalIllness, href: "/services/critical-illness" },
    { label: t.disability,      href: "/services/disability" },
  ];

  const resourceItems = [
    { label: t.blog,   href: "/blog" },
    { label: t.about,  href: "/about" },
  ];

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>

      {/* ── Topbar — dark green ─────────────────────────── */}
      <div className="topbar">
        <div className="container topbar-inner">

          {/* Left: contact info */}
          <div className="topbar-left">
            <a href="tel:+15146620403" className="topbar-link topbar-link--bold">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              514-662-0403
            </a>
            <a href="mailto:info@quotes-lifeinsurance.com" className="topbar-link topbar-hide-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              info@quotes-lifeinsurance.com
            </a>
            <span className="topbar-link topbar-hide-md">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              4900 Jean-Talon Ouest, Unit 200, Montréal, QC
            </span>
          </div>

          {/* Right: AMF + CA / EN / FR */}
          <div className="topbar-right">
            <span className="amf-badge">AMF Lic. #179631</span>

            {/* Language switcher — text only, no flags, pipe-separated */}
            <div className="lang-switcher">
              <span className="lang-ca">CA</span>
              <span className="lang-sep">|</span>
              {(["en", "fr"] as Lang[]).map((l, i) => (
                <>
                  {i > 0 && <span key={`sep-${l}`} className="lang-sep">|</span>}
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`lang-btn${lang === l ? " lang-btn--active" : ""}`}
                  >
                    {l.toUpperCase()}
                  </button>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main navbar ─────────────────────────────────── */}
      <nav className="main-nav">
        <div className="container main-nav-inner">

          {/* Logo + tagline */}
          <Link href="/" className="logo-wrap">
            <Image
              src="/logo.png"
              alt="Quotes Life Insurance"
              width={160} height={52} priority
              style={{ height: "46px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="desktop-nav">
            <Link href="/" className="nav-link">{t.home}</Link>

            {/* Insurance Solutions dropdown */}
            <div className="dropdown-wrap"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="nav-link nav-link--btn">
                {t.insuranceSolutions}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transition: "transform 0.2s", transform: solutionsOpen ? "rotate(180deg)" : "none" }}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              {solutionsOpen && (
                <div className="dropdown-panel">
                  {solutionItems.map((s) => (
                    <Link key={s.href} href={s.href} className="dropdown-item"
                      onClick={() => setSolutionsOpen(false)}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="nav-link">{t.whyUs}</Link>
            <Link href="/about" className="nav-link">{t.about}</Link>

            {/* Resources dropdown */}
            <div className="dropdown-wrap"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="nav-link nav-link--btn">
                {t.resources}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transition: "transform 0.2s", transform: resourcesOpen ? "rotate(180deg)" : "none" }}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              {resourcesOpen && (
                <div className="dropdown-panel">
                  {resourceItems.map((r) => (
                    <Link key={r.href} href={r.href} className="dropdown-item"
                      onClick={() => setResourcesOpen(false)}>
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="nav-link">{t.contact}</Link>
          </div>

          {/* CTA button */}
          <div className="desktop-nav">
            <QuoteButton label={t.getQuote} style={{ fontSize: "14px", padding: "11px 24px" }} />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-btn"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: "22px", height: "2px",
                background: "#374151", borderRadius: "2px",
                transition: "all 0.2s",
                transform:
                  mobileOpen && i === 0 ? "rotate(45deg) translate(5px,5px)" :
                  mobileOpen && i === 1 ? "scaleX(0)" :
                  mobileOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" :
                  "none",
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            {[
              { label: t.home,               href: "/" },
              { label: t.termLife,           href: "/services/term-life" },
              { label: t.wholeLife,          href: "/services/whole-life" },
              { label: t.universalLife,      href: "/services/universal-life" },
              { label: t.criticalIllness,    href: "/services/critical-illness" },
              { label: t.disability,         href: "/services/disability" },
              { label: t.whyUs,              href: "/about" },
              { label: t.about,              href: "/about" },
              { label: t.blog,               href: "/blog" },
              { label: t.contact,            href: "/contact" },
            ].map((item) => (
              <Link key={item.href + item.label} href={item.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-link">
                {item.label}
              </Link>
            ))}
            {/* Mobile lang switch */}
            <div className="mobile-lang">
              {(["en", "fr"] as Lang[]).map((l) => (
                <button key={l} onClick={() => { setLang(l); setMobileOpen(false); }}
                  className={`mobile-lang-btn${lang === l ? " mobile-lang-btn--active" : ""}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <QuoteButton label={t.getQuote}
              style={{ marginTop: "12px", width: "100%", justifyContent: "center" }} />
          </div>
        )}
      </nav>

      <style>{`
        /* ── Topbar ── */
        .topbar {
          background: #2d6a42;
          padding: 7px 0;
          font-size: 12px;
          color: #fff;
        }
        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
        .topbar-left {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .topbar-link {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,0.82);
          text-decoration: none;
          font-size: 12px;
          transition: color 0.15s;
        }
        .topbar-link:hover { color: #fff; }
        .topbar-link--bold { font-weight: 700; color: #fff; }

        /* AMF badge */
        .amf-badge {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.3px;
        }

        /* CA / EN / FR switcher */
        .lang-switcher {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .lang-ca {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.6);
          padding: 0 4px;
        }
        .lang-sep {
          color: rgba(255,255,255,0.3);
          font-size: 11px;
          padding: 0 1px;
        }
        .lang-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.65);
          padding: 2px 5px;
          border-radius: 4px;
          transition: color 0.15s, background 0.15s;
        }
        .lang-btn:hover { color: #fff; }
        .lang-btn--active {
          color: #fff;
          background: rgba(255,255,255,0.15);
        }

        /* ── Main nav ── */
        .main-nav {
          background: #fff;
          box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 2px 16px rgba(0,0,0,0.05);
        }
        .main-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 8px;
        }

        /* Logo */
        .logo-wrap {
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          text-decoration: none;
          gap: 1px;
        }

        /* Nav links */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nav-link {
          padding: 8px 13px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.15s, background 0.15s;
          position: relative;
        }
        .nav-link:hover { color: var(--green); background: rgba(99,160,102,0.07); }
        /* Active underline */
        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -2px; left: 13px; right: 13px;
          height: 2px;
          background: var(--green);
          border-radius: 2px;
        }
        .nav-link--btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: inherit;
        }

        /* Dropdown */
        .dropdown-wrap {
          position: relative;
        }
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 200;
          min-width: 230px;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06);
          padding: 6px;
        }
        .dropdown-item {
          display: block;
          padding: 10px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.15s, color 0.15s;
        }
        .dropdown-item:hover {
          background: rgba(99,160,102,0.08);
          color: var(--green);
        }

        /* Mobile */
        .mobile-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 6px;
          cursor: pointer;
        }
        .mobile-menu {
          background: #fff;
          border-top: 1px solid var(--border);
          padding: 12px 20px 20px;
        }
        .mobile-link {
          display: block;
          padding: 11px 0;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          border-bottom: 1px solid var(--border);
          transition: color 0.15s;
        }
        .mobile-link:hover { color: var(--green); }
        .mobile-lang {
          display: flex;
          gap: 8px;
          margin-top: 14px;
        }
        .mobile-lang-btn {
          border: 1.5px solid var(--border);
          background: none;
          border-radius: 8px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 700;
          color: #374151;
          cursor: pointer;
          transition: all 0.15s;
        }
        .mobile-lang-btn--active {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .desktop-nav  { display: none !important; }
          .mobile-btn   { display: flex !important; }
          .topbar-hide-sm  { display: none !important; }
          .topbar-hide-md  { display: none !important; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .topbar-hide-md { display: none !important; }
        }
      `}</style>
    </header>
  );
}
