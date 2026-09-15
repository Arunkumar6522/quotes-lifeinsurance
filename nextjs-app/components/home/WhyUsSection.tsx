import Animate from "@/components/Animate";

const reasons = [
  { icon: "🆓", title: "100% Free Advice",      desc: "You never pay us a dollar. We earn a commission only if you take a policy — so our guidance is always in your interest.", plum: false },
  { icon: "⚖️", title: "Truly Independent",      desc: "Not tied to any insurer. We compare 20+ carriers to find what's genuinely best for you.", plum: true },
  { icon: "🛡️", title: "AMF Licensed",           desc: "Fully regulated by the Autorité des marchés financiers. Licence #179631, Firm #608808.", plum: false },
  { icon: "👨‍👩‍👧", title: "Family-Built Brokerage", desc: "Founded by Denesh Logeswaran & Lucia Medina — advisors who treat every client like family.", plum: true },
  { icon: "🇨🇦", title: "Canadian Specialists",  desc: "We specialize exclusively in Canadian life insurance with deep carrier and provincial knowledge.", plum: false },
  { icon: "⚡", title: "Fast & Easy",            desc: "Get your free quote in minutes. We handle all the paperwork so you can focus on life.", plum: true },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div className="container">

        <Animate style={{ maxWidth: "600px", marginBottom: "52px" }}>
          <span className="section-label">Why Choose Us</span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, marginTop: "8px", lineHeight: 1.2, color: "var(--dark)",
          }}>
            Your Family Deserves the Best —{" "}
            <span style={{ color: "var(--plum)" }}>Here&apos;s Why We&apos;re It</span>
          </h2>
        </Animate>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}>
          {reasons.map((r, i) => (
            <Animate key={r.title} delay={i * 0.07}>
              <div style={{
                borderRadius: "16px", padding: "28px 24px",
                background: r.plum ? "var(--plum-light)" : "var(--bg-soft)",
                border: `1px solid ${r.plum ? "rgba(82,45,76,0.15)" : "var(--border)"}`,
                height: "100%",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
                className="why-card"
              >
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "14px" }}>{r.icon}</span>
                <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", color: "var(--dark)" }}>{r.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--body)", lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>

      <style>{`
        .why-card:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.07) !important;
          transform: translateY(-3px) !important;
        }
      `}</style>
    </section>
  );
}
