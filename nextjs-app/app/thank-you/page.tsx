"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

const REDIRECT_SECONDS = 6;

export default function ThankYouPage() {
  const router          = useRouter();
  const { lang }        = useLang();
  const [count, setCount] = useState(REDIRECT_SECONDS);

  const heading = lang === "fr"
    ? "Nous avons bien reçu votre demande."
    : "We have received your inquiry.";

  const sub = lang === "fr"
    ? "L'un de nos spécialistes vous contactera dans les 24 prochaines heures !"
    : "One of our specialists will be contacting you within the next 24 hours!";

  const redirectLabel = lang === "fr"
    ? `Vous serez redirigé vers l'accueil dans ${count} seconde${count !== 1 ? "s" : ""}…`
    : `Redirecting you to the home page in ${count} second${count !== 1 ? "s" : ""}…`;

  const homeLabel = lang === "fr" ? "Retour à l'accueil" : "Back to Home";

  useEffect(() => {
    // Guard: only show this page if visitor came via a real form submission.
    // Prevents direct URL access from inflating Google Ads conversion data.
    const fromOurSite =
      document.referrer.includes("quotes-lifeinsurance.com") ||
      document.referrer.includes("localhost") ||
      sessionStorage.getItem("form_submitted") === "1";

    if (!fromOurSite) {
      router.replace("/");
      return;
    }

    // Clear the flag so refreshing the thank-you page also redirects
    sessionStorage.removeItem("form_submitted");
  }, [router]);

  useEffect(() => {
    if (count <= 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, router]);

  return (
    <>
      <Header />
      <main>
        <section style={{
          minHeight: "70vh",
          background: "linear-gradient(135deg, #0f1623 0%, #1a2335 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative circles */}
          <span aria-hidden style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(0,167,89,0.07)", pointerEvents: "none" }} />
          <span aria-hidden style={{ position: "absolute", bottom: -60, left: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(0,167,89,0.05)", pointerEvents: "none" }} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              textAlign: "center",
              maxWidth: 580,
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Checkmark icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                background: "var(--green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 32px",
                boxShadow: "0 0 0 16px rgba(0,167,89,0.15)",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                color: "#fff",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: 20,
                fontFamily: "var(--font-sora), sans-serif",
              }}
            >
              {heading}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 18,
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              {sub}
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ marginBottom: 32 }}
            >
              <div style={{
                height: 4,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 99,
                overflow: "hidden",
                maxWidth: 320,
                margin: "0 auto 12px",
              }}>
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: REDIRECT_SECONDS, ease: "linear" }}
                  style={{ height: "100%", background: "var(--green)", borderRadius: 99 }}
                />
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{redirectLabel}</p>
            </motion.div>

            {/* Manual home button */}
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="btn-primary"
              style={{ display: "inline-flex" }}
            >
              {homeLabel}
              <svg style={{ marginLeft: 8 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </motion.a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

