"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/i18n";

interface Props {
  open: boolean;
  onClose: () => void;
}

const FORM_URL = process.env.NEXT_PUBLIC_LEADCAPTURE_FUNNEL_URL ??
  "https://app.leadcapture.io/lead-form-guest/22165?token=dfzpha-cf2e82c0436a35a217478b9cad982ec9&uidb64=MjIxNjU";

export default function QuoteModal({ open, onClose }: Props) {
  const { lang } = useLang();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);

  if (!open) return null;

  const headerLabel = lang === "fr" ? "Consultation gratuite, sans obligation" : "Free Consultation, No Obligation";
  const headerTitle = lang === "fr" ? "Obtenez votre devis gratuit d'assurance vie" : "Get Your Free Life Insurance Quote";

  return (
    <>
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(15,22,35,0.6)",
        backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
        animation: "modal-fade 0.2s ease",
      }} />

      <div onClick={(e) => e.stopPropagation()} className="quote-modal">
        {/* Green header */}
        <div style={{
          background: "var(--green)", padding: "14px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
        }}>
          <div>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "2px" }}>
              {headerLabel}
            </p>
            <h3 style={{ color: "#fff", fontSize: "15px", fontWeight: 800, margin: 0 }}>{headerTitle}</h3>
          </div>
          <button onClick={onClose} aria-label="Close" style={{
            background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "50%",
            width: "34px", height: "34px", display: "flex", alignItems: "center",
            justifyContent: "center", cursor: "pointer", color: "#fff", fontSize: "18px",
            flexShrink: 0, marginLeft: "12px", transition: "background 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
          >✕</button>
        </div>

        {/* Form iframe */}
        <div style={{ flex: 1, overflow: "hidden", background: "#fff", display: "flex", flexDirection: "column" }}>
          <iframe
            src={FORM_URL}
            style={{ flex: 1, width: "100%", border: "none", display: "block" }}
            title="Get a Free Life Insurance Quote"
            allow="clipboard-write"
          />
        </div>
      </div>

      <style>{`
        @keyframes modal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modal-scale { from { opacity: 0; transform: translate(-50%, -46%) scale(0.95); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
        .quote-modal {
          position: fixed; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10000;
          width: min(680px, 94vw);
          height: min(88vh, 760px);
          background: #fff; border-radius: 20px; overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.28);
          display: flex; flex-direction: column;
          animation: modal-scale 0.25s ease;
        }
        @media (max-width: 600px) {
          .quote-modal { top: 0; left: 0; transform: none; width: 100%; height: 100%; border-radius: 0; animation: modal-fade 0.2s ease; }
        }
      `}</style>
    </>
  );
}
