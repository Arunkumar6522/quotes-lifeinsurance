"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useModal } from "@/lib/modal";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});
const fadeLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 48 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});
const slideIn: Variants = {
  hidden: { opacity: 0, x: 24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, x: -24, transition: { duration: 0.2 } },
};

// ── Types ──────────────────────────────────────────────────────────────────────
type InsuranceType  = "Life Insurance" | "Term Insurance";
type SmokerStatus   = "Smoker" | "Non-Smoker";
type CoverageAmount = "$250,000" | "$500,000" | "$1,000,000" | "$2,000,000+";
type Step = 1 | 2 | 3 | 4; // 1=insurance, 2a=smoker 2b=coverage, 3=contact, 4=success

// ── Option button component ───────────────────────────────────────────────────
function OptionBtn({
  label, sublabel, selected, onClick, icon,
}: {
  label: string; sublabel?: string; selected: boolean;
  onClick: () => void; icon?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        width: "100%", padding: "14px 18px",
        border: `2px solid ${selected ? "var(--green)" : "var(--border)"}`,
        borderRadius: 12, background: selected ? "var(--green-light)" : "#fff",
        cursor: "pointer", textAlign: "left",
        transition: "all 0.18s ease",
        boxShadow: selected ? "0 0 0 3px rgba(0,167,89,0.12)" : "none",
      }}
    >
      {icon && (
        <span style={{
          width: 40, height: 40, borderRadius: 10, flexShrink: 0,
          background: selected ? "var(--green)" : "#f1f5f9",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, transition: "background 0.18s",
        }}>{icon}</span>
      )}
      <span>
        <span style={{ display: "block", fontWeight: 700, fontSize: 15, color: selected ? "var(--green)" : "var(--dark)" }}>
          {label}
        </span>
        {sublabel && (
          <span style={{ display: "block", fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{sublabel}</span>
        )}
      </span>
      {selected && (
        <span style={{ marginLeft: "auto", color: "var(--green)", flexShrink: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      )}
    </button>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ForestersHeroSection() {
  const { t }         = useLang();
  const { openModal } = useModal();

  const [step, setStep]                     = useState<Step>(1);
  const [insuranceType, setInsuranceType]   = useState<InsuranceType | null>(null);
  const [smokerStatus, setSmokerStatus]     = useState<SmokerStatus | null>(null);
  const [coverageAmount, setCoverageAmount] = useState<CoverageAmount | null>(null);
  const [firstName, setFirstName]           = useState("");
  const [lastName, setLastName]             = useState("");
  const [email, setEmail]                   = useState("");
  const [errors, setErrors]                 = useState<Record<string, string>>({});
  const [submitting, setSubmitting]         = useState(false);
  const [serverError, setServerError]       = useState("");

  // Progress 1→3 steps (step 4 = success)
  const totalSteps    = 3;
  const currentStep   = Math.min(step, totalSteps);
  const progressPct   = ((currentStep - 1) / (totalSteps - 1)) * 100;

  function handleInsuranceSelect(type: InsuranceType) {
    setInsuranceType(type);
    setSmokerStatus(null);
    setCoverageAmount(null);
    setTimeout(() => setStep(2), 220);
  }

  function handleStep2Select(value: SmokerStatus | CoverageAmount) {
    if (insuranceType === "Life Insurance") setSmokerStatus(value as SmokerStatus);
    else setCoverageAmount(value as CoverageAmount);
    setTimeout(() => setStep(3), 220);
  }

  function validateContact() {
    const e: Record<string, string> = {};
    if (!firstName.trim())                       e.firstName = "Required";
    if (!lastName.trim())                        e.lastName  = "Required";
    if (!email.trim())                           e.email     = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Valid email required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validateContact()) return;
    setSubmitting(true);
    setServerError("");

    try {
      const res  = await fetch("/api/foresters-lead", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          firstName, lastName, email,
          insuranceType:  insuranceType  ?? "",
          smokerStatus:   smokerStatus   ?? "",
          coverageAmount: coverageAmount ?? "",
        }),
      });
      const data = await res.json();

      if (data.success || res.ok) {
        setStep(4);
      } else {
        setServerError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 14px",
    border: "1.5px solid var(--border)", borderRadius: 10,
    fontSize: 15, fontFamily: "var(--font-nunito), system-ui, sans-serif",
    color: "var(--dark)", background: "#fff", outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">

          {/* ── LEFT: copy ── */}
          <motion.div initial="hidden" animate="show" className="hero-copy">
            <motion.h1 variants={fadeUp(0.08)} className="hero-h1">
              {t.heroH1a}<br />
              <span style={{ color: "var(--green)" }}>{t.heroH1b}</span>
              {t.heroH1c && <><br /><span className="hero-h1-sub">{t.heroH1c}</span></>}
            </motion.h1>
            <motion.p variants={fadeUp(0.15)} className="hero-sub">
              {t.heroSub}{" "}
              <strong style={{ color: "var(--green)", fontWeight: 800 }}>{t.heroFree}</strong>.
            </motion.p>
            <motion.div variants={fadeUp(0.22)} className="hero-ctas">
              <button onClick={openModal} className="btn-primary">{t.heroCta1}</button>
              <Link href="/about" className="hero-learn-btn">
                {t.heroCta2}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: multi-step form ── */}
          <motion.div initial="hidden" animate="show" variants={fadeLeft(0.18)} className="hero-form-col">
            <div className="foresters-form-card">

              {/* ── Progress bar (only for steps 1-3) ── */}
              {step < 4 && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--green)", fontWeight: 700 }}>
                      {Math.round(progressPct)}%
                    </span>
                  </div>
                  <div style={{ height: 6, background: "#e5e7eb", borderRadius: 99, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${progressPct === 0 ? 8 : progressPct}%`, background: "var(--green)", borderRadius: 99, transition: "width 0.4s ease" }} />
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">

                {/* ── STEP 1: Insurance type ── */}
                {step === 1 && (
                  <motion.div key="step1" variants={slideIn} initial="hidden" animate="show" exit="exit">
                    <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 6, color: "var(--dark)" }}>
                      Which insurance are you looking for?
                    </h3>
                    <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}>
                      Select one to get started
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <OptionBtn
                        label="Life Insurance"
                        sublabel="Whole life, universal life & more"
                        icon="🛡️"
                        selected={insuranceType === "Life Insurance"}
                        onClick={() => handleInsuranceSelect("Life Insurance")}
                      />
                      <OptionBtn
                        label="Term Insurance"
                        sublabel="10, 20 or 30-year coverage"
                        icon="📋"
                        selected={insuranceType === "Term Insurance"}
                        onClick={() => handleInsuranceSelect("Term Insurance")}
                      />
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 2a: Smoker status (Life Insurance) ── */}
                {step === 2 && insuranceType === "Life Insurance" && (
                  <motion.div key="step2a" variants={slideIn} initial="hidden" animate="show" exit="exit">
                    <button type="button" onClick={() => setStep(1)}
                      style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", marginBottom: 16, padding: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                      Back
                    </button>
                    <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 6, color: "var(--dark)" }}>
                      Are you a smoker?
                    </h3>
                    <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}>
                      This helps us find the most accurate rates
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <OptionBtn
                        label="Non-Smoker"
                        sublabel="Have not smoked in the last 12 months"
                        icon="✅"
                        selected={smokerStatus === "Non-Smoker"}
                        onClick={() => handleStep2Select("Non-Smoker")}
                      />
                      <OptionBtn
                        label="Smoker"
                        sublabel="Current smoker or within 12 months"
                        icon="🚬"
                        selected={smokerStatus === "Smoker"}
                        onClick={() => handleStep2Select("Smoker")}
                      />
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 2b: Coverage amount (Term Insurance) ── */}
                {step === 2 && insuranceType === "Term Insurance" && (
                  <motion.div key="step2b" variants={slideIn} initial="hidden" animate="show" exit="exit">
                    <button type="button" onClick={() => setStep(1)}
                      style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", marginBottom: 16, padding: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                      Back
                    </button>
                    <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 6, color: "var(--dark)" }}>
                      How much coverage do you need?
                    </h3>
                    <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}>
                      Choose your desired sum insured
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      {(["$250,000", "$500,000", "$1,000,000", "$2,000,000+"] as CoverageAmount[]).map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleStep2Select(amount)}
                          style={{
                            padding: "14px 10px", border: `2px solid ${coverageAmount === amount ? "var(--green)" : "var(--border)"}`,
                            borderRadius: 12, background: coverageAmount === amount ? "var(--green-light)" : "#fff",
                            cursor: "pointer", fontWeight: 800, fontSize: 15,
                            color: coverageAmount === amount ? "var(--green)" : "var(--dark)",
                            transition: "all 0.18s",
                            boxShadow: coverageAmount === amount ? "0 0 0 3px rgba(0,167,89,0.12)" : "none",
                          }}
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 3: Contact info ── */}
                {step === 3 && (
                  <motion.div key="step3" variants={slideIn} initial="hidden" animate="show" exit="exit">
                    <button type="button" onClick={() => setStep(2)}
                      style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", marginBottom: 16, padding: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                      Back
                    </button>

                    {/* Summary chips */}
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                      {insuranceType && (
                        <span style={{ fontSize: 12, fontWeight: 700, background: "var(--green-light)", color: "var(--green)", padding: "4px 10px", borderRadius: 99 }}>
                          {insuranceType}
                        </span>
                      )}
                      {smokerStatus && (
                        <span style={{ fontSize: 12, fontWeight: 700, background: "var(--green-light)", color: "var(--green)", padding: "4px 10px", borderRadius: 99 }}>
                          {smokerStatus}
                        </span>
                      )}
                      {coverageAmount && (
                        <span style={{ fontSize: 12, fontWeight: 700, background: "var(--green-light)", color: "var(--green)", padding: "4px 10px", borderRadius: 99 }}>
                          {coverageAmount}
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 6, color: "var(--dark)" }}>
                      Almost there — just your details
                    </h3>
                    <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}>
                      We'll send your free quote right away. No spam, ever.
                    </p>

                    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        <div>
                          <input
                            type="text" placeholder="First Name" value={firstName} autoComplete="given-name"
                            onChange={(e) => setFirstName(e.target.value)}
                            style={{ ...inputStyle, borderColor: errors.firstName ? "#ef4444" : "var(--border)" }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = errors.firstName ? "#ef4444" : "var(--border)")}
                            aria-label="First Name" aria-invalid={!!errors.firstName}
                          />
                          {errors.firstName && <p style={{ fontSize: 11, color: "#ef4444", marginTop: 3 }}>{errors.firstName}</p>}
                        </div>
                        <div>
                          <input
                            type="text" placeholder="Last Name" value={lastName} autoComplete="family-name"
                            onChange={(e) => setLastName(e.target.value)}
                            style={{ ...inputStyle, borderColor: errors.lastName ? "#ef4444" : "var(--border)" }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = errors.lastName ? "#ef4444" : "var(--border)")}
                            aria-label="Last Name" aria-invalid={!!errors.lastName}
                          />
                          {errors.lastName && <p style={{ fontSize: 11, color: "#ef4444", marginTop: 3 }}>{errors.lastName}</p>}
                        </div>
                      </div>
                      <div>
                        <input
                          type="email" placeholder="Email Address" value={email} autoComplete="email"
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ ...inputStyle, borderColor: errors.email ? "#ef4444" : "var(--border)" }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green)")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? "#ef4444" : "var(--border)")}
                          aria-label="Email" aria-invalid={!!errors.email}
                        />
                        {errors.email && <p style={{ fontSize: 11, color: "#ef4444", marginTop: 3 }}>{errors.email}</p>}
                      </div>

                      {serverError && (
                        <div role="alert" style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", color: "#dc2626", fontSize: 13 }}>
                          {serverError}
                        </div>
                      )}

                      <button type="submit" disabled={submitting} className="btn-primary"
                        style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "14px 20px", marginTop: 4 }}>
                        {submitting ? (
                          <>
                            <svg style={{ animation: "spin 0.8s linear infinite", marginRight: 8 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                              <path d="M21 12a9 9 0 1 1-6.22-8.56"/>
                            </svg>
                            Submitting…
                          </>
                        ) : (
                          <>
                            Get My Free Quote
                            <svg style={{ marginLeft: 8 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                            </svg>
                          </>
                        )}
                      </button>

                      <p style={{ fontSize: 11, color: "var(--muted)", textAlign: "center" }}>
                        🔒 Your information is 100% secure and never sold.
                      </p>
                    </form>
                  </motion.div>
                )}

                {/* ── STEP 4: Success ── */}
                {step === 4 && (
                  <motion.div key="step4" variants={slideIn} initial="hidden" animate="show"
                    style={{ textAlign: "center", padding: "24px 8px" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--green-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, color: "var(--dark)" }}>
                      We&apos;ve got your request!
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
                      A licensed broker will reach out with your personalized Foresters quote shortly. It&apos;s 100% free.
                    </p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                      {insuranceType   && <span style={{ fontSize: 12, fontWeight: 700, background: "var(--green-light)", color: "var(--green)", padding: "4px 12px", borderRadius: 99 }}>{insuranceType}</span>}
                      {smokerStatus    && <span style={{ fontSize: 12, fontWeight: 700, background: "var(--green-light)", color: "var(--green)", padding: "4px 12px", borderRadius: 99 }}>{smokerStatus}</span>}
                      {coverageAmount  && <span style={{ fontSize: 12, fontWeight: 700, background: "var(--green-light)", color: "var(--green)", padding: "4px 12px", borderRadius: 99 }}>{coverageAmount}</span>}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-section { background: #f4f6f8; position: relative; }
        .hero-container { padding-top: 60px; padding-bottom: 60px; }
        .hero-grid { display: grid; grid-template-columns: 55fr 45fr; gap: 48px; align-items: flex-start; }
        .hero-copy { display: flex; flex-direction: column; }
        .hero-h1 { font-size: clamp(2.4rem, 5.5vw, 4rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; color: var(--dark); margin-bottom: 20px; font-family: var(--font-sora), sans-serif; }
        .hero-h1-sub { font-size: 0.68em; font-weight: 700; color: #6b7280; letter-spacing: -0.01em; }
        .hero-sub { font-size: 16px; color: #4b5563; line-height: 1.8; margin-bottom: 32px; max-width: 460px; }
        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 36px; }
        .hero-learn-btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 50px; border: 2px solid var(--border); color: var(--dark); font-size: 14px; font-weight: 700; background: #fff; text-decoration: none; transition: all 0.2s ease; }
        .hero-learn-btn:hover { border-color: var(--green); color: var(--green); transform: translateY(-2px); }
        .hero-learn-btn svg { transition: transform 0.2s; }
        .hero-learn-btn:hover svg { transform: translateX(3px); }
        .hero-form-col { width: 100%; }
        .foresters-form-card { background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.07); padding: 28px 24px; min-height: 320px; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .hero-form-col { order: -1; }
          .hero-copy { order: 1; }
        }
        @media (max-width: 600px) {
          .hero-container { padding-top: 20px !important; padding-bottom: 32px !important; }
          .hero-h1 { font-size: clamp(1.8rem, 8vw, 2.4rem) !important; }
          .hero-ctas { flex-direction: column; gap: 10px; }
          .hero-ctas button, .hero-ctas .hero-learn-btn { width: 100%; justify-content: center; text-align: center; }
          .hero-form-col { margin-left: -20px; margin-right: -20px; width: calc(100% + 40px); }
          .foresters-form-card { border-radius: 0; }
        }
      `}</style>
    </section>
  );
}
