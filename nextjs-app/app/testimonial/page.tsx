"use client";
import { useState, useRef } from "react";
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
    labelPhoto: "Your Photo (optional)",
    photoHint: "JPG, PNG or WebP · Max 2 MB",
    photoUpload: "Click to upload a photo",
    photoChange: "Change photo",
    photoRemove: "Remove",
    photoErrType: "Please upload a JPG, PNG, or WebP image.",
    photoErrSize: "Photo must be under 2 MB. Please choose a smaller image.",
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
    labelPhoto: "Votre photo (optionnel)",
    photoHint: "JPG, PNG ou WebP · Max 2 Mo",
    photoUpload: "Cliquez pour télécharger une photo",
    photoChange: "Changer la photo",
    photoRemove: "Supprimer",
    photoErrType: "Veuillez télécharger une image JPG, PNG ou WebP.",
    photoErrSize: "La photo doit faire moins de 2 Mo. Veuillez choisir une image plus petite.",
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
function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
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
            background: "none", border: "none", padding: 2, fontSize: 28, lineHeight: 1,
            color: star <= (hovered || value) ? "#f59e0b" : "#d1d5db",
            transition: "color 0.15s ease, transform 0.1s ease",
            transform: star === hovered ? "scale(1.2)" : "scale(1)",
          }}
        >★</button>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TestimonialPage() {
  const { lang } = useLang();
  const t = copy[lang as "en" | "fr"] ?? copy.en;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({ name: "", location: "", serviceType: "", testimonial: "", rating: 5 });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoBase64, setPhotoBase64]   = useState<string | null>(null);
  const [photoName, setPhotoName]       = useState<string>("");
  const [photoError, setPhotoError]     = useState<string>("");
  const [errors, setErrors]             = useState<{ name?: string; testimonial?: string }>({});
  const [status, setStatus]             = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg]         = useState("");

  // ── Photo selection ──
  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoError("");

    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(file.type)) {
      setPhotoError(t.photoErrType);
      e.target.value = "";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setPhotoError(t.photoErrSize);
      e.target.value = "";
      return;
    }

    setPhotoName(file.name);
    setPhotoPreview(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onload = (ev) => setPhotoBase64(ev.target?.result as string);
    reader.readAsDataURL(file);
  }

  function removePhoto() {
    setPhotoPreview(null);
    setPhotoBase64(null);
    setPhotoName("");
    setPhotoError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // ── Validation & submit ──
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
      const body: Record<string, unknown> = { ...form };
      if (photoBase64) {
        body.photoBase64 = photoBase64;
        body.photoName   = photoName;
      }

      const res  = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
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

  // ── Shared styles ──
  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", border: "1.5px solid var(--border)",
    borderRadius: 10, fontSize: 15, fontFamily: "var(--font-nunito), system-ui, sans-serif",
    color: "var(--dark)", background: "#fff", outline: "none", transition: "border-color 0.2s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontWeight: 700, fontSize: 14, color: "var(--dark)", marginBottom: 6,
  };
  const errStyle: React.CSSProperties = { fontSize: 13, color: "#ef4444", marginTop: 4 };

  return (
    <>
      <Header />

      <Breadcrumb crumbs={[
        { label: lang === "fr" ? "Accueil" : "Home", href: "/" },
        { label: t.breadcrumb },
      ]} />

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg, #0f1623 0%, #1a2335 100%)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <span aria-hidden style={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, borderRadius: "50%", background: "rgba(0,167,89,0.08)", pointerEvents: "none" }} />
        <span aria-hidden style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(0,167,89,0.05)", pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="section-label">
            <span className="section-label-dot" />{t.heroLabel}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
            style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: 16 }}>
            {t.heroH1a} <span style={{ color: "var(--green)" }}>{t.heroH1b}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "20px auto 0", fontSize: 17, lineHeight: 1.7 }}>
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* ── Form section ── */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0 96px" }}>
        <div className="container">
          <AnimatePresence mode="wait">

            {status === "success" ? (
              /* ── Success ── */
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                style={{ maxWidth: 540, margin: "0 auto", background: "#fff", borderRadius: 20, padding: "56px 48px", textAlign: "center", boxShadow: "0 8px 48px rgba(0,0,0,0.08)" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--green-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 style={{ fontSize: 26, marginBottom: 12 }}>{t.successTitle}</h2>
                <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>{t.successDesc}</p>
                <a href="/" className="btn-primary" style={{ display: "inline-flex" }}>{t.successBtn}</a>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}
                className="tm-card"
                style={{ maxWidth: 680, margin: "0 auto", background: "#fff", borderRadius: 20, padding: "48px 48px 52px", boxShadow: "0 8px 48px rgba(0,0,0,0.07)" }}>

                {/* Header */}
                <div style={{ marginBottom: 36, borderBottom: "1.5px solid var(--border)", paddingBottom: 28 }}>
                  <h2 style={{ fontSize: 22, marginBottom: 8 }}>{t.formTitle}</h2>
                  <p style={{ color: "var(--muted)", fontSize: 14 }}>{t.formSubtitle}</p>
                </div>

                <form onSubmit={handleSubmit} noValidate>

                  {/* Name + Location */}
                  <div className="tm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                    <div>
                      <label htmlFor="tm-name" style={labelStyle}>{t.labelName} <span style={{ color: "#ef4444" }}>*</span></label>
                      <input id="tm-name" type="text" autoComplete="name" placeholder={t.placeholderName} value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{ ...inputStyle, borderColor: errors.name ? "#ef4444" : "var(--border)" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "#ef4444" : "var(--border)")}
                        aria-describedby={errors.name ? "tm-name-err" : undefined} aria-invalid={!!errors.name}
                      />
                      {errors.name && <p id="tm-name-err" style={errStyle} role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="tm-location" style={labelStyle}>{t.labelLocation}</label>
                      <input id="tm-location" type="text" autoComplete="address-level2" placeholder={t.placeholderLocation} value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div style={{ marginBottom: 20 }}>
                    <label htmlFor="tm-service" style={labelStyle}>{t.labelService}</label>
                    <select id="tm-service" value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer", appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 40,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    >
                      <option value="">{t.placeholderService}</option>
                      {t.services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Star rating */}
                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>{t.labelRating}</label>
                    <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                  </div>

                  {/* Photo upload */}
                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>{t.labelPhoto}</label>

                    {/* Hidden real input */}
                    <input ref={fileInputRef} id="tm-photo" type="file" accept="image/jpeg,image/png,image/webp"
                      onChange={handlePhotoChange} style={{ display: "none" }} aria-label={t.labelPhoto} />

                    {photoPreview ? (
                      /* Preview */
                      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 16px", border: "1.5px solid var(--green)", borderRadius: 10, background: "var(--green-light)" }}>
                        <img src={photoPreview} alt="Preview"
                          style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid var(--green)" }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: "var(--dark)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{photoName}</p>
                          <p style={{ fontSize: 12, color: "var(--green)", marginTop: 2 }}>✓ Ready to upload</p>
                        </div>
                        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                          <button type="button" onClick={() => fileInputRef.current?.click()}
                            style={{ fontSize: 12, fontWeight: 700, color: "var(--green)", background: "none", border: "1px solid var(--green)", borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>
                            {t.photoChange}
                          </button>
                          <button type="button" onClick={removePhoto}
                            style={{ fontSize: 12, fontWeight: 700, color: "#ef4444", background: "none", border: "1px solid #fecaca", borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>
                            {t.photoRemove}
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Upload zone */
                      <button type="button" onClick={() => fileInputRef.current?.click()}
                        style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                          gap: 8, padding: "24px 16px", border: "1.5px dashed var(--border)", borderRadius: 10,
                          background: "#fafafa", cursor: "pointer", transition: "border-color 0.2s, background 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--green)"; e.currentTarget.style.background = "var(--green-light)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)";  e.currentTarget.style.background = "#fafafa"; }}
                      >
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--green-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                        </div>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--dark)" }}>{t.photoUpload}</span>
                        <span style={{ fontSize: 12, color: "var(--muted)" }}>{t.photoHint}</span>
                      </button>
                    )}

                    {photoError && <p style={errStyle} role="alert">{photoError}</p>}
                  </div>

                  {/* Testimonial textarea */}
                  <div style={{ marginBottom: 28 }}>
                    <label htmlFor="tm-message" style={labelStyle}>{t.labelMessage} <span style={{ color: "#ef4444" }}>*</span></label>
                    <textarea id="tm-message" rows={5} placeholder={t.placeholderMessage} value={form.testimonial}
                      onChange={(e) => setForm({ ...form, testimonial: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 120, borderColor: errors.testimonial ? "#ef4444" : "var(--border)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.testimonial ? "#ef4444" : "var(--border)")}
                      aria-describedby={errors.testimonial ? "tm-msg-err" : undefined} aria-invalid={!!errors.testimonial}
                    />
                    {errors.testimonial && <p id="tm-msg-err" style={errStyle} role="alert">{errors.testimonial}</p>}
                    <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{form.testimonial.length} / 2000</p>
                  </div>

                  {/* Server error banner */}
                  {status === "error" && (
                    <div role="alert" style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "12px 16px", color: "#dc2626", fontSize: 14, marginBottom: 20 }}>
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit button */}
                  <button type="submit" disabled={status === "loading"} className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "14px 24px" }}>
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
