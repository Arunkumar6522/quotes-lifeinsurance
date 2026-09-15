import Link from "next/link";
import Animate from "@/components/Animate";

const services = [
  { icon: "📋", title: "Term Life Insurance",       tag: "Most Popular",      desc: "Affordable coverage for a set term. Lock in low rates while your family needs protection most.",    href: "/services/term-life" },
  { icon: "🏦", title: "Whole Life Insurance",       tag: "Permanent",         desc: "Lifetime coverage that builds guaranteed cash value — never expires, never changes in cost.",       href: "/services/whole-life" },
  { icon: "🔄", title: "Universal Life Insurance",  tag: "Flexible",          desc: "Adjustable premiums + a tax-sheltered investment account. Coverage and wealth in one policy.",       href: "/services/universal-life" },
  { icon: "🏥", title: "Critical Illness Coverage", tag: "Lump-Sum Payout",   desc: "Tax-free cash if you're diagnosed with cancer, heart attack, stroke or 25+ covered conditions.",  href: "/services/critical-illness" },
  { icon: "🦽", title: "Disability Insurance",      tag: "Income Protection", desc: "Replace up to 70% of your income if illness or injury stops you from working.",                   href: "/services/disability" },
  { icon: "💼", title: "Business Protection",       tag: "For Owners",        desc: "Key-person insurance, buy-sell agreements, and corporate coverage for entrepreneurs.",               href: "/services" },
];

export default function ServicesSection() {
  return (
    <section className="section-padding" style={{ background: "var(--dark)" }}>
      <div className="container">

        <Animate className="text-center" style={{ marginBottom: "56px" }}>
          <span className="section-label light">Our Services</span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#fff", marginTop: "8px", lineHeight: 1.2,
          }}>
            Coverage for Every{" "}
            <span style={{ color: "var(--green)" }}>Stage of Life</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "12px", fontSize: "15px", maxWidth: "480px", margin: "12px auto 0" }}>
            Compare policies across 20+ carriers — one call, zero fees.
          </p>
        </Animate>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}>
          {services.map((s, i) => (
            <Animate key={s.title} delay={i * 0.07}>
              <Link href={s.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div className="service-card" style={{
                  borderRadius: "16px",
                  padding: "28px 24px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  height: "100%",
                  display: "flex", flexDirection: "column", gap: "14px",
                  transition: "background 0.25s, border-color 0.25s, transform 0.25s",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "2rem" }}>{s.icon}</span>
                    <span style={{
                      fontSize: "10px", fontWeight: 800, letterSpacing: "0.5px",
                      padding: "4px 10px", borderRadius: "20px",
                      background: "rgba(99,160,102,0.18)", color: "var(--green)",
                    }}>
                      {s.tag}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.35,
                    transition: "color 0.2s",
                  }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, flex: 1 }}>
                    {s.desc}
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--green)", marginTop: "4px" }}>
                    Learn more →
                  </p>
                </div>
              </Link>
            </Animate>
          ))}
        </div>

        <Animate style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/services" className="btn-primary">View All Services</Link>
        </Animate>
      </div>

      <style>{`
        .service-card:hover {
          background: rgba(255,255,255,0.07) !important;
          border-color: rgba(99,160,102,0.35) !important;
          transform: translateY(-3px) !important;
        }
        .service-card:hover h3 { color: var(--green) !important; }
      `}</style>
    </section>
  );
}
