"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/i18n";

interface Props {
  open: boolean;
  onClose: () => void;
}

// Hosted funnel page from my.leadcapture.io
const FUNNEL_URL = "https://my.leadcapture.io/p/-el_mx7i";

export default function QuoteModal({ open, onClose }: Props) {
  const { lang } = useLang();

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const headerLabel = lang === "fr" ? "Consultation gratuite, sans obligation" : "Free Consultation, No Obligation";
  const headerTitle = lang === "fr" ? "Obtenez votre devis gratuit d'assurance vie" : "Get Your Free Life Insurance Quote";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(15,22,35,0.6)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          animation: "qs-fade 0.2s ease",
        }}
      />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10000,
          width: "min(720px, 96vw)",
          maxHeight: "92vh",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.28)",
          display: "flex",
          flexDirection: "column",
          animation: "qs-scale 0.25s ease",
        }}
      >
        {/* Green header */}
        <div style={{
          background: "var(--green)", padding: "16px 24px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexShrink: 0,
        }}>
          <div>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "2px",
              textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "3px",
            }}>
              {headerLabel}
            </p>
            <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: 800, margin: 0 }}>
              {headerTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "rgba(255,255,255,0.2)", border: "none",
              borderRadius: "50%", width: "34px", height: "34px",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", fontSize: "18px",
              flexShrink: 0, marginLeft: "16px", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
          >✕</button>
        </div>

        {/* leadcapture.io funnel embedded as iframe */}
        <div style={{ flex: 1, overflow: "hidden", minHeight: "560px", background: "#fff" }}>
          <iframe
            src={FUNNEL_URL}
            style={{
              width: "100%", height: "100%", minHeight: "560px",
              border: "none", display: "block",
            }}
            title="Get a Free Life Insurance Quote"
            allow="clipboard-write"
          />
        </div>
      </div>

      <style>{`
        @keyframes qs-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes qs-scale {
          from { opacity: 0; transform: translate(-50%, -46%) scale(0.95); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
}
