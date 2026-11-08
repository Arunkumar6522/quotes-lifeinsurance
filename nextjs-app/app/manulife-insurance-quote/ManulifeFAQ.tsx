"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export default function ManulifeFAQ() {
  const { lang } = useLang();
  const isFr = lang === "fr";
  const [open, setOpen] = useState<number | null>(null);

  const faqs = isFr ? [
    {
      q: "Comment Manuvie établit-elle le prix de l'assurance vie temporaire ?",
      a: "Le tarif dépend de votre âge, de votre état de santé, du montant de couverture et de la durée choisie. Manuvie ne publie pas ses tarifs en ligne — un conseiller indépendant comme nous prépare votre soumission personnalisée en comparant Manuvie avec plus de 20 assureurs canadiens.",
    },
    {
      q: "Quelle est la différence entre Temporaire 10, 20, 65 et vie entière ?",
      a: "La Temporaire 10 et 20 offre une couverture pour une durée fixe au coût le plus bas. La Temporaire 65 couvre jusqu'à 65 ans. La Temporaire-vie couvre jusqu'à 100 ans. La Manulife Par (vie entière participante) offre une couverture à vie avec valeur de rachat garantie et possibilité de participations annuelles.",
    },
    {
      q: "Puis-je convertir ma police temporaire en permanente plus tard ?",
      a: "Oui. Les polices Family Term de Manuvie sont convertibles en produit permanent sans preuve d'assurabilité, jusqu'à l'anniversaire le plus proche de vos 71 ans. Ne laissez pas passer cette échéance — c'est la décision la plus importante de votre police.",
    },
    {
      q: "Qu'est-ce que Vitalité Go vs Vitalité Plus de Manuvie ?",
      a: "Vitalité Go est inclus sans frais sur les polices admissibles — vous accédez aux récompenses de base. Vitalité Plus s'ajoute pour un petit montant mensuel (environ 6 $/mois sur Manuvie VU) et offre des récompenses maximales. Sur Temporaire familiale et Manuvie VU avec Vitalité Plus, vous pouvez réduire vos coûts d'assurance jusqu'à 15 %, avec 10 % automatiquement la première année.",
    },
    {
      q: "Manuvie offre-t-elle de l'assurance sans examen médical ?",
      a: "Oui. La Vie garantie de Manuvie offre une acceptation garantie sans questions de santé, pour les 18–70 ans, avec une couverture de 10 000 $ à 100 000 $. Pour les 71–75 ans, la couverture peut aller jusqu'à 50 000 $. Les délais de carence et exclusions s'appliquent — confirmez dans votre soumission.",
    },
    {
      q: "Comment fonctionne le processus de soumission ?",
      a: "Remplissez le formulaire sur cette page ou appelez-nous. Un conseiller indépendant vous contacte, compare Manuvie avec plus de 20 assureurs, et vous présente les meilleures options pour votre âge, santé et budget. Notre service est toujours 100 % gratuit.",
    },
    {
      q: "Êtes-vous Manuvie ?",
      a: "Non. Quotes Life Insurance est exploité par DCW Financial Inc., un courtage indépendant agréé par Experior Financial Group Inc. Nous comparons Manuvie avec d'autres assureurs — nous ne sommes pas affiliés, mandatés, ni approuvés par Manuvie. Cette page n'est pas un site Web de Manuvie.",
    },
    {
      q: "Combien de temps faut-il pour obtenir une approbation ?",
      a: "Cela dépend du produit et de votre profil de santé. De nombreuses polices temporaires pour les candidats en bonne santé sont approuvées en 24–72 heures. Certaines demandes nécessitent un examen paramédical, ce qui peut prendre 2–4 semaines. Nous vous guidons vers le parcours le plus rapide.",
    },
  ] : [
    {
      q: "How is Manulife life insurance priced?",
      a: "Your rate depends on your age, health, coverage amount, and term length. Manulife does not publish prices online — as independent advisors we prepare your personalised quote, comparing Manulife against 20+ Canadian carriers to find your best rate.",
    },
    {
      q: "What is the difference between Term-10, Term-20, Term-65, and whole life?",
      a: "Term-10 and Term-20 give fixed-period coverage at the lowest cost. Term-65 covers you until age 65. Term-Life covers to age 100. Manulife Par (participating whole life) gives lifetime coverage with guaranteed cash value and the opportunity to earn non-guaranteed annual dividends.",
    },
    {
      q: "Can I convert my term policy to permanent coverage later?",
      a: "Yes. Manulife Family Term policies are convertible to a permanent Manulife product without proving your health again, up to the anniversary nearest your 71st birthday. Don't let that deadline pass — it's the most important feature in your policy.",
    },
    {
      q: "What is the difference between Manulife Vitality Go and Vitality Plus?",
      a: "Vitality Go is included at no extra cost on eligible policies — you get access to basic rewards. Vitality Plus adds greater rewards for a small monthly charge (around $6/month on Manulife UL). On Family Term and Manulife UL with Vitality Plus, engaging with the program can reduce your insurance costs by up to 15%, with 10% automatically in the first year.",
    },
    {
      q: "Does Manulife offer no-medical life insurance?",
      a: "Yes. Manulife's Guaranteed Issue Life offers guaranteed acceptance with no health questions for ages 18–70, coverage $10,000–$100,000. For ages 71–75 coverage goes up to $50,000. Waiting periods and exclusions apply — confirm in your quote.",
    },
    {
      q: "How does the quote process work?",
      a: "Fill in the form on this page or call us. An independent advisor will contact you, compare Manulife against 20+ Canadian carriers, and present your best options for your age, health, and budget. Our service is always 100% free.",
    },
    {
      q: "Are you Manulife?",
      a: "No. Quotes Life Insurance is operated by DCW Financial Inc., an independent brokerage licensed through Experior Financial Group Inc. We compare Manulife with other carriers — we are not affiliated with, endorsed by, or approved by Manulife. This is not a Manulife website.",
    },
    {
      q: "How long does approval take?",
      a: "It depends on the product and your health profile. Many term policies for healthy applicants are approved in 24–72 hours. Some applications require a paramedical exam which can take 2–4 weeks. We'll guide you toward the fastest path for your situation.",
    },
  ];

  return (
    <section style={{ padding: "72px 0", background: "#fff", borderTop: "1px solid var(--border)" }}>
      <div className="container" style={{ maxWidth: "760px" }}>
        <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "var(--green)", marginBottom: "8px" }}>FAQ</p>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: "var(--dark)", fontFamily: "var(--font-sora), sans-serif", marginBottom: "32px" }}>
          {isFr ? "Questions fréquentes sur Manuvie" : "Frequently asked questions about Manulife"}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                aria-expanded={open === i}
              >
                <span style={{ fontSize: "15px", fontWeight: 700, color: "var(--dark)", lineHeight: 1.4 }}>{faq.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" aria-hidden style={{ flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              {open === i && (
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.75, paddingBottom: "20px", margin: 0 }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
