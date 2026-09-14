import Header from "@/components/Header";
import Footer from "@/components/Footer";

const infoCards = [
  {
    icon: "📞",
    title: "Call Us",
    lines: ["514-662-0403"],
    note: "For new life insurance quotes only",
    href: "tel:+15146620403",
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["info@quotes-lifeinsurance.com"],
    href: "mailto:info@quotes-lifeinsurance.com",
  },
  {
    icon: "🕐",
    title: "Business Hours",
    lines: ["Mon – Fri: 9AM – 8PM EST", "Saturday: 10AM – 4PM EST"],
  },
  {
    icon: "📍",
    title: "Our Office",
    lines: ["4900 Jean-Talon Ouest", "Unit 200, Office Room #3", "Montreal, Quebec H4P 1W9"],
  },
];

const coverageTypes = [
  "Term Life Insurance",
  "Whole Life Insurance",
  "Universal Life Insurance",
  "Critical Illness Coverage",
  "Disability Insurance",
  "Not Sure — Help Me Choose",
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>

        {/* Breadcrumb */}
        <div style={{ background: "var(--dark)" }} className="py-16 text-center">
          <p className="text-sm font-semibold mb-2" style={{ color: "var(--green)" }}>Home / Contact</p>
          <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
          <p className="text-white/60 mt-3 max-w-lg mx-auto">
            We&apos;re here to help you protect what matters most. Reach out today for a free consultation.
          </p>
        </div>

        {/* Info cards */}
        <section className="section-padding-sm bg-white">
          <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6 text-center"
                style={{ background: "var(--bg-soft)", border: "1px solid var(--border)" }}
              >
                <span className="text-3xl block mb-3">{c.icon}</span>
                <h3 className="font-bold text-sm mb-2" style={{ color: "var(--dark)" }}>{c.title}</h3>
                {c.lines.map((l) =>
                  c.href ? (
                    <a key={l} href={c.href} className="block text-sm font-semibold hover:underline" style={{ color: "var(--green)" }}>{l}</a>
                  ) : (
                    <p key={l} className="text-sm text-gray-500">{l}</p>
                  )
                )}
                {c.note && <p className="text-xs text-gray-400 mt-1 italic">{c.note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Map + Form */}
        <section className="section-padding" style={{ background: "var(--bg-soft)" }}>
          <div className="container grid lg:grid-cols-2 gap-10">

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--dark)" }}>Find Us</h2>
              <p className="text-gray-500 text-sm mb-2">
                <strong>DCW Financial Inc.</strong> — Operated by <strong>Denesh Logeswaran</strong>
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg inline-flex mb-5"
                style={{ background: "var(--bg-soft)", border: "1px solid #d1e8d4", color: "var(--green)" }}>
                🛡️ AMF Licence #179631 · Firm #608808
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.8!2d-73.6580!3d45.4940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918e6b6b6b6b7%3A0x0!2s4900+Jean-Talon+Ouest%2C+Montreal%2C+QC+H4P+1W9!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Quotes Life Insurance Office — Montreal"
                />
              </div>
            </div>

            {/* GHL Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid var(--border)" }}>
              <h2 className="text-2xl font-bold mb-1" style={{ color: "var(--dark)" }}>Get Your Free Quote</h2>
              <p className="text-gray-400 text-sm mb-6">Fill in the form below — a licensed advisor will be in touch within one business day.</p>
              <script src="https://links.dcwfinancial.com/js/form_embed.js" />
              <iframe
                src="https://links.dcwfinancial.com/widget/survey/DB1LhG9viWHzgSpuCXyL"
                style={{ width: "100%", border: "none", minHeight: "600px" }}
                scrolling="no"
                title="Life Insurance Quote"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
