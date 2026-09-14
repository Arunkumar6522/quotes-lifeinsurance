"use client";
import Link from "next/link";
import Animate from "@/components/Animate";
import { useLang } from "@/lib/i18n";

const statValues = ["40K+", "20+", "25+", "4.9â˜…"];

export default function AboutSection() {
  const { t } = useLang();
  const statLabels = [t.stat1, t.stat2, t.stat3, t.stat4];
  const stats = statValues.map((v, i) => ({ value: v, label: statLabels[i] }));

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Stats grid */}
          <Animate direction="left">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Animate key={s.label} delay={i * 0.08} direction="up">
                  <div className="rounded-2xl p-7 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{ background: "var(--bg-soft)", border: "1px solid var(--border)" }}>
                    <p style={{ color: "var(--green)" }}>{s.value}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{s.label}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </Animate>

          {/* Copy */}
          <Animate direction="right">
            <span className="section-label">About Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
              Every Family Deserves{" "}
              <span style={{ color: "var(--green)" }}>Financial Security</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Quotes Life Insurance â€” operated by <strong className="text-gray-700">DCW Financial Inc.</strong> â€” is a family-built, client-first brokerage led by Denesh Logeswaran and Lucia Medina. Founded in 1998.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We operate as independent advisors contracted through <strong className="text-gray-700">Experior Financial Group Inc. (MGA)</strong>, giving us access to 20+ top Canadian carriers â€” so we always recommend what's right for <em>you</em>, not what pays us most.
            </p>

            {/* AMF box */}
            <div className="flex items-start gap-3 rounded-2xl p-4 mb-8"
              style={{ background: "var(--bg-soft)", border: "1px solid #c8dfc9" }}>
              <span className="text-xl mt-0.5 flex-shrink-0">ðŸ›¡ï¸</span>
              <div>
                <p className="font-bold text-sm mb-0.5" style={{ color: "var(--green)" }}>
                  AMF Licensed &amp; Regulated
                </p>
                <p className="text-xs text-gray-500">
                  Licence #179631 &nbsp;Â·&nbsp; Firm Registration #608808
                </p>
              </div>
            </div>

            <Link href="/about" className="btn-primary">Learn More About Us â†’</Link>
          </Animate>
        </div>
      </div>
    </section>
  );
}

