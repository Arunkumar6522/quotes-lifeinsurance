import Link from "next/link";
import Animate from "@/components/Animate";

export default function CtaSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--plum) 0%, var(--green) 100%)",
      }}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 opacity-25"
        style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, white 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 text-center">
        <Animate>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Protect Your Family?
          </h2>
          <p className="text-white/75 text-base max-w-md mx-auto mb-10">
            Get your free quote in minutes. No fees, no pressure — just expert advice from licensed Canadian brokers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-extrabold text-sm px-9 py-4 rounded-full transition-all hover:scale-105 hover:shadow-2xl"
              style={{ background: "#fff", color: "var(--plum)" }}
            >
              Get My Free Quote →
            </Link>
            <a
              href="tel:+15146620403"
              className="btn-ghost"
            >
              📞 514-662-0403
            </a>
          </div>
          <p className="text-white/45 text-xs mt-8">
            Mon–Fri: 9AM–8PM EST &nbsp;·&nbsp; Sat: 10AM–4PM EST &nbsp;·&nbsp; AMF Lic. #179631
          </p>
        </Animate>
      </div>
    </section>
  );
}
