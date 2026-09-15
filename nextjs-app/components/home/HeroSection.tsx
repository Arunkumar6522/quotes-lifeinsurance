"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useModal } from "@/lib/modal";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const fadeLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function HeroSection() {
  const { t }         = useLang();
  const { openModal } = useModal();

  return (
    <section style={{ background: "#f4f5f7", position: "relative" }}>
      <div className="container hero-container">
        <div className="hero-grid">

          {/* ── LEFT: copy ─────────────────────── */}
          <motion.div initial="hidden" animate="show"
            style={{ display: "flex", flexDirection: "column" }}>

            {/* AMF badge */}
            <motion.div variants={fadeUp(0)} style={{ marginBottom: "20px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "6px 14px", borderRadius: "50px",
                background: "rgba(74,164,97,0.1)",
                border: "1px solid rgba(74,164,97,0.28)",
                fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--green)",
              }}>
                <span style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "var(--green)", flexShrink: 0,
                  animation: "pulseGlow 2.5s ease-in-out infinite",
                }} />
                {t.heroLabel}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp(0.08)} style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900, lineHeight: 1.1,
              letterSpacing: "-0.025em", color: "var(--dark)",
              marginBottom: "16px",
              fontFamily: "var(--font-sora), sans-serif",
            }}>
              {t.heroH1a}<br />
              <span style={{ color: "var(--green)" }}>{t.heroH1b}</span><br />
              <span style={{ fontSize: "0.72em", fontWeight: 700, color: "#6b7280" }}>
                {t.heroH1c}
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp(0.15)} style={{
              fontSize: "15px", color: "#4b5563",
              lineHeight: 1.75, marginBottom: "28px", maxWidth: "440px",
            }}>
              {t.heroSub}{" "}
              <strong style={{ color: "var(--green)", fontWeight: 800 }}>{t.heroFree}</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp(0.22)} className="hero-ctas">
              <button onClick={openModal} className="btn-primary">{t.heroCta1}</button>
              <Link href="/about" className="hero-learn-more">{t.heroCta2}</Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp(0.3)} className="hero-trust">
              {[
                { icon: "🛡️", text: t.trust1 },
                { icon: "💸", text: t.trust2 },
                { icon: "🏦", text: t.trust3 },
                { icon: "⭐", text: t.trust4 },
              ].map((b) => (
                <div key={b.text} style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  fontSize: "12px", fontWeight: 600, color: "#6b7280",
                }}>
                  <span>{b.icon}</span>{b.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: QS form via iframe ────────────────────────────────
              Direct iframe = we own the height. No QS script running in
              our page, no inline-style height injection, no clipping.
              The iframe height is tall enough to show all options in the
              conversational form without any scroll at any screen size.
          ─────────────────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeLeft(0.18)}
            className="hero-form-col"
          >
            <iframe
              src="https://form.questionscout.com/616e35ca63bd79140f61b3ef"
              className="qs-iframe"
              title="Get a Free Life Insurance Quote"
              frameBorder="0"
              scrolling="no"
              allow="clipboard-write"
            />
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-container {
          padding-top: 48px;
          padding-bottom: 48px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: flex-start;
        }
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .hero-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 50px;
          border: 1.5px solid #d1d5db;
          color: #374151;
          font-size: 14px;
          font-weight: 600;
          background: #fff;
          text-decoration: none;
          transition: all 0.2s;
        }
        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        /* QS iframe — full width, tall enough to never scroll */
        .hero-form-col {
          width: 100%;
        }
        .qs-iframe {
          width: 100%;
          height: 640px;
          border: none;
          border-radius: 12px;
          display: block;
          background: #fff;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .hero-form-col { order: 2; }
          .qs-iframe { height: 600px; }
        }
        @media (max-width: 600px) {
          .hero-container {
            padding-top: 28px !important;
            padding-bottom: 28px !important;
          }
          .hero-ctas { flex-direction: column; gap: 10px; }
          .hero-ctas button,
          .hero-ctas .hero-learn-more {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
          .hero-trust { gap: 10px; }
          .qs-iframe { height: 580px; }
        }
      `}</style>
    </section>
  );
}
