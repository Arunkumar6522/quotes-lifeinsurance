"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useModal } from "@/lib/modal";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { useState } from "react";
import Script from "next/script";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

const faqsEn = [
  { q: "How much does life insurance cost in Canada?", a: "Costs vary by age, health, and coverage. A healthy 30-year-old can get $500,000 in term life coverage for as low as $25–$40/month. We compare 20+ carriers to find your best rate — get a free quote to see your exact price." },
  { q: "What is the difference between term and whole life insurance?", a: "Term life covers you for a set period (10, 20, or 30 years) and is the most affordable option. Whole life is permanent coverage that builds cash value over time but costs more. We'll help you decide which is right for your situation." },
  { q: "Is your advice really 100% free?", a: "Yes — completely free. We are compensated by the insurance carrier only if you choose to take out a policy. You never pay us a fee, consultation charge, or commission directly." },
  { q: "How long does it take to get life insurance in Canada?", a: "Many term life policies can be approved in as little as 24–72 hours for healthy applicants. Some policies require a medical exam which can take 2–4 weeks. We'll guide you through the fastest path for your situation." },
  { q: "Can I get life insurance if I have a pre-existing condition?", a: "Yes, in most cases. Some carriers specialize in high-risk or simplified issue policies. Canada Protection Plan, for example, offers guaranteed life insurance with no medical questions. We'll match you with the right carrier." },
  { q: "Do you serve clients outside of Montreal?", a: "Absolutely. While we are based in Montreal, we serve clients across all of Canada including Quebec, Ontario, British Columbia, Alberta, and more — all virtually and by phone." },
  { q: "What insurance companies do you work with?", a: "We work with 20+ top Canadian carriers including Manulife, Desjardins, Foresters, iA Financial, Empire Life, Humania, Canada Protection Plan, Ivari, Assumption Life, UV Insurance, and Edge Benefits." },
  { q: "How do I get started?", a: "Click 'Get My Free Quote' anywhere on this site, or call us at 514-662-0403. We'll have a quick conversation to understand your needs and present you with the best options from across our carrier network." },
];

const faqsFr = [
  { q: "Combien coûte l'assurance vie au Canada ?", a: "Les coûts varient selon l'âge, la santé et la couverture. Un adulte de 30 ans en bonne santé peut obtenir 500 000 $ d'assurance vie temporaire pour aussi peu que 25 à 40 $/mois. Nous comparons plus de 20 assureurs pour trouver votre meilleur tarif." },
  { q: "Quelle est la différence entre l'assurance temporaire et l'assurance vie entière ?", a: "L'assurance temporaire vous couvre pour une période fixe (10, 20 ou 30 ans) et est l'option la plus abordable. L'assurance vie entière est une couverture permanente qui accumule une valeur de rachat au fil du temps. Nous vous aiderons à décider laquelle vous convient." },
  { q: "Vos conseils sont-ils vraiment 100% gratuits ?", a: "Oui — entièrement gratuits. Nous sommes rémunérés par l'assureur uniquement si vous souscrivez à une police. Vous ne nous payez jamais de frais, de frais de consultation ou de commission directement." },
  { q: "Combien de temps faut-il pour obtenir une assurance vie au Canada ?", a: "De nombreuses polices d'assurance temporaire peuvent être approuvées en aussi peu que 24 à 72 heures pour les demandeurs en bonne santé. Certaines polices nécessitent un examen médical pouvant prendre jusqu'à 2 à 4 semaines." },
  { q: "Puis-je obtenir une assurance vie si j'ai des conditions préexistantes ?", a: "Oui, dans la plupart des cas. Certains assureurs se spécialisent dans les polices pour demandeurs à risque élevé. Canada Protection Plan, par exemple, offre une assurance vie garantie sans questions médicales." },
  { q: "Servez-vous des clients en dehors de Montréal ?", a: "Absolument. Bien que nous soyons basés à Montréal, nous servons des clients partout au Canada — Québec, Ontario, Colombie-Britannique, Alberta et plus encore — entièrement en ligne et par téléphone." },
  { q: "Avec quelles compagnies d'assurance travaillez-vous ?", a: "Nous travaillons avec plus de 20 assureurs canadiens de premier plan, notamment Manuvie, Desjardins, Foresters, iA Financière, Empire Vie, Humania, Canada Protection Plan, Ivari, Assumption Life, UV Assurance et Edge Benefits." },
  { q: "Comment commencer ?", a: "Cliquez sur 'Obtenir mon devis gratuit' n'importe où sur ce site, ou appelez-nous au 514-662-0403. Nous aurons une conversation rapide pour comprendre vos besoins et vous présenter les meilleures options." },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp(index * 0.05)}
      className={`faq-item ${open ? "faq-item--open" : ""}`}
    >
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {open
              ? <line x1="5" y1="12" x2="19" y2="12" />
              : <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>}
          </svg>
        </span>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </motion.div>
  );
}

