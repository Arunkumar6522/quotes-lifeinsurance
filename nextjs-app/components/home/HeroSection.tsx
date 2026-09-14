"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section style={{
      background: "linear-gradient(135deg, #63a066 0%, #4a8c6e 40%, #522d4c 100%)",
      minHeight: "90vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "flex-end",
    }}>

      {/* ── Light noise/texture overlay ─────────────── */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }} />

      {/* ── White radial glow center-right ──────────── */}
      <div style={{
        position: "absolute", top: "10%", right: "-5%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Bottom white cut ────────────────────────── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "80px", background: "#fff",
        clipPath: "ellipse(55% 100% at 50% 100%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.05fr",
          gap: "0",
          alignItems: "flex-end",
          minHeight: "82vh",
        }}
          className="hero-grid"
        >

          {/* ── LEFT: Person + copy ─────────────────── */}
          <div style={{
            display: "flex", flexDirection: "column",
            justifyContent: "flex-end", position: "relative",
            paddingBottom: "80px",
          }}>

            {/* Floating text copy — sits ABOVE the person */}
            <motion.div
              initial="hidden"
              animate="show"
              style={{
                position: "absolute", top: "8%", left: 0,
                maxWidth: "420px",
              }}
            >
              {/* AMF pill */}
              <motion.span variants={fadeUp(0)} style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "7px 16px", borderRadius: "50px",
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.35)",
                fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px",
                textTransform: "uppercase", color: "rgba(255,255,255,0.9)",
                marginBottom: "22px", display: "block", width: "fit-content",
              }}>
                <span style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#fff", flexShrink: 0,
                  animation: "pulseGlow 2.5s ease-in-out infinite",
                }} />
                {t.heroLabel}
              </motion.span>

              <motion.h1 variants={fadeUp(0.1)} style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.5rem)",
                fontWeight: 900, lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#fff", marginBottom: "16px",
                fontFamily: "var(--font-sora), sans-serif",
              }}>
                {t.heroH1a}<br />
                <span style={{
                  background: "rgba(255,255,255,0.92)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  {t.heroH1b}
                </span><br />
                <span style={{ fontSize: "0.72em", fontWeight: 700, color: "rgba(255,255,255,0.65)" }}>
                  {t.heroH1c}
                </span>
              </motion.h1>

              <motion.p variants={fadeUp(0.2)} style={{
                fontSize: "14px", color: "rgba(255,255,255,0.75)",
                lineHeight: 1.75, marginBottom: "28px", maxWidth: "380px",
              }}>
                {t.heroSub}{" "}
                <strong style={{ color: "#fff", fontWeight: 800 }}>{t.heroFree}</strong>.
              </motion.p>

              <motion.div variants={fadeUp(0.3)} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#fff", color: "var(--green)",
                  fontWeight: 800, fontSize: "14px",
                  padding: "13px 28px", borderRadius: "50px",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}>
                  {t.heroCta1}
                </Link>
                <Link href="/about" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "rgba(255,255,255,0.15)",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#fff", fontWeight: 700, fontSize: "14px",
                  padding: "12px 24px", borderRadius: "50px",
                  transition: "all 0.2s",
                }}>
                  {t.heroCta2}
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp(0.4)} style={{
                display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "28px",
              }}>
                {[
                  { icon: "🛡️", text: t.trust1 },
                  { icon: "💸", text: t.trust2 },
                  { icon: "🏦", text: t.trust3 },
                  { icon: "⭐", text: t.trust4 },
                ].map((b) => (
                  <div key={b.text} style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.65)",
                  }}>
                    <span>{b.icon}</span>{b.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Person image — standing at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "relative", alignSelf: "flex-end",
                height: "clamp(340px, 50vh, 520px)",
                width: "auto", maxWidth: "360px",
                marginLeft: "auto",
              }}
            >
              <Image
                src="/hero-img.png"
                alt="Licensed life insurance advisor"
                fill
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
                priority
              />
            </motion.div>
          </div>

          {/* ── RIGHT: Form card ─────────────────────── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeLeft(0.2)}
            style={{
              display: "flex", alignItems: "center",
              paddingTop: "40px", paddingBottom: "80px",
              paddingLeft: "24px",
            }}
          >
            <div style={{
              width: "100%", maxWidth: "500px",
              borderRadius: "24px", overflow: "hidden",
              background: "#fff",
              boxShadow: "0 24px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.2)",
            }}>
              {/* Card header */}
              <div style={{
                background: "linear-gradient(135deg, var(--plum) 0%, var(--green) 100%)",
                padding: "18px 24px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div>
                  <p style={{
                    color: "rgba(255,255,255,0.7)", fontSize: "10px",
                    fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase",
                    marginBottom: "3px",
                  }}>
                    {t.heroFormLabel}
                  </p>
                  <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: 800 }}>
                    {t.heroFormTitle}
                  </h3>
                </div>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Image src="/logo.png" alt="QLI" width={26} height={26}
                    style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                </div>
              </div>

              {/* GHL form */}
              <script src="https://links.dcwfinancial.com/js/form_embed.js" async defer />
              <iframe
                src="https://links.dcwfinancial.com/widget/survey/DB1LhG9viWHzgSpuCXyL"
                scrolling="no"
                title="Life Insurance Quote"
                style={{ width: "100%", minHeight: "540px", border: "none", display: "block" }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        .hero-grid { grid-template-columns: 1fr 1.05fr !important; }
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
