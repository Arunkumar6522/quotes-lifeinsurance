import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Insurance Services — Quotes Life Insurance",
  description:
    "Term life, whole life, universal life, critical illness, and disability insurance in Canada. Compare 20+ carriers for free with Quotes Life Insurance.",
};

const services = [
  {
    id: "term",
    icon: "📋",
    title: "Term Life Insurance",
    tagline: "Affordable protection for the years that matter most.",
    desc: "Term life insurance provides coverage for a specific period — typically 10, 20, or 30 years. It's the most affordable way to get a large amount of coverage during the years your family needs it most: when you have a mortgage, young children, or outstanding debts.",
    highlights: [
      "Lowest premium for highest coverage amount",
      "Terms from 10 to 30 years",
      "Convertible to permanent coverage",
      "Level premiums — locked in at the start",
    ],
    bestFor: "Young families, first-time buyers, income replacement",
  },
  {
    id: "whole",
    icon: "🏦",
    title: "Whole Life Insurance",
    tagline: "Lifetime protection with guaranteed cash value.",
    desc: "Whole life insurance is permanent coverage that never expires. It builds guaranteed cash value over time that you can borrow against tax-free. Premiums are fixed and the death benefit is guaranteed — providing certainty for estate planning and final expenses.",
    highlights: [
      "Coverage that never expires",
      "Builds tax-advantaged cash value",
      "Guaranteed level premiums",
      "Dividends may reduce premiums or increase coverage",
    ],
    bestFor: "Estate planning, legacy building, final expense coverage",
  },
  {
    id: "universal",
    icon: "🔄",
    title: "Universal Life Insurance",
    tagline: "Flexible coverage with an investment component.",
    desc: "Universal life combines permanent life insurance with a tax-sheltered investment account. You can adjust your premiums and death benefit as your needs change. The investment component grows tax-deferred, making it a powerful wealth-building tool.",
    highlights: [
      "Flexible premiums and death benefit",
      "Tax-sheltered investment growth",
      "Lifetime coverage",
      "Access to policy cash value",
    ],
    bestFor: "High-income earners, business owners, wealth accumulation",
  },
  {
    id: "critical",
    icon: "🏥",
    title: "Critical Illness Coverage",
    tagline: "A lump-sum payout when you need it most.",
    desc: "Critical illness insurance pays a tax-free lump sum if you're diagnosed with a covered serious illness — including cancer, heart attack, stroke, and many others. Use it to cover medical costs, replace income, or pay off debts while you focus on recovery.",
    highlights: [
      "Tax-free lump-sum payment",
      "Covers 25+ critical conditions",
      "No restrictions on how you spend it",
      "Return of premium option available",
    ],
    bestFor: "Anyone who wants financial protection during a health crisis",
  },
  {
    id: "disability",
    icon: "🦽",
    title: "Disability Insurance",
    tagline: "Protect your income — your most valuable asset.",
    desc: "Disability insurance replaces a portion of your income (typically 60–70%) if you become unable to work due to illness or injury. Your ability to earn an income is worth far more than your home — yet most Canadians leave it unprotected.",
    highlights: [
      "Replaces up to 70% of your income",
      "Short-term and long-term options",
      "Own-occupation and any-occupation definitions",
      "Especially important for self-employed Canadians",
    ],
    bestFor: "Self-employed professionals, single-income households",
  },
  {
    id: "business",
    icon: "💼",
    title: "Business Protection",
    tagline: "Keep your business secure — no matter what.",
    desc: "Business owners face unique risks. We help structure key-person insurance, buy-sell agreements funded by life insurance, and corporate-owned life insurance strategies that protect your business and your partners.",
    highlights: [
      "Key-person insurance",
      "Buy-sell agreement funding",
      "Corporate-owned life insurance",
      "Shareholder protection strategies",
    ],
    bestFor: "Business owners, partners, incorporated professionals",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>

        {/* Breadcrumb */}
        <div style={{ background: "var(--dark)" }} className="py-16 text-center">
          <p className="text-sm font-semibold mb-2" style={{ color: "var(--green)" }}>Home / Services</p>
          <h1 className="text-4xl font-extrabold text-white">Our Services</h1>
          <p className="text-white/60 mt-3 max-w-lg mx-auto">
            Life insurance solutions for every stage of life — compared across 20+ Canadian carriers.
          </p>
        </div>

        {/* Services list */}
        <section className="section-padding bg-white">
          <div className="container space-y-16">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Icon + title side */}
                <div className={`rounded-2xl p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  style={{ background: i % 2 === 0 ? "var(--bg-soft)" : "var(--dark)", border: "1px solid var(--border)", minHeight: "280px" }}>
                  <span className="text-5xl mb-5 block">{s.icon}</span>
                  <h2 className={`text-2xl font-extrabold mb-2 ${i % 2 === 0 ? "" : "text-white"}`}>{s.title}</h2>
                  <p className="font-semibold mb-4" style={{ color: "var(--green)" }}>{s.tagline}</p>
                  <p className="text-sm px-3 py-1.5 rounded-full inline-block"
                    style={{ background: "var(--green)", color: "#fff", fontSize: "12px" }}>
                    Best for: {s.bestFor}
                  </p>
                </div>

                {/* Content side */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: "var(--green)" }}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Get a Free Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compensation disclosure */}
        <section className="section-padding-sm" style={{ background: "var(--bg-soft)" }}>
          <div className="container max-w-3xl text-center">
            <div className="rounded-2xl p-8 bg-white" style={{ border: "1px solid var(--border)" }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--dark)" }}>
                💰 Our Advice Is Always Free
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                You'll never pay a fee to use our services or speak with one of our licensed brokers. We operate on a commission basis — compensated by the insurance carrier only if you choose to put a policy in place through us. Our role is to listen, educate, and guide you toward protection that makes a meaningful difference.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding text-center" style={{ background: "var(--green)" }}>
          <div className="container">
            <h2 className="text-3xl font-extrabold text-white mb-4">Not Sure Which Coverage Is Right for You?</h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Our advisors will walk you through every option at no charge. Free consultation, no pressure.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all"
              style={{ color: "var(--green)" }}>
              Speak to an Advisor →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
