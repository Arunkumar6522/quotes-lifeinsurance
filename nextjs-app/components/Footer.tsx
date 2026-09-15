import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About Us",        href: "/about" },
  { label: "Our Services",    href: "/services" },
  { label: "Contact Us",      href: "/contact" },
  { label: "Privacy Policy",  href: "/privacy-policy" },
  { label: "Terms of Service",href: "/terms" },
];

const services = [
  { label: "Term Life Insurance",      href: "/services#term" },
  { label: "Whole Life Insurance",     href: "/services#whole" },
  { label: "Universal Life Insurance", href: "/services#universal" },
  { label: "Critical Illness Coverage",href: "/services#critical" },
  { label: "Disability Insurance",     href: "/services#disability" },
];

const s = {
  /* shared text styles */
  heading: {
    fontSize: "11px", fontWeight: 800, letterSpacing: "2px",
    textTransform: "uppercase" as const,
    color: "rgba(255,255,255,0.5)", marginBottom: "20px",
  } as React.CSSProperties,
  link: {
    display: "block", fontSize: "13px",
    color: "rgba(255,255,255,0.62)", textDecoration: "none",
    marginBottom: "10px", lineHeight: 1.5,
    transition: "color 0.15s",
  } as React.CSSProperties,
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "#fff" }}>

      {/* ── AMF strip ─────────────────────────────── */}
      <div style={{
        background: "#0e1f10",
        borderTop: "3px solid var(--green)",
        padding: "18px 0",
      }}>
        <div className="container" style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: "16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "50%",
              background: "rgba(74,164,97,0.15)",
              border: "1.5px solid rgba(74,164,97,0.4)",
              display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "20px", flexShrink: 0,
            }}>
              🛡️
            </div>
            <div>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "3px", fontStyle: "italic" }}>
                Regulated by the AMF — Autorité des marchés financiers
              </p>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--green)" }}>
                Licence #179631 &nbsp;·&nbsp; Firm Registration #608808
              </p>
            </div>
          </div>
          <a
            href="https://lautorite.qc.ca"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12px", fontWeight: 700,
              padding: "8px 18px", borderRadius: "50px",
              border: "1.5px solid rgba(74,164,97,0.5)",
              color: "var(--green)", textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Verify on AMF ↗
          </a>
        </div>
      </div>

      {/* ── Main footer ───────────────────────────── */}
      <div className="container" style={{
        padding: "64px 28px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "48px",
      }}>

        {/* Brand column */}
        <div style={{ gridColumn: "span 1" }}>
          <Image
            src="/logo.png"
            alt="Quotes Life Insurance"
            width={140} height={42}
            style={{
              height: "38px", width: "auto",
              objectFit: "contain", marginBottom: "16px",
              filter: "brightness(0) invert(1)",
              opacity: 0.9,
            }}
          />
          <p style={{
            fontSize: "13px", color: "rgba(255,255,255,0.55)",
            lineHeight: 1.75, marginBottom: "10px",
          }}>
            DCW Financial Inc. — a family-built,<br />client-first brokerage.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginBottom: "4px" }}>
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>Denesh Logeswaran</strong> &amp; <strong style={{ color: "rgba(255,255,255,0.8)" }}>Lucia Medina</strong>
          </p>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
            Contracted through Experior Financial Group Inc. (MGA)
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p style={s.heading}>Quick Links</p>
          {quickLinks.map((l) => (
            <Link key={l.label} href={l.href} style={s.link}
              className="footer-link">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <p style={s.heading}>Our Services</p>
          {services.map((sv) => (
            <Link key={sv.label} href={sv.href} style={s.link}
              className="footer-link">
              {sv.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <p style={s.heading}>Contact Us</p>
          <div style={{ marginBottom: "14px" }}>
            <a href="tel:+15146620403" style={{ ...s.link, marginBottom: "2px" }}
              className="footer-link">
              📞 514-662-0403
            </a>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
              New quotes inquiry only
            </span>
          </div>
          <a href="mailto:info@quotes-lifeinsurance.com"
            style={{ ...s.link, marginBottom: "14px" }}
            className="footer-link">
            ✉️ info@quotes-lifeinsurance.com
          </a>
          <p style={{ ...s.link, marginBottom: "14px", cursor: "default" }}>
            📍 4900 Jean-Talon Ouest, Unit 200<br />
            Montreal, QC H4P 1W9
          </p>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
            Mon–Fri: 9AM–8PM EST<br />
            Sat: 10AM–4PM EST
          </p>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* ── Footer bottom ─────────────────────────── */}
      <div className="container" style={{
        padding: "20px 28px",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between",
        gap: "12px",
      }}>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
          © {new Date().getFullYear()} Quotes Life Insurance — DCW Financial Inc. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/privacy-policy" style={{
            fontSize: "12px", color: "rgba(255,255,255,0.35)",
            textDecoration: "none", transition: "color 0.15s",
          }} className="footer-link">
            Privacy Policy
          </Link>
          <Link href="/terms" style={{
            fontSize: "12px", color: "rgba(255,255,255,0.35)",
            textDecoration: "none", transition: "color 0.15s",
          }} className="footer-link">
            Terms of Service
          </Link>
        </div>
      </div>

      {/* Hover styles for footer links */}
      <style>{`
        .footer-link:hover { color: var(--green) !important; opacity: 1 !important; }
      `}</style>
    </footer>
  );
}
