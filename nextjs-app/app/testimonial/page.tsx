"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useLang } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

// ─── copy / translations ──────────────────────────────────────────────────────
const copy = {
  en: {
    breadcrumb: "Share Your Experience",
    heroLabel: "Client Stories",
    heroH1a: "How Did We",
    heroH1b: "Do For You?",
    heroDesc:
      "Your feedback helps other Canadians find the right life insurance coverage. Share your experience and help us serve your community better.",
    formTitle: "Leave Your Testimonial",
    formSubtitle:
      "All testimonials are reviewed before being published. We never share your personal information.",
    labelName: "Full Name",
    placeholderName: "e.g. Marie Tremblay",
    labelLocation: "City & Province",
    placeholderLocation: "e.g. Montreal, QC",
    labelService: "Service You Used",
    placeholderService: "Select a service",
    labelRating: "Your Rating",
    labelMessage: "Your Testimonial",
    placeholderMessage:
      "Tell us about your experience working with our team, the coverage you found, and how the process went…",
    submit: "Submit Testimonial",
    submitting: "Submitting…",
    successTitle: "Thank You!",
    successDesc:
      "Your testimonial has been submitted and is under review. We appreciate you taking the time to share your experience.",
    successBtn: "Back to Home",
    errorGeneric: "Something went wrong. Please try again.",
    requiredName: "Please enter your name.",
    requiredMessage: "Please write your testimonial.",
    services: [
      "Term Life Insurance",
      "Whole Life Insurance",
      "Universal Life Insurance",
      "Critical Illness Insurance",
      "Disability Insurance",
      "Health & Dental Insurance",
      "Travel Insurance",
      "Business Insurance",
      "Other",
    ],
  },
  fr: {
    breadcrumb: "Partagez votre expérience",
    heroLabel: "Témoignages clients",
    heroH1a: "Comment avons-nous",
    heroH1b: "répondu à vos besoins ?",
    heroDesc:
      "Votre retour d'expérience aide d'autres Canadiens à trouver la bonne couverture d'assurance vie. Partagez votre expérience et aidez-nous à mieux servir votre communauté.",
    formTitle: "Laissez votre témoignage",
    formSubtitle:
      "Tous les témoignages sont vérifiés avant publication. Nous ne partageons jamais vos informations personnelles.",
    labelName: "Nom complet",
    placeholderName: "ex. Marie Tremblay",
    labelLocation: "Ville et province",
    placeholderLocation: "ex. Montréal, QC",
    labelService: "Service utilisé",
    placeholderService: "Sélectionnez un service",
    labelRating: "Votre évaluation",
    labelMessage: "Votre témoignage",
    placeholderMessage:
      "Parlez-nous de votre expérience avec notre équipe, de la couverture que vous avez trouvée et du déroulement du processus…",
    submit: "Soumettre le témoignage",
    submitting: "Envoi en cours…",
    successTitle: "Merci !",
    successDesc:
      "Votre témoignage a été soumis et est en cours d'examen. Nous apprécions que vous ayez pris le temps de partager votre expérience.",
    successBtn: "Retour à l'accueil",
    errorGeneric: "Une erreur s'est produite. Veuillez réessayer.",
    requiredName: "Veuillez entrer votre nom.",
    requiredMessage: "Veuillez écrire votre témoignage.",
    services: [
      "Assurance vie temporaire",
      "Assurance vie entière",
      "Assurance vie universelle",
      "Assurance maladies graves",
      "Assurance invalidité",
      "Assurance santé et dentaire",
      "Assurance voyage",
      "Assurance entreprise",
      "Autre",
    ],
  },
};

