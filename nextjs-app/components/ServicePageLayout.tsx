import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

export interface ServicePageProps {
  title: string;
  titleFr: string;
  tagline: string;
  icon: string;
  color: string;
  description: string;
  highlights: { heading: string; text: string }[];
  bestFor: string[];
  faqs: { q: string; a: string }[];
}

const otherServices = [
  { label: "Term Life Insurance",       href: "/services/term-life",        icon: "📋" },
  { label: "Whole Life Insurance",      href: "/services/whole-life",       icon: "🏦" },
  { label: "Universal Life Insurance",  href: "/services/universal-life",   icon: "🔄" },
  { label: "Critical Illness Coverage", href: "/services/critical-illness", icon: "🏥" },
  { label: "Disability Insurance",      href: "/services/disability",       icon: "🦽" },
];

export default function ServicePageLayout({ data }: { data: ServicePageProps }) {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero breadcrumb ───────────────────────── */}
        <div style={{
          background: "var(--dark)", padding: "56px 0 48px",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          {/* Subtle bg icon */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "180px", opacity: 0.04, pointerEvents: "none",
            lineHeight: 1,
          }}>
            {data.icon}
          </div>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginBottom: "10px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</Link>
              {" / "}
              <span style={{ color: "var(--green)" }}>Services</span>
              {" / "}
              <span style={{ color: "rgba(255,255,255,0.7)" }}>{data.title}</span>
            </p>
            <div style={{ fontSize: "52px", marginBottom: "16px" }}>{data.icon}</div>
            <h1 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff",
              fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}>
              {data.title}
            </h1>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "0 auto" }}>
              {data.tagline}
            </p>
          </div>
        </div>

        {/* ── Main content ──────────────────────────── */}
        <section style={{ padding: "72px 0", background: "#fff" }}>
          <div className="container">
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 360px", gap: "56px", alignItems: "start",
            }}
              className="service-layout"
            >

              {/* ── Left: full content ───────────────── */}
              <div>
                <p style={{ fontSize: "16px", color: "var(--body)", lineHeight: 1.85, marginBottom: "48px" }}>
                  {data.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: "48px" }}>
                  {data.highlights.map((h, i) => (
                    <div key={i} style={{
                      display: "flex", gap: "16px", marginBottom: "28px",
                      paddingBottom: "28px",
                      borderBottom: i < data.highlights.length - 1 ? "1px solid var(--border)" : "none",
                    }}>
                      <div style={{
                        width: "36px", height: "36px", borderRadius: "10px",
                        background: "var(--bg-soft)", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 800, fontSize: "14px", color: "var(--green)",
                      }}>
                        {i + 1}
                      </div>
                      <div>
                        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--dark)", marginBottom: "6px" }}>
                          {h.heading}
                        </h3>
                        <p style={{ fontSize: "14px", color: "var(--body)", lineHeight: 1.75 }}>
                          {h.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Best for */}
                <div style={{
                  background: "var(--bg-soft)", borderRadius: "16px",
                  padding: "28px 28px", marginBottom: "48px",
                  border: "1px solid var(--border)",
                }}>
                  <h3 style={{ fontSize: "14px", fontWeight: 800, color: "var(--green)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                    This is best for
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {data.bestFor.map((b) => (
                      <span key={b} style={{
                        fontSize: "13px", fontWeight: 600,
                        background: "#fff", border: "1px solid var(--border)",
                        borderRadius: "50px", padding: "6px 14px", color: "var(--dark)",
                      }}>
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--dark)", marginBottom: "24px" }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {data.faqs.map((faq, i) => (
                    <div key={i} style={{
                      padding: "20px 0",
                      borderBottom: "1px solid var(--border)",
                    }}>
                      <p style={{ fontWeight: 700, fontSize: "15px", color: "var(--dark)", marginBottom: "8px" }}>
                        {faq.q}
                      </p>
                      <p style={{ fontSize: "14px", color: "var(--body)", lineHeight: 1.75 }}>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: sticky CTA sidebar ────────── */}
              <div style={{ position: "sticky", top: "88px", display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* Get quote card */}
                <div style={{
                  background: "var(--plum)", borderRadius: "20px",
                  padding: "32px 28px", textAlign: "center",
                }}>
                  <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>
                    Free — No Obligation
                  </p>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "12px", lineHeight: 1.25 }}>
                    Get Your Free Quote Today
                  </h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginBottom: "24px", lineHeight: 1.6 }}>
                    Compare {data.title} rates from 20+ top Canadian carriers in minutes.
                  </p>
                  <QuoteButton
                    label="Get My Free Quote →"
                    style={{
                      width: "100%", justifyContent: "center",
                      background: "#fff", color: "var(--plum)", border: "none",
                    }}
                  />
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "12px" }}>
                    AMF Licensed · Lic. #179631
                  </p>
                </div>

                {/* Call card */}
                <div style={{
                  background: "var(--bg-soft)", borderRadius: "16px",
                  padding: "20px", border: "1px solid var(--border)",
                  textAlign: "center",
                }}>
                  <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "6px" }}>Prefer to speak with an advisor?</p>
                  <a href="tel:+15146620403" style={{
                    fontSize: "16px", fontWeight: 800, color: "var(--dark)", textDecoration: "none",
                  }}>
                    514-662-0403
                  </a>
                  <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}>Mon–Fri 9AM–8PM EST</p>
                </div>

                {/* Other services */}
                <div style={{
                  background: "#fff", borderRadius: "16px", padding: "20px",
                  border: "1px solid var(--border)",
                }}>
                  <p style={{ fontSize: "11px", fontWeight: 800, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>
                    Other Services
                  </p>
                  {otherServices.map((s) => (
                    <Link key={s.href} href={s.href} style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "9px 0", fontSize: "13px", fontWeight: 600,
                      color: "var(--body)", textDecoration: "none",
                      borderBottom: "1px solid var(--border)", transition: "color 0.15s",
                    }}>
                      <span>{s.icon}</span>
                      {s.label}
                      <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--muted)" }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .service-layout { grid-template-columns: 1fr 360px; }
        @media (max-width: 900px) {
          .service-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
