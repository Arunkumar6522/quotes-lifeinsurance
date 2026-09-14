import Animate from "@/components/Animate";

const reasons = [
  { icon: "ðŸ†“", title: "100% Free Advice",         desc: "You never pay us a dollar. We earn a commission only if you take a policy â€” so our guidance is always in your interest.", accent: "green" },
  { icon: "âš–ï¸", title: "Truly Independent",         desc: "Not tied to any insurer. We compare 20+ carriers to find what's genuinely best for you.", accent: "plum" },
  { icon: "ðŸ›¡ï¸", title: "AMF Licensed",             desc: "Fully regulated by the AutoritÃ© des marchÃ©s financiers. Licence #179631, Firm #608808.", accent: "green" },
  { icon: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§", title: "Family-Built",             desc: "Founded by Denesh Logeswaran & Lucia Medina â€” advisors who treat every client like family.", accent: "plum" },
  { icon: "ðŸ‡¨ðŸ‡¦", title: "Canadian Specialists",     desc: "We specialize exclusively in Canadian life insurance with deep carrier and provincial knowledge.", accent: "green" },
  { icon: "âš¡", title: "Fast & Easy",              desc: "Get your free quote in minutes. We handle all the paperwork so you can focus on life.", accent: "plum" },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">

        <Animate className="max-w-2xl mb-14">
          <span className="section-label">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 leading-tight">
            Your Family Deserves the Best â€”{" "}
            <span style={{ color: "var(--plum)" }}>Here&apos;s Why We&apos;re It</span>
          </h2>
        </Animate>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <Animate key={r.title} delay={i * 0.07} direction="up">
              <div
                className="rounded-2xl p-7 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  background: r.accent === "green" ? "var(--bg-soft)" : "var(--plum-light)",
                  border: `1px solid ${r.accent === "green" ? "var(--border)" : "#e0d0dc"}`,
                }}
              >
                <span className="text-3xl block mb-4">{r.icon}</span>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--dark)" }}>{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

