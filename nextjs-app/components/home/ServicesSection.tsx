import Link from "next/link";
import Animate from "@/components/Animate";

const services = [
  { icon: "📋", title: "Term Life Insurance",       tag: "Most Popular", desc: "Affordable coverage for a set term. Lock in low rates while your family needs protection most.",   href: "/services#term" },
  { icon: "🏦", title: "Whole Life Insurance",       tag: "Permanent",    desc: "Lifetime coverage that builds guaranteed cash value — never expires, never changes in cost.",        href: "/services#whole" },
  { icon: "🔄", title: "Universal Life Insurance",  tag: "Flexible",     desc: "Adjustable premiums + a tax-sheltered investment account. Coverage and wealth in one policy.",        href: "/services#universal" },
  { icon: "🏥", title: "Critical Illness Coverage", tag: "Lump-Sum",     desc: "Tax-free cash if you're diagnosed with cancer, heart attack, stroke or 25+ covered conditions.",     href: "/services#critical" },
  { icon: "🦽", title: "Disability Insurance",      tag: "Income Protection", desc: "Replace up to 70% of your income if illness or injury stops you from working.",                href: "/services#disability" },
  { icon: "💼", title: "Business Protection",       tag: "For Owners",   desc: "Key-person insurance, buy-sell agreements, and corporate coverage for entrepreneurs.",                href: "/services" },
];

export default function ServicesSection() {
  return (
    <section className="section-padding" style={{ background: "var(--dark)" }}>
      <div className="container">

        <Animate className="text-center mb-14">
          <span className="section-label light">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Coverage for Every{" "}
            <span className="gradient-text">Stage of Life</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Compare policies across 20+ carriers — one call, zero fees.
          </p>
        </Animate>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Animate key={s.title} delay={i * 0.07} direction="up">
              <Link
                href={s.href}
                className="group block h-full rounded-2xl p-7 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* hover: lift + green border */}
                <div className="h-full flex flex-col gap-4 transition-all duration-300 group-hover:border-[var(--green)]">
                  <div className="flex items-start justify-between">
                    <span className="text-3xl">{s.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(99,160,102,0.2)", color: "var(--green)" }}>
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-[var(--green)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <p className="text-[var(--green)] text-sm font-bold mt-auto">
                    Learn more →
                  </p>
                </div>
              </Link>
            </Animate>
          ))}
        </div>

        <Animate className="text-center mt-12">
          <Link href="/services" className="btn-primary">View All Services</Link>
        </Animate>
      </div>
    </section>
  );
}
