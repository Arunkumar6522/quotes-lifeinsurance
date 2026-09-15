import Link from "next/link";

const quickLinks = [
  { label: "Home",             href: "/" },
  { label: "About Us",         href: "/about" },
  { label: "Blog",             href: "/blog" },
  { label: "Contact Us",       href: "/contact" },
  { label: "Privacy Policy",   href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const services = [
  { label: "Term Life Insurance",       href: "/services/term-life" },
  { label: "Whole Life Insurance",      href: "/services/whole-life" },
  { label: "Universal Life Insurance",  href: "/services/universal-life" },
  { label: "Critical Illness Coverage", href: "/services/critical-illness" },
  { label: "Disability Insurance",      href: "/services/disability" },
];

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Main grid ──────────────────────────────────────── */}
      <div className="container footer-grid">

        {/* Col 1 — Brand */}
        <div className="footer-brand">
          {/* White logo — inline SVG, no background issues */}
          <Link href="/" style={{ display: "inline-block", marginBottom: "20px" }}>
            <svg viewBox="0 0 420 120" width="180" height="52" fill="none" aria-label="Quotes Life Insurance" xmlns="http://www.w3.org/2000/svg">
              {/* Asterisk mark */}
              <g fill="#ffffff">
                {/* vertical bar */}
                <rect x="42" y="8"  width="16" height="104" rx="8"/>
                {/* horizontal bar */}
                <rect x="8"  y="42" width="104" height="16" rx="8"/>
                {/* diagonal \ */}
                <rect x="42" y="8"  width="16" height="104" rx="8" transform="rotate(45 50 60)"/>
                {/* diagonal / */}
                <rect x="42" y="8"  width="16" height="104" rx="8" transform="rotate(-45 50 60)"/>
              </g>
              {/* Wordmark */}
              <text x="130" y="52"
                fontFamily="'Sora', 'Nunito', Arial, sans-serif"
                fontWeight="800"
                fontSize="44"
                fill="#ffffff"
                letterSpacing="-1">Quotes</text>
              <text x="130" y="104"
                fontFamily="'Sora', 'Nunito', Arial, sans-serif"
                fontWeight="800"
                fontSize="44"
                fill="#ffffff"
                letterSpacing="-1">Life Insurance</text>
            </svg>
          </Link>
          <p className="footer-brand-desc">
            A family-built, client-first brokerage dedicated to finding you the best Canadian life insurance — at no cost to you.
          </p>
          <div className="footer-founders">
            <span>Denesh Logeswaran &amp; Lucia Medina</span>
            <span className="footer-founders-sub">Contracted through Experior Financial Group Inc. (MGA)</span>
          </div>

          {/* Social / contact icons row */}
          <div className="footer-contacts">
            <a href="tel:+15146620403" className="footer-contact-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              514-662-0403
            </a>
            <a href="mailto:info@quotes-lifeinsurance.com" className="footer-contact-chip">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Email Us
            </a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Quick Links</h4>
          <ul className="footer-links-list">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="footer-link">
                  <span className="footer-link-arrow">›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Our Services</h4>
          <ul className="footer-links-list">
            {services.map((sv) => (
              <li key={sv.label}>
                <Link href={sv.href} className="footer-link">
                  <span className="footer-link-arrow">›</span>
                  {sv.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact & Hours */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Get In Touch</h4>
          <div className="footer-contact-block">
            <div className="footer-contact-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>4900 Jean-Talon Ouest, Unit 200<br/>Montréal, QC H4P 1W9</span>
            </div>
            <div className="footer-contact-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Mon–Fri: 9AM–8PM EST<br/>Sat: 10AM–4PM EST</span>
            </div>
          </div>

          {/* AMF badge */}
          <div className="footer-amf-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--green)", flexShrink: 0 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
            <div>
              <p className="footer-amf-title">AMF Licensed &amp; Regulated</p>
              <p className="footer-amf-sub">Lic. #179631 · Firm #608808</p>
            </div>
          </div>

          <a href="https://lautorite.qc.ca" target="_blank" rel="noopener noreferrer" className="footer-amf-verify">
            Verify Licence on AMF ↗
          </a>
        </div>

      </div>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className="footer-divider" />

      {/* ── Bottom bar ───────────────────────────────────── */}
      <div className="container footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Quotes Life Insurance — DCW Financial Inc. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <Link href="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
          <span className="footer-bottom-sep">·</span>
          <Link href="/terms" className="footer-bottom-link">Terms of Service</Link>
        </div>
      </div>

      <style>{`
        /* ── Footer wrapper ── */
        .footer {
          background: #0e1420;
          color: #fff;
        }

        /* ── Main grid ── */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 48px;
          padding: 72px 0 56px;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; padding: 56px 0 40px; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; padding: 40px 0 32px; }
        }

        /* ── Brand col ── */
        .footer-brand-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          margin-bottom: 18px;
          max-width: 300px;
        }
        .footer-founders {
          display: flex;
          flex-direction: column;
          gap: 3px;
          margin-bottom: 24px;
        }
        .footer-founders span:first-child {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.75);
        }
        .footer-founders-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
        }
        .footer-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer-contact-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          padding: 6px 14px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .footer-contact-chip:hover {
          background: rgba(74,164,97,0.15);
          color: var(--green);
          border-color: rgba(74,164,97,0.3);
        }

        /* ── Link cols ── */
        .footer-col-heading {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 20px;
        }
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer-link:hover { color: var(--green); }
        .footer-link-arrow {
          color: var(--green);
          font-size: 16px;
          line-height: 1;
          transition: transform 0.15s;
        }
        .footer-link:hover .footer-link-arrow { transform: translateX(2px); }

        /* ── Contact col ── */
        .footer-contact-block {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }
        .footer-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
        }
        .footer-contact-row svg {
          color: var(--green);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* AMF badge block */
        .footer-amf-badge {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: rgba(74,164,97,0.08);
          border: 1px solid rgba(74,164,97,0.2);
          border-radius: 12px;
          padding: 12px 14px;
          margin-bottom: 12px;
        }
        .footer-amf-title {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.8);
          margin-bottom: 2px;
        }
        .footer-amf-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
        }
        .footer-amf-verify {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--green);
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .footer-amf-verify:hover { opacity: 0.75; }

        /* ── Divider ── */
        .footer-divider {
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 20px 0;
        }
        .footer-copy {
          font-size: 12px;
          color: rgba(255,255,255,0.28);
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-bottom-link {
          font-size: 12px;
          color: rgba(255,255,255,0.28);
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer-bottom-link:hover { color: rgba(255,255,255,0.65); }
        .footer-bottom-sep {
          color: rgba(255,255,255,0.15);
          font-size: 12px;
        }
      `}</style>
    </footer>
  );
}
