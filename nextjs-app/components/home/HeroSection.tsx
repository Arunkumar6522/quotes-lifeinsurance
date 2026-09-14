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
  const { t }       = useLang();
  const { openModal } = useModal();

  useEffect(() => {
    if (document.getElementById("qs-script")) return;
    const s = document.createElement("script");
    s.id = "qs-script";
    s.src = "https://form.questionscout.com/qs-form-script.min.js";
    s.setAttribute("data-form-id",    "616e35ca63bd79140f61b3ef");
    s.setAttribute("data-url-params", JSON.stringify([{ key: "campaign", value: "" }]));
    s.setAttribute("data-runner-id",  "qs-embed-6aa7eb9fc1c5e04d74de874e");
    s.setAttribute("data-dimensions", JSON.stringify(["100%", "620px"]));
    s.async = true;

    s.onload = () => {
      // Poll until QS renders, then remove all internal scrollbars
      const interval = setInterval(() => {
        const embed = document.getElementById("qs-embed-6aa7eb9fc1c5e04d74de874e");
        if (!embed) return;
        const divs = embed.querySelectorAll("div");
        divs.forEach((el) => {
          const div = el as HTMLElement;
          const cs = window.getComputedStyle(div);
          if (cs.overflow === "scroll" || cs.overflow === "auto" || cs.overflowY === "scroll" || cs.overflowY === "auto") {
            div.style.cssText += ";overflow:visible!important;overflow-y:visible!important;height:auto!important;max-height:none!important;";
          }
        });
      }, 400);
      setTimeout(() => clearInterval(interval), 6000);
    };

    document.head.appendChild(s);
  }, []);

  return (
    <section style={{
      background: "#f4f5f7",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "flex-start",
        }}>

          {/* ── LEFT: Copy ─────────────────────── */}
          <motion.div initial="hidden" animate="show"
            style={{ display: "flex", flexDirection: "column" }}>

            {/* AMF badge */}
            <motion.div variants={fadeUp(0)} style={{ marginBottom: "22px" }}>
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
              fontSize: "clamp(2.3rem, 3.6vw, 3.5rem)",
              fontWeight: 900, lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--dark)",
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
              lineHeight: 1.75, marginBottom: "30px", maxWidth: "420px",
            }}>
              {t.heroSub}{" "}
              <strong style={{ color: "var(--green)", fontWeight: 800 }}>{t.heroFree}</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp(0.22)} style={{
              display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "36px",
            }}>
              <button onClick={openModal} className="btn-primary">{t.heroCta1}</button>
              <Link href="/about" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", borderRadius: "50px",
                border: "1.5px solid #d1d5db",
                color: "#374151", fontSize: "14px", fontWeight: 600,
                transition: "all 0.2s", textDecoration: "none",
                background: "#fff",
              }}>
                {t.heroCta2}
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp(0.3)} style={{
              display: "flex", flexWrap: "wrap", gap: "16px",
            }}>
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
                  <span style={{ fontSize: "14px" }}>{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Question Scout form ──────── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeLeft(0.18)}
          >
            <div
              id="qs-embed-6aa7eb9fc1c5e04d74de874e"
              style={{ width: "100%" }}
            />
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        /* Clip QS widget so page doesn't scroll */
        #qs-embed-6aa7eb9fc1c5e04d74de874e { overflow: hidden !important; }
        #qs-embed-6aa7eb9fc1c5e04d74de874e ::-webkit-scrollbar { display: none !important; }
      `}</style>
    </section>
  );
}
