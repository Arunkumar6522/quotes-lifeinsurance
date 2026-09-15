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
    // Smaller height — prevents scroll on all screen sizes
    s.setAttribute("data-dimensions", JSON.stringify(["100%", "420px"]));
    s.async = true;

    s.onload = () => {
      // Strip every scrollable div inside the embed
      const strip = () => {
        const embed = document.getElementById("qs-embed-6aa7eb9fc1c5e04d74de874e");
        if (!embed) return;
        embed.querySelectorAll<HTMLElement>("*").forEach((el) => {
          const cs = window.getComputedStyle(el);
          if (cs.overflow === "scroll" || cs.overflow === "auto" ||
              cs.overflowY === "scroll" || cs.overflowY === "auto") {
            el.style.setProperty("overflow",   "visible", "important");
            el.style.setProperty("overflow-y", "visible", "important");
            el.style.setProperty("height",     "auto",    "important");
            el.style.setProperty("max-height", "none",    "important");
          }
          // Also kill any explicit scrollbar via scrollbar-width
          el.style.setProperty("scrollbar-width", "none", "important");
        });
      };

      // Run immediately
      strip();

      // Watch for ANY DOM change inside the embed — catches every QS step re-render
      const embed = document.getElementById("qs-embed-6aa7eb9fc1c5e04d74de874e");
      if (embed) {
        const observer = new MutationObserver(strip);
        observer.observe(embed, { childList: true, subtree: true, attributes: true, attributeFilter: ["style"] });
        // Keep a fallback interval just in case
        const iv = setInterval(strip, 800);
        setTimeout(() => clearInterval(iv), 30000); // 30s — covers most multi-step forms
      }
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
          max-width: 100%;
        }
        /* QS embed wrapper — scale it, no scroll */
        #qs-embed-6aa7eb9fc1c5e04d74de874e {
          width: 100% !important;
          max-width: 100% !important;
          overflow: hidden !important;
        }
        /* Kill scrollbar on every child QS renders */
        #qs-embed-6aa7eb9fc1c5e04d74de874e *::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
        #qs-embed-6aa7eb9fc1c5e04d74de874e * { scrollbar-width: none !important; -ms-overflow-style: none !important; overflow-x: hidden !important; }
        /* QS sets inline height on its root div — override it */
        #qs-embed-6aa7eb9fc1c5e04d74de874e > div { height: auto !important; min-height: unset !important; overflow: hidden !important; }

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
