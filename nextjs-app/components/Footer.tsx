import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const services = [
  { label: "Term Life Insurance", href: "/services#term" },
  { label: "Whole Life Insurance", href: "/services#whole" },
  { label: "Universal Life Insurance", href: "/services#universal" },
  { label: "Critical Illness Coverage", href: "/services#critical" },
  { label: "Disability Insurance", href: "/services#disability" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)" }} className="text-white">

      {/* ── AMF strip ──────────────────────────────────── */}
      <div style={{ background: "#0a3d25", borderTop: "3px solid var(--plum)" }} className="py-4">
        <div className="container flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(82,45,76,0.2)", border: "2px solid var(--plum)" }}
            >
              🛡️
            </div>
            <div>
              <p className="text-xs opacity-70 italic">Regulated by the AMF — Autorité des marchés financiers</p>
              <p className="text-sm font-bold" style={{ color: "var(--plum)" }}>
                Licence #179631 &nbsp;|&nbsp; Firm Registration #608808
              </p>
            </div>
          </div>
          <a
            href="https://lautorite.qc.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold px-4 py-2 rounded-full border-2 transition-all hover:bg-[var(--plum)] hover:text-white"
            style={{ borderColor: "var(--plum)", color: "var(--plum)" }}
          >
            Verify Licence ↗
          </a>
        </div>
      </div>

      {/* ── Main footer ────────────────────────────────── */}
      <div className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Image src="/logo.png" alt="Quotes Life Insurance" width={150} height={45} className="h-10 w-auto object-contain mb-4 brightness-200" />
          <p className="text-sm opacity-70 leading-relaxed mb-4">
            DCW Financial Inc. — a family-built, client-first brokerage.<br />
            Operated by <strong className="text-white">Denesh Logeswaran</strong> &amp; <strong className="text-white">Lucia Medina</strong>.
          </p>
          <p className="text-xs opacity-50">Contracted through Experior Financial Group Inc. (MGA)</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm opacity-70 hover:opacity-100 hover:text-[var(--green)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Our Services</h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm opacity-70 hover:opacity-100 hover:text-[var(--green)] transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li>
              <a href="tel:+15146620403" className="hover:text-[var(--green)] hover:opacity-100 transition-colors">
                📞 514-662-0403
              </a>
              <p className="text-xs opacity-60 mt-0.5">New life insurance quotes only</p>
            </li>
            <li>
              <a href="mailto:info@quotes-lifeinsurance.com" className="hover:text-[var(--green)] hover:opacity-100 transition-colors">
                ✉️ info@quotes-lifeinsurance.com
              </a>
            </li>
            <li>
              <span>📍 4900 Jean-Talon Ouest, Unit 200<br />Montreal, QC H4P 1W9</span>
            </li>
            <li className="opacity-60 text-xs">
              Mon–Fri: 9AM–8PM EST<br />Sat: 10AM–4PM EST
            </li>
          </ul>
        </div>
      </div>

      {/* ── Footer lower ───────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Quotes Life Insurance — DCW Financial Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs opacity-50 hover:opacity-80 transition-opacity">Privacy Policy</Link>
            <Link href="/terms" className="text-xs opacity-50 hover:opacity-80 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
