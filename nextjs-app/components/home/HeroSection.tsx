"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useModal } from "@/lib/modal";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});
const fadeLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

// Build iframe HTML inline using srcDoc — no file request, no 404 possible
function buildFormDoc(token: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html,body{height:100%;width:100%;overflow-y:auto;background:#fff;scrollbar-width:none;-ms-overflow-style:none}
    body::-webkit-scrollbar{display:none}
    [class*="leadforms-header"],[class*="lf-header"],[class*="form-header"]{display:none!important}
    #leadforms-embd-form{width:100%;min-height:100%}
  </style>
</head>
<body>
  <div id="leadforms-embd-form"></div>
  <script>
    window.addEventListener('load',function(){window.scrollTo(0,0);document.body.scrollTop=0;});
    try{history.replaceState(null,'','/');}catch(e){}
    window.form_token="${token}";
  </script>
  <script async src="https://api.useleadbot.com/lead-bots/get-pixel-script.js"></script>
</body>
</html>`;
}

const TOKEN_EN = "GLFT-SLXXIK16MWTFAIC7BTF8VQAQO5O";
const TOKEN_FR = "GLFT-3XAH9YY98KG1NPVKWXCSSJU5S38";

export default function HeroSection() {
  const { t, lang } = useLang();
  const { openModal } = useModal();
  const formDoc = buildFormDoc(lang === "fr" ? TOKEN_FR : TOKEN_EN);

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">

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

          {/* srcDoc embeds HTML directly — no HTTP request, no 404, no wrong page loading */}
          <motion.div initial="hidden" animate="show" variants={fadeLeft(0.18)} className="hero-form-col">
            <div style={{ overflow: "hidden", borderRadius: "16px", lineHeight: 0 }}>
              <iframe
                srcDoc={formDoc}
                className="qs-iframe"
                title="Get a Free Life Insurance Quote"
                frameBorder="0"
                allow="clipboard-write"
                loading="eager"
              />
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
        .qs-iframe { width: 100%; height: 720px; border: none; border-radius: 16px; display: block; background: #fff; box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; } .hero-form-col { order: -1; } .hero-copy { order: 1; } .qs-iframe { height: 720px; } }
        @media (max-width: 600px) { .hero-container { padding-top: 20px !important; padding-bottom: 32px !important; } .hero-h1 { font-size: clamp(1.8rem, 8vw, 2.4rem) !important; } .hero-ctas { flex-direction: column; gap: 10px; } .hero-ctas button, .hero-ctas .hero-learn-btn { width: 100%; justify-content: center; text-align: center; } .hero-form-col { margin-left: -20px; margin-right: -20px; width: calc(100% + 40px); } .qs-iframe { height: 780px; border-radius: 0; } }
      `}</style>
    </section>
  );
}
