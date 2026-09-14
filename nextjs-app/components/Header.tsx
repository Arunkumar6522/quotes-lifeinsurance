"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLang, Lang } from "@/lib/i18n";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceItems = [
    { label: t.termLife,       href: "/services#term" },
    { label: t.wholeLife,      href: "/services#whole" },
    { label: t.universalLife,  href: "/services#universal" },
    { label: t.criticalIllness,href: "/services#critical" },
    { label: t.disability,     href: "/services#disability" },
  ];

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>

      {/* ── Topbar ──────────────────────────────────────── */}
      <div style={{
        background: "var(--green)", padding: "7px 0",
        fontSize: "12px", color: "#fff",
      }}>
        <div className="container" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: "8px",
        }}>
          {/* Left: contact info */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <a href="tel:+15146620403"
              style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontWeight: 700 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              514-662-0403
            </a>
            <a href="mailto:info@quotes-lifeinsurance.com"
              style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.85)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@quotes-lifeinsurance.com
            </a>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.7)" }}
              className="hide-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              4900 Jean-Talon Ouest, Unit 200, Montréal, QC
            </span>
          </div>

          {/* Right: AMF badge + Language switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* AMF */}
            <span style={{
              display: "flex", alignItems: "center", gap: "5px",
              background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: "20px", padding: "3px 10px",
              fontSize: "11px", fontWeight: 700, color: "#fff",
            }}>
              🛡️ AMF Lic. #179631
            </span>

            {/* Language toggle */}
            <div style={{
              display: "flex", alignItems: "center",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "20px", overflow: "hidden",
            }}>
              {(["en", "fr"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    padding: "3px 12px",
                    fontSize: "11px", fontWeight: 800,
                    letterSpacing: "1px", textTransform: "uppercase",
                    border: "none", cursor: "pointer",
                    background: lang === l ? "#fff" : "transparent",
                    color: lang === l ? "var(--green)" : "rgba(255,255,255,0.8)",
                    transition: "all 0.2s",
                    borderRadius: "20px",
                  }}
                >
                  {l === "en" ? "🇨🇦 EN" : "🇫🇷 FR"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main navbar ─────────────────────────────────── */}
      <nav style={{
        background: "#fff",
        boxShadow: "0 1px 0 rgba(0,0,0,0.06), 0 2px 16px rgba(0,0,0,0.05)",
      }}>
        <div className="container" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", height: "68px",
        }}>

          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0 }}>
            <Image src="/logo.png" alt="Quotes Life Insurance"
              width={160} height={48} priority
              style={{ height: "42px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
            <Link href="/" style={navLink}>{t.home}</Link>

            {/* Services dropdown */}
            <div style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services" style={{ ...navLink, display: "flex", alignItems: "center", gap: "4px" }}>
                {t.services}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "none" }}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </Link>
              {servicesOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff", borderRadius: "16px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
                  padding: "8px", minWidth: "220px", zIndex: 200,
                }}>
                  {serviceItems.map((s) => (
                    <Link key={s.href} href={s.href} style={{
                      display: "block", padding: "10px 14px", fontSize: "13px",
                      fontWeight: 600, color: "#374151", borderRadius: "10px",
                      transition: "all 0.15s",
                    }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--bg-soft)";
                        (e.currentTarget as HTMLElement).style.color = "var(--green)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "#374151";
                      }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about"   style={navLink}>{t.about}</Link>
            <Link href="/contact" style={navLink}>{t.contact}</Link>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="desktop-nav">
            <Link href="/contact" className="btn-primary" style={{ fontSize: "13px", padding: "10px 22px" }}>
              {t.getQuote}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none", flexDirection: "column", gap: "5px",
              background: "none", border: "none", padding: "6px", cursor: "pointer",
            }}
            className="mobile-btn"
            aria-label="Menu"
          >
            {[0,1,2].map((i) => (
              <span key={i} style={{
                display: "block", width: "22px", height: "2px",
                background: "#374151", borderRadius: "2px",
                transition: "all 0.2s",
                transform: mobileOpen && i === 0 ? "rotate(45deg) translate(5px,5px)"
                         : mobileOpen && i === 1 ? "scaleX(0)"
                         : mobileOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)"
                         : "none",
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            background: "#fff", borderTop: "1px solid var(--border)",
            padding: "12px 20px 20px",
          }}>
            {[
              { label: t.home,    href: "/" },
              { label: t.services,href: "/services" },
              { label: t.about,   href: "/about" },
              { label: t.contact, href: "/contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "12px 0",
                  fontSize: "15px", fontWeight: 600, color: "#374151",
                  borderBottom: "1px solid var(--border)",
                }}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="btn-primary" style={{ marginTop: "16px", display: "block", textAlign: "center" }}>
              {t.getQuote}
            </Link>
          </div>
        )}
      </nav>

      <style jsx>{`
        .hide-sm { display: flex; }
        .desktop-nav { display: flex; }
        .mobile-btn { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-btn  { display: flex !important; }
          .hide-sm     { display: none !important; }
        }
      `}</style>
    </header>
  );
}

const navLink: React.CSSProperties = {
  padding: "8px 14px", borderRadius: "8px",
  fontSize: "14px", fontWeight: 600, color: "#374151",
  transition: "color 0.15s, background 0.15s",
  whiteSpace: "nowrap",
};
