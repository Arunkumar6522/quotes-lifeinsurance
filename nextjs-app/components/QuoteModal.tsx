"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function QuoteModal({ open, onClose }: Props) {
  const { lang } = useLang();
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    if (!open) {
      setIframeLoading(true);
      return;
    }
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        onClose();
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);

  const handleClose = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    onClose();
  };

  if (!open) return null;

  const headerLabel = lang === "fr" ? "Consultation gratuite, sans obligation" : "Free Consultation, No Obligation";
  const headerTitle = lang === "fr" ? "Obtenez votre devis gratuit d'assurance vie" : "Get Your Free Life Insurance Quote";
  const formSrc = lang === "fr" ? "/leadbot-form-fr.html" : "/leadbot-form.html";

  return (
    <>
      <div onClick={handleClose} style={{
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
            <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.95)", marginBottom: "2px" }}>
              {headerLabel}
            </p>
            <h3 style={{ color: "#fff", fontSize: "15px", fontWeight: 800, margin: 0 }}>{headerTitle}</h3>
          </div>
          <button onClick={handleClose} aria-label="Close" style={{
            background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "50%",
            width: "34px", height: "34px", display: "flex", alignItems: "center",
            justifyContent: "center", cursor: "pointer", color: "#fff", fontSize: "18px",
            flexShrink: 0, marginLeft: "12px", transition: "background 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
          >✕</button>
        </div>

        {/* Form iframe — loads localized leadbot-form.html with loading spinner */}
        <div style={{ flex: 1, overflow: "hidden", background: "#fff", display: "flex", flexDirection: "column", position: "relative" }}>
          {iframeLoading && (
            <div style={{
              position: "absolute", inset: 0, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", background: "#fff", zIndex: 2,
            }}>
              <div className="quote-modal-spinner" />
              <p style={{ marginTop: 14, fontSize: 13, color: "var(--muted)", fontWeight: 600 }}>
                {lang === "fr" ? "Chargement du formulaire sécurisé..." : "Loading secure quote form..."}
              </p>
            </div>
          )}
          <iframe
            src={formSrc}
            onLoad={() => setIframeLoading(false)}
            style={{ flex: 1, width: "100%", border: "none", display: "block" }}
            title={headerTitle}
            allow="clipboard-write"
          />
        </div>
      </div>

      <style>{`
        @keyframes modal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modal-scale { from { opacity: 0; transform: translate(-50%, -46%) scale(0.95); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .quote-modal-spinner {
          width: 38px; height: 38px;
          border: 3.5px solid rgba(0, 167, 89, 0.15);
          border-top-color: var(--green);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
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
