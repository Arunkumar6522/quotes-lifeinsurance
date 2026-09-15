"use client";
import { motion, type Variants } from "framer-motion";
import { useEffect } from "react";
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

  useEffect(() => {
    if (document.getElementById("qs-script")) return;
    const s = document.createElement("script");
    s.id  = "qs-script";
    s.src = "https://form.questionscout.com/qs-form-script.min.js";
    s.setAttribute("data-form-id",    "616e35ca63bd79140f61b3ef");
    s.setAttribute("data-url-params", JSON.stringify([{ key: "campaign", value: "" }]));
    s.setAttribute("data-runner-id",  "qs-embed-6aa7eb9fc1c5e04d74de874e");
    // On mobile use a shorter height so it fits without scrolling
    const isMobile = window.innerWidth < 768;
    s.setAttribute("data-dimensions", JSON.stringify(["100%", isMobile ? "480px" : "620px"]));
    s.async = true;

    s.onload = () => {
      const strip = () => {
        const embed = document.getElementById("qs-embed-6aa7eb9fc1c5e04d74de874e");
        if (!embed) return;
        embed.querySelectorAll<HTMLElement>("div").forEach((div) => {
          const cs = window.getComputedStyle(div);
          if (cs.overflow === "scroll" || cs.overflow === "auto" ||
              cs.overflowY === "scroll" || cs.overflowY === "auto") {
            div.style.setProperty("overflow",   "visible", "important");
            div.style.setProperty("overflow-y", "visible", "important");
            div.style.setProperty("height",     "auto",    "important");
            div.style.setProperty("max-height", "none",    "important");
          }
        });
      };
      // Run immediately and every 400ms for 6s as QS re-renders each step
      strip();
      const iv = setInterval(strip, 400);
      setTimeout(() => clearInterval(iv), 6000);
    };

    document.head.appendChild(s);
  }, []);

  return (
    <section style={{ background: "#f4f5f7", position: "relative", overflow: "hidden" }}>
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
                background: "rgba(99,160,102,0.1)",
                border: "1px solid rgba(99,160,102,0.28)",
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

          {/* ── RIGHT: QS form ──────────────────── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeLeft(0.18)}
            className="hero-form-col"
          >
            <div id="qs-embed-6aa7eb9fc1c5e04d74de874e" style={{ width: "100%" }} />
          </motion.div>

        </div>
      </div>

      <style>{`
        /* ── Hero container ── */
        .hero-container {
          padding-top: 48px;
          padding-bottom: 48px;
        }
        /* ── Two-col desktop grid ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: flex-start;
        }
        /* ── CTA row ── */
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
        /* ── Trust badges row ── */
        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }
        /* ── QS form column ── */
        .hero-form-col {
          overflow: hidden;
        }
        /* QS scrollbar kill */
        #qs-embed-6aa7eb9fc1c5e04d74de874e { overflow: hidden !important; }
        #qs-embed-6aa7eb9fc1c5e04d74de874e *::-webkit-scrollbar { display: none !important; width: 0 !important; }
        #qs-embed-6aa7eb9fc1c5e04d74de874e * { scrollbar-width: none !important; }

        /* ══════════════════════════════════════
           MOBILE — single column stack
        ══════════════════════════════════════ */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          /* Copy side comes first, form below */
          .hero-form-col { order: 2; }
        }

        @media (max-width: 600px) {
          .hero-container {
            padding-top: 28px !important;
            padding-bottom: 28px !important;
          }
          /* Full-width buttons on small phones */
          .hero-ctas {
            flex-direction: column;
            gap: 10px;
          }
          .hero-ctas button,
          .hero-ctas .hero-learn-more {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
          .hero-trust { gap: 10px; }
        }
      `}</style>
    </section>
  );
}