// ─── Star rating component ────────────────────────────────────────────────────
function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div style={{ display: "flex", gap: 6 }} role="group" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          style={{
            background: "none",
            border: "none",
            padding: 2,
            fontSize: 28,
            lineHeight: 1,
            color:
              star <= (hovered || value) ? "#f59e0b" : "#d1d5db",
            transition: "color 0.15s ease, transform 0.1s ease",
            transform: star === hovered ? "scale(1.2)" : "scale(1)",
          }}
        >
          ★
        </button>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TestimonialPage() {
  const { lang } = useLang();
  const t = copy[lang as "en" | "fr"] ?? copy.en;

  const [form, setForm] = useState({
    name: "",
    location: "",
    serviceType: "",
    testimonial: "",
    rating: 5,
  });
  const [errors, setErrors] = useState<{ name?: string; testimonial?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function validate() {
    const e: { name?: string; testimonial?: string } = {};
    if (!form.name.trim()) e.name = t.requiredName;
    if (!form.testimonial.trim()) e.testimonial = t.requiredMessage;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || t.errorGeneric);
        setStatus("error");
      }
    } catch {
      setErrorMsg(t.errorGeneric);
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    border: "1.5px solid var(--border)",
    borderRadius: 10,
    fontSize: 15,
    fontFamily: "var(--font-nunito), system-ui, sans-serif",
    color: "var(--dark)",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontWeight: 700,
    fontSize: 14,
    color: "var(--dark)",
    marginBottom: 6,
  };

  const errorStyle: React.CSSProperties = {
    fontSize: 13,
    color: "#ef4444",
    marginTop: 4,
  };

  return (
    <>
      <Header />

      {/* ── Breadcrumb ── */}
      <Breadcrumb
        crumbs={[
          { label: lang === "fr" ? "Accueil" : "Home", href: "/" },
          { label: t.breadcrumb },
        ]}
      />

      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f1623 0%, #1a2335 100%)",
          padding: "80px 0 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative circles */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(0,167,89,0.08)",
            pointerEvents: "none",
          }}
        />
        <span
          aria-hidden
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "rgba(0,167,89,0.05)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label"
          >
            <span className="section-label-dot" />
            {t.heroLabel}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: 16 }}
          >
            {t.heroH1a}{" "}
            <span style={{ color: "var(--green)" }}>{t.heroH1b}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            style={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: 560,
              margin: "20px auto 0",
              fontSize: 17,
              lineHeight: 1.7,
            }}
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* ── Form section ── */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0 96px" }}>
        <div className="container">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  maxWidth: 540,
                  margin: "0 auto",
                  background: "#fff",
                  borderRadius: 20,
                  padding: "56px 48px",
                  textAlign: "center",
                  boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "var(--green-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 style={{ fontSize: 26, marginBottom: 12 }}>{t.successTitle}</h2>
                <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                  {t.successDesc}
                </p>
                <a href="/" className="btn-primary" style={{ display: "inline-flex" }}>
                  {t.successBtn}
                </a>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="tm-card"
                style={{
                  maxWidth: 680,
                  margin: "0 auto",
                  background: "#fff",
                  borderRadius: 20,
                  padding: "48px 48px 52px",
                  boxShadow: "0 8px 48px rgba(0,0,0,0.07)",
                }}
              >
                {/* Card header */}
                <div style={{ marginBottom: 36, borderBottom: "1.5px solid var(--border)", paddingBottom: 28 }}>
                  <h2 style={{ fontSize: 22, marginBottom: 8 }}>{t.formTitle}</h2>
                  <p style={{ color: "var(--muted)", fontSize: 14 }}>{t.formSubtitle}</p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Row: name + location */}
                  <div className="tm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                    {/* Name */}
                    <div>
                      <label htmlFor="tm-name" style={labelStyle}>
                        {t.labelName} <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        id="tm-name"
                        type="text"
                        autoComplete="name"
                        placeholder={t.placeholderName}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{
                          ...inputStyle,
                          borderColor: errors.name ? "#ef4444" : "var(--border)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "#ef4444" : "var(--border)")}
                        aria-describedby={errors.name ? "tm-name-err" : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p id="tm-name-err" style={errorStyle} role="alert">{errors.name}</p>}
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="tm-location" style={labelStyle}>{t.labelLocation}</label>
                      <input
                        id="tm-location"
                        type="text"
                        autoComplete="address-level2"
                        placeholder={t.placeholderLocation}
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                      />
                    </div>
                  </div>

                  {/* Service type */}
                  <div style={{ marginBottom: 20 }}>
                    <label htmlFor="tm-service" style={labelStyle}>{t.labelService}</label>
                    <select
                      id="tm-service"
                      value={form.serviceType}
                      onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer", appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                        paddingRight: 40,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    >
                      <option value="">{t.placeholderService}</option>
                      {t.services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Star rating */}
                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>{t.labelRating}</label>
                    <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                  </div>

                  {/* Testimonial */}
                  <div style={{ marginBottom: 28 }}>
                    <label htmlFor="tm-message" style={labelStyle}>
                      {t.labelMessage} <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <textarea
                      id="tm-message"
                      rows={5}
                      placeholder={t.placeholderMessage}
                      value={form.testimonial}
                      onChange={(e) => setForm({ ...form, testimonial: e.target.value })}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: 120,
                        borderColor: errors.testimonial ? "#ef4444" : "var(--border)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.testimonial ? "#ef4444" : "var(--border)")}
                      aria-describedby={errors.testimonial ? "tm-msg-err" : undefined}
                      aria-invalid={!!errors.testimonial}
                    />
                    {errors.testimonial && (
                      <p id="tm-msg-err" style={errorStyle} role="alert">{errors.testimonial}</p>
                    )}
                    <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                      {form.testimonial.length} / 2000
                    </p>
                  </div>

                  {/* Server error */}
                  {status === "error" && (
                    <div
                      role="alert"
                      style={{
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        borderRadius: 8,
                        padding: "12px 16px",
                        color: "#dc2626",
                        fontSize: 14,
                        marginBottom: 20,
                      }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "14px 24px" }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg style={{ animation: "spin 0.8s linear infinite", marginRight: 8 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                          <path d="M21 12a9 9 0 1 1-6.22-8.56" />
                        </svg>
                        {t.submitting}
                      </>
                    ) : (
                      <>
                        {t.submit}
                        <svg style={{ marginLeft: 8 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />

      {/* Spinner keyframe */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 600px) {
          .tm-grid { grid-template-columns: 1fr !important; }
          .tm-card { padding: 28px 20px 36px !important; }
        }
      `}</style>
    </>
  );
}