export default function ContactPage() {
  const { openModal } = useModal();
  const { t, lang } = useLang();
  const [showCallModal, setShowCallModal] = useState(false);

  const infoCards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: lang === "fr" ? "Appelez-nous" : "Call Us",
      lines: ["514-662-0403"],
      boldNote: lang === "fr" 
        ? "Ce numéro de téléphone est réservé aux demandes de nouvelles soumissions d'assurance vie"
        : "This phone number is for new life insurance quotes inquiry only",
      href: "tel:+15146620403",
      interceptCall: true,
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      title: lang === "fr" ? "Écrivez-nous" : "Email Us",
      lines: ["info@quotes-lifeinsurance.com"],
      href: "mailto:info@quotes-lifeinsurance.com",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: lang === "fr" ? "Heures d'ouverture" : "Business Hours",
      lines: lang === "fr" 
        ? ["Lun – Ven : 9h – 20h HNE", "Samedi : 10h – 16h HNE"]
        : ["Mon – Fri: 9AM – 8PM EST", "Saturday: 10AM – 4PM EST"],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: lang === "fr" ? "Notre bureau" : "Our Office",
      lines: ["4900 Jean-Talon Ouest", "Unit 200, Montréal, QC H4P 1W9"],
    },
  ];

  return (
    <>
      <Header />
      <main>

        {/* ── Hero / Breadcrumb ─────────────────────────── */}
        <section className="contact-hero">
          <div className="container">
            <Breadcrumb crumbs={[
              { label: t.home, href: "/" },
              { label: t.contact },
            ]} />
            <motion.h1
              className="contact-h1"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
            >
              {t.contactHeroTitle}
            </motion.h1>
            <motion.p
              className="contact-sub"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22,1,0.36,1] }}
            >
              {t.contactHeroSub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.22,1,0.36,1] }}
            >
              <button onClick={openModal} className="contact-cta-btn">
                {t.heroCta1}
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── 4 Info Cards ─────────────────────────────── */}
        <section className="contact-cards-section">
          <motion.div
            className="container contact-cards-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {infoCards.map((c, i) => (
              <motion.div key={c.title} variants={fadeUp(i * 0.08)} className="contact-card">
                <div className="contact-card-icon">{c.icon}</div>
                <h3 className="contact-card-title">{c.title}</h3>
                <div className="contact-card-lines">
                  {c.lines.map((l) =>
                    (c as any).interceptCall ? (
                      <button key={l} onClick={() => setShowCallModal(true)} className="contact-card-link" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}>{l}</button>
                    ) : c.href ? (
                      <a key={l} href={c.href} className="contact-card-link">{l}</a>
                    ) : (
                      <p key={l} className="contact-card-text">{l}</p>
                    )
                  )}
                </div>
                {c.boldNote && (
                  <div className="contact-card-alert">
                    <svg className="contact-alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    <span>{c.boldNote}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Map ──────────────────────────────────────── */}
        <section className="contact-map-section">
          <div className="container">
            <motion.div
              className="contact-map-header"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.22,1,0.36,1] }}
            >
              <div>
                <h2 className="contact-map-h2">{t.contactMapTitle}</h2>
                <p className="contact-map-sub">DCW Financial Inc., 4900 Jean-Talon Ouest, Unit 200, Montréal, QC</p>
              </div>
            </motion.div>
            <motion.div
              className="contact-map-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22,1,0.36,1] }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.6061254419405!2d-73.64843809999999!3d45.497875799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91928ed15a155%3A0x471b789683cbda83!2sDCW%20FINANCIAL%20INC.!5e0!3m2!1sen!2sin!4v1790217242050!5m2!1sen!2sin"
                width="100%" height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="DCW Financial Inc. Office Location"
              />
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        <section className="contact-faq-section">
          <div className="container">
            <motion.div
              className="contact-faq-header"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeUp(0)} className="section-label">FAQ</motion.span>
              <motion.h2 variants={fadeUp(0.06)} className="contact-faq-h2">
                {t.contactFaqH2}
              </motion.h2>
              <motion.p variants={fadeUp(0.1)} className="contact-faq-sub">
                {t.contactFaqSub}
              </motion.p>
            </motion.div>

            <motion.div
              className="faq-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              {(lang === "fr" ? faqsFr : faqsEn).map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </motion.div>

            {/* CTA below FAQs */}
            <motion.div
              className="contact-faq-cta"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2, ease: [0.22,1,0.36,1] }}
            >
              <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--dark)" }}>
                {lang === "fr" ? "Vous n'avez pas trouvé votre réponse ?" : "Didn't find your answer?"}
              </p>
              <button onClick={openModal} className="contact-cta-btn" style={{ color: "#fff", fontSize: "14px", fontWeight: 800 }}>
                {lang === "fr" ? "Parler à un conseiller gratuit →" : "Talk to a Free Advisor →"}
              </button>
            </motion.div>
          </div>
        </section>

        {/* JSON-LD FAQ Schema */}
        <Script id="jsonld-faq" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": ${JSON.stringify(faqsEn.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            })))}
          }
        `}</Script>

      </main>
      <Footer />

      {/* ── Before You Call Modal ──────────────────────── */}
      {showCallModal && (
        <div
          onClick={() => setShowCallModal(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)",
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            padding: "0 0 32px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111", borderRadius: "20px",
              padding: "32px 28px 28px", maxWidth: 420, width: "calc(100% - 32px)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
            }}
          >
            {/* Heading */}
            <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 800, marginBottom: "14px", fontFamily: "var(--font-sora), sans-serif" }}>
              {lang === "fr" ? "Avant d'appeler" : "Before you call"}
            </h2>
            {/* Body */}
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", lineHeight: 1.65, marginBottom: "28px" }}>
              {lang === "fr"
                ? "Ce numéro est exclusivement réservé aux nouvelles demandes de soumission d'assurance vie. Appelez-vous pour obtenir un nouveau devis ?"
                : "This line is exclusively for new life insurance quote inquiries. Are you calling to request a new quote?"}
            </p>
            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {/* Primary — opens dialpad */}
              <a
                href="tel:+15146620403"
                onClick={() => setShowCallModal(false)}
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                  background: "var(--green)", color: "#fff", borderRadius: "12px",
                  padding: "14px 16px", fontWeight: 700, fontSize: "15px",
                  textDecoration: "none", textAlign: "center",
                }}
              >
                {lang === "fr" ? "Oui, appeler" : "Yes, call"}
              </a>
              {/* Secondary — opens quote modal */}
              <button
                onClick={() => { setShowCallModal(false); openModal(); }}
                style={{
                  flex: 1, background: "#2a2a2a", color: "#fff", border: "none",
                  borderRadius: "12px", padding: "14px 16px", fontWeight: 700,
                  fontSize: "15px", cursor: "pointer",
                }}
              >
                {lang === "fr" ? "Obtenir un devis" : "Get quote"}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ── Hero ── */
        .contact-hero {
          position: relative;
          padding: 80px 0 100px;
          text-align: center;
          overflow: hidden;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #0f1623 0%, #1a3a2a 40%, #2d6a4a 70%, #00a759 100%);
          z-index: 0;
        }
        /* Decorative circles */
        .contact-hero::after {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(0,167,89,0.12);
          pointer-events: none;
          z-index: 0;
        }
        .contact-hero .container {
          position: relative;
          z-index: 1;
        }

        .contact-h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          font-family: var(--font-sora), sans-serif;
          letter-spacing: -0.025em;
          margin-bottom: 14px;
        }
        .contact-sub {
          font-size: 17px;
          color: rgba(255,255,255,0.75);
          max-width: 500px;
          margin: 0 auto 28px;
          line-height: 1.7;
        }

        /* CTA button */
        .contact-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green);
          color: #fff !important;
          font-weight: 800;
          font-size: 14px !important;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 4px 20px rgba(0,167,89,0.35);
          text-decoration: none;
          white-space: nowrap;
        }
          gap: 8px;
          background: var(--green);
          color: #fff;
          font-weight: 800;
          font-size: 14px;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 4px 20px rgba(0,167,89,0.35);
        }
        .contact-cta-btn:hover {
          background: var(--green-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,167,89,0.4);
        }

        /* ── Cards ── */
        .contact-cards-section {
          background: #fff;
          padding: 64px 0 56px;
        }
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .contact-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .contact-cards-grid { grid-template-columns: 1fr; }
        }

        .contact-card {
          background: #f8f9fb;
          border: 1px solid #e8eaed;
          border-radius: 16px;
          padding: 32px 20px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .contact-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.07);
          transform: translateY(-4px);
          border-color: rgba(0,167,89,0.35);
        }

        /* Icon circle — green */
        .contact-card-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(0,167,89,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 4px;
          transition: background 0.25s;
        }
        .contact-card:hover .contact-card-icon {
          background: rgba(0,167,89,0.18);
        }

        .contact-card-title {
          font-size: 15px;
          font-weight: 800;
          color: var(--dark);
          margin: 0;
        }
        .contact-card-lines { display: flex; flex-direction: column; gap: 3px; }
        .contact-card-link {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .contact-card-link:hover { opacity: 0.75; }
        .contact-card-text {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
          line-height: 1.6;
        }
        .contact-card-note {
          font-size: 11px;
          color: #9ca3af;
          font-style: italic;
          margin: 0;
        }
        .contact-card-bold-note {
          font-size: 13px;
          font-weight: 800;
          color: #dc2626;
          background: #fef2f2;
          border: 2px solid #f87171;
          border-radius: 8px;
          padding: 14px 16px;
          margin: 12px 0 0;
          line-height: 1.5;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          box-shadow: 0 2px 8px rgba(220,38,38,0.15);
        }

        /* Alert box for phone disclaimer */
        .contact-card-alert {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          border: none;
          border-radius: 10px;
          padding: 14px 18px;
          margin: 16px 0 0;
          line-height: 1.45;
          text-align: left;
          box-shadow: 0 4px 16px rgba(185, 28, 28, 0.35);
          position: relative;
        }
        /* Arrow pointing up toward the phone number */
        .contact-card-alert::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #dc2626;
        }
        .contact-alert-icon {
          flex-shrink: 0;
          color: #fff;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          padding: 6px;
          width: 32px;
          height: 32px;
        }

        /* ── Map ── */
        .contact-map-section {
          background: #f4f6f8;
          padding: 64px 0;
        }
        .contact-map-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }
        .contact-map-h2 {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 4px;
        }
        .contact-map-sub {
          font-size: 13px;
          color: #6b7280;
        }
        .contact-amf-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: var(--green);
          background: rgba(0,167,89,0.1);
          border: 1px solid rgba(0,167,89,0.25);
          border-radius: 50px;
          padding: 6px 14px;
          white-space: nowrap;
        }
        .contact-map-wrap {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        /* ── FAQ Section ── */
        .contact-faq-section {
          background: #fff;
          padding: 80px 0;
        }
        .contact-faq-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .contact-faq-h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: var(--dark);
          margin: 10px 0 12px;
          font-family: var(--font-sora), sans-serif;
        }
        .contact-faq-sub {
          font-size: 16px;
          color: var(--muted);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .faq-grid {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .faq-item {
          border: 1.5px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .faq-item--open {
          border-color: var(--green);
          box-shadow: 0 4px 20px rgba(0,167,89,0.1);
        }
        .faq-q {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 700;
          color: var(--dark);
          text-align: left;
          font-family: inherit;
          transition: background 0.15s;
        }
        .faq-q:hover {
          background: var(--bg-soft);
        }
        .faq-item--open .faq-q {
          color: var(--green);
        }
        .faq-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0,167,89,0.1);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .faq-item--open .faq-icon {
          background: var(--green);
          color: #fff;
        }
        .faq-a {
          padding: 0 24px 20px;
          font-size: 14px;
          color: var(--muted);
          line-height: 1.8;
          border-top: 1px solid var(--border);
          padding-top: 16px;
          animation: faqOpen 0.25s ease-out;
        }
        @keyframes faqOpen {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .contact-faq-cta {
          text-align: center;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .contact-faq-cta p {
          font-size: 16px;
          font-weight: 600;
          color: var(--dark) !important;
        }
        @media (max-width: 640px) {
          .faq-q { padding: 16px 18px; font-size: 14px; }
          .faq-a { padding: 0 18px 16px; padding-top: 14px; }
          .contact-faq-section { padding: 56px 0; }
        }
      `}</style>
    </>
  );
}
