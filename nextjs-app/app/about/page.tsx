import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Quotes Life Insurance | DCW Financial Inc.",
  description:
    "Learn about DCW Financial Inc., a family-built life insurance brokerage led by Denesh Logeswaran and Lucia Medina. AMF licensed, contracted through Experior Financial Group Inc.",
};

const carriers = [
  "Manulife", "Beneva", "iA Financial Group", "Foresters Financial",
  "Canada Protection Plan", "Humania", "Empire Life", "Desjardins",
  "Ivari", "Assumption Life", "Edge Benefits", "UV Insurance",
];

const insuranceServices = [
  "Life insurance (term & permanent)",
  "Critical illness & disability insurance",
  "Health & dental plans",
  "Travel insurance",
  "Business / partner protection",
];

const investmentServices = [
  "RRSP, TFSA, and non-registered strategies",
  "Education, estate, and legacy planning",
  "Tax-aware beneficiary structuring",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Breadcrumb ── */}
        <div style={{ background: "var(--dark)" }} className="py-16 text-center">
          <p className="text-sm font-semibold mb-2" style={{ color: "var(--green)" }}>
            Home / About
          </p>
          <h1 className="text-4xl font-extrabold text-white">About Us</h1>
          <p className="text-white/60 mt-3 max-w-lg mx-auto">
            A family-built, client-first brokerage — putting your family first since 1998.
          </p>
        </div>

        {/* ── Who We Are ── */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <span className="section-label">About DCW Financial Inc.</span>
                <h2 className="text-3xl font-extrabold mt-2 mb-5">
                  A Family-Built,{" "}
                  <span style={{ color: "var(--green)" }}>Client-First Brokerage</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  DCW Financial Inc. is a family-built, client-first insurance and financial services brokerage led by co-founders and directors <strong>Denesh Logeswaran</strong> and <strong>Lucia Medina</strong>. We operate as independent advisors and are contracted through <strong>Experior Financial Group Inc. (MGA)</strong>, which provides our access to a broad marketplace of leading Canadian insurers.
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  This independence lets us compare options across carriers so you receive unbiased recommendations tailored to your needs and budget.
                </p>
                {/* AMF box */}
                <div className="flex items-start gap-3 rounded-xl p-4 mb-6"
                  style={{ background: "var(--bg-soft)", border: "1px solid #d1e8d4" }}>
                  <span className="text-2xl mt-0.5">🛡️</span>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--green)" }}>AMF Licensed &amp; Regulated</p>
                    <p className="text-sm text-gray-500">Licence #179631 · Firm Registration #608808</p>
                    <a href="https://lautorite.qc.ca" target="_blank" rel="noopener"
                      className="text-xs font-semibold mt-1 inline-block hover:underline" style={{ color: "var(--green)" }}>
                      Verify on AMF ↗
                    </a>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
              </div>

              {/* Carrier pills */}
              <div className="rounded-2xl p-8" style={{ background: "var(--bg-soft)", border: "1px solid var(--border)" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--dark)" }}>Our Carrier Access</h3>
                <p className="text-sm text-gray-500 mb-5">
                  We work with <strong>20+ reputable insurers</strong> including (but not limited to):
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {carriers.map((c) => (
                    <span key={c} className="text-xs font-bold text-white px-3 py-1 rounded-full"
                      style={{ background: "var(--green)" }}>
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 italic">
                  Disclosure: DCW Financial Inc. is independently owned and operated. Experior Financial Group Inc. is our contracted MGA and is not an insurer. Carrier availability and product eligibility may vary by province and client circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What We Do ── */}
        <section className="section-padding" style={{ background: "var(--dark)" }}>
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label text-white/50 before:bg-white/30">What We Do</span>
              <h2 className="text-3xl font-extrabold text-white mt-2">
                Comprehensive Financial{" "}
                <span style={{ color: "var(--green)" }}>Protection & Planning</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Insurance */}
              <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-2xl"
                  style={{ background: "rgba(74,164,97,0.2)" }}>
                  🛡️
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Insurance Planning</h3>
                <ul className="space-y-3">
                  {insuranceServices.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="font-bold mt-0.5" style={{ color: "var(--green)" }}>✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Investment */}
              <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-2xl"
                  style={{ background: "rgba(82,45,76,0.3)" }}>
                  💰
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Investment &amp; Savings Strategies</h3>
                <ul className="space-y-3">
                  {investmentServices.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="font-bold mt-0.5" style={{ color: "var(--plum)" }}>✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Meet the Founders ── */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">Meet the Founders</span>
              <h2 className="text-3xl font-extrabold mt-2">
                The People{" "}
                <span style={{ color: "var(--green)" }}>Behind Your Coverage</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {
                  initials: "DL",
                  color: "var(--green)",
                  name: "Denesh Logeswaran",
                  role: "Co-Founder & Director",
                  badge: "AMF Licence #179631",
                  bio: "A builder and mentor to a growing team of licensed agents across Canada, Denesh focuses on practical, tax-aware protection strategies for families and entrepreneurs.",
                },
                {
                  initials: "LM",
                  color: "var(--plum)",
                  name: "Lucia Medina",
                  role: "Co-Founder & Director of Service Operations",
                  badge: "Client Advocate",
                  bio: "Known for her client advocacy and meticulous service standards, Lucia leads our service operations to ensure prompt follow-through and proactive policy maintenance.",
                },
              ].map((f) => (
                <div key={f.name} className="rounded-2xl p-8 flex items-start gap-5"
                  style={{ border: "1px solid var(--border)", background: "var(--bg-soft)" }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                    style={{ background: f.color }}>
                    {f.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--dark)" }}>{f.name}</h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: f.color }}>{f.role}</p>
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full text-white mb-3"
                      style={{ background: f.color }}>
                      {f.badge}
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team + Compensation ── */}
        <section className="section-padding" style={{ background: "var(--bg-soft)" }}>
          <div className="container grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 bg-white" style={{ borderLeft: "4px solid var(--green)", border: "1px solid var(--border)" }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--dark)" }}>Our Team</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                DCW Financial Inc. is supported by a network of licensed agents who share our standards for compliance, education, and client care. Working under <strong>Experior Financial Group Inc. (MGA)</strong>, our advisors maintain provincial licensing, continuing education, and mandatory Errors &amp; Omissions (E&amp;O) coverage.
              </p>
            </div>
            <div className="rounded-2xl p-8 bg-white" style={{ borderLeft: "4px solid var(--plum)", border: "1px solid var(--border)" }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--dark)" }}>How We Are Compensated</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                At Quotes Life Insurance, <strong>you'll never pay a fee</strong> to use our services or speak with one of our licensed brokers. We operate on a commission basis — compensated by the carrier only if you choose to put a policy in place.
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--green)" }}>
                Our advice is completely free to you. Always.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding text-center" style={{ background: "var(--green)" }}>
          <div className="container">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Speak with a licensed advisor today. Free consultation, no pressure.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
              style={{ color: "var(--green)" }}>
              Get My Free Quote →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
