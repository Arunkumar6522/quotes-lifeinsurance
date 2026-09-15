"use client";
import Link from "next/link";
import Animate from "@/components/Animate";
import { useLang } from "@/lib/i18n";

const statValues = ["40K+", "20+", "25+", "4.9?"];

export default function AboutSection() {
  const { t } = useLang();
  const statLabels = [t.stat1, t.stat2, t.stat3, t.stat4];
  const stats = statValues.map((v, i) => ({ value: v, label: statLabels[i] }));

  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
          className="about-grid"
        >

          {/* Stats grid */}
          <Animate direction="left">
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px",
            }}>
              {stats.map((s, i) => (
                <Animate key={s.label} delay={i * 0.08}>
                  <div className="stat-card" style={{
                    borderRadius: "16px", padding: "28px 20px", textAlign: "center",
                    background: "var(--bg-soft)", border: "1px solid var(--border)",
                    transition: "box-shadow 0.25s, transform 0.25s",
                  }}>
                    <p style={{
                      fontSize: "2.4rem", fontWeight: 900, lineHeight: 1,
                      marginBottom: "8px", color: "var(--green)",
                      fontFamily: "var(--font-sora), sans-serif",
                    }}>
                      {s.value}
                    </p>
                    <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--muted)" }}>
                      {s.label}
                    </p>
                  </div>
                </Animate>
              ))}
            </div>
          </Animate>

          {/* Copy */}
          <Animate direction="right">
            <span className="section-label">{t.aboutLabel}</span>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 800, marginTop: "8px", marginBottom: "18px",
              lineHeight: 1.2, color: "var(--dark)",
            }}>
              {t.aboutH2a}{" "}
              <span style={{ color: "var(--green)" }}>{t.aboutH2b}</span>
            </h2>
            <p style={{ fontSize: "15px", color: "var(--body)", lineHeight: 1.8, marginBottom: "14px" }}>
              {t.aboutP1}
            </p>
            <p style={{ fontSize: "15px", color: "var(--body)", lineHeight: 1.8, marginBottom: "24px" }}>
              {t.aboutP2}
            </p>

            {/* AMF badge */}
            <div style={{
              display: "flex", alignItems: "flex-start", gap: "12px",
              borderRadius: "14px", padding: "14px 16px", marginBottom: "28px",
              background: "var(--bg-soft)", border: "1px solid rgba(74,164,97,0.25)",
            }}>
              <span style={{ fontSize: "1.2rem", flexShrink: 0, marginTop: "1px" }}>???</span>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--green)", marginBottom: "3px" }}>
                  {t.aboutAmf}
                </p>
                <p style={{ fontSize: "12px", color: "var(--muted)" }}>{t.aboutAmfSub}</p>
              </div>
            </div>

            <Link href="/about" className="btn-primary">{t.aboutCta}</Link>
          </Animate>
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }
        .stat-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.07) !important; transform: translateY(-3px) !important; }
      `}</style>
    </section>
  );
}
