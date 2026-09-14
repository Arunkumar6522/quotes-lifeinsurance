"use client";
import Animate from "@/components/Animate";
import { useModal } from "@/lib/modal";

export default function CtaSection() {
  const { openModal } = useModal();

  return (
    <section style={{
      background: "var(--plum)",
      padding: "88px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle top line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "1px", background: "rgba(255,255,255,0.12)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Animate>
          <p style={{
            fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px",
            textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
            marginBottom: "16px",
          }}>
            Free Consultation — No Obligation
          </p>

          <h2 style={{
            fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
            fontWeight: 900, color: "#fff",
            lineHeight: 1.15, marginBottom: "16px",
            fontFamily: "var(--font-sora), sans-serif",
            letterSpacing: "-0.02em",
          }}>
            Ready to Protect Your Family?
          </h2>

          <p style={{
            fontSize: "15px", color: "rgba(255,255,255,0.72)",
            maxWidth: "460px", margin: "0 auto 40px",
            lineHeight: 1.75,
          }}>
            Get your free quote in minutes. No fees, no pressure — just expert advice from licensed Canadian brokers.
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap",
            gap: "14px", justifyContent: "center",
            marginBottom: "32px",
          }}>
            <button
              onClick={openModal}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#fff", color: "var(--plum)",
                fontWeight: 800, fontSize: "14px",
                padding: "14px 32px", borderRadius: "50px",
                border: "none", cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.2s",
              }}
            >
              Get My Free Quote →
            </button>
            <a href="tel:+15146620403" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.4)",
              color: "#fff", fontWeight: 700, fontSize: "14px",
              padding: "13px 28px", borderRadius: "50px",
              textDecoration: "none",
            }}>
              📞 514-662-0403
            </a>
          </div>

          <p style={{
            fontSize: "12px", color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.3px",
          }}>
            Mon–Fri: 9AM–8PM EST &nbsp;·&nbsp; Sat: 10AM–4PM EST &nbsp;·&nbsp; AMF Lic. #179631
          </p>
        </Animate>
      </div>
    </section>
  );
}
