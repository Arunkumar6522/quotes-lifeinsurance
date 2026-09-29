import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Term Life Insurance in Canada | Quotes Life Insurance",
  description: "Compare term life insurance from 20+ Canadian carriers. Get the best rates for 10, 20, or 30-year term coverage. AMF licensed brokers.",
};

const data = {
  title: "Term Life Insurance",
  titleFr: "Assurance vie temporaire",
  tagline: "Maximum coverage at the lowest cost. Simple, straightforward protection.",
  taglineFr: "Couverture maximale au coût le plus bas. Protection simple et directe.",
  icon: "📋",
  color: "#00a759",
  description: "Term life insurance provides pure death benefit coverage for a fixed period, typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive the tax-free death benefit. It's the simplest, most cost-effective form of life insurance and is ideal for families who need large coverage amounts at low premiums.",
  descriptionFr: "L'assurance vie temporaire offre une couverture pure pour une période fixe, généralement 10, 20 ou 30 ans. Si vous décédez pendant le terme, vos bénéficiaires reçoivent la prestation de décès en franchise d'impôt. C'est la forme d'assurance vie la plus simple et la plus rentable.",
  highlights: [
    { heading: "Affordable coverage", text: "Term insurance is the most cost-effective way to get substantial coverage. A healthy 35-year-old can get $500,000 of 20-year term coverage for under $30/month." },
    { heading: "Choose your term length", text: "Choose a term that matches your needs: 10, 15, 20, 25, or 30 years. Most families align the term with their mortgage length." },
    { heading: "Convertible to permanent", text: "Most term policies can be converted to whole or universal life without a new medical exam. This gives you flexibility as your needs change." },
    { heading: "Level premiums", text: "Your premium stays the same for the entire term. No surprises, no increases. Lock in your rate while you're young and healthy." },
  ],
  highlightsFr: [
    { heading: "Couverture abordable", text: "L'assurance temporaire est le moyen le plus rentable d'obtenir une couverture importante. Un adulte en bonne santé de 35 ans peut obtenir 500 000 $ pour moins de 30 $/mois." },
    { heading: "Choisissez votre durée", text: "Choisissez une durée adaptée à vos besoins : 10, 15, 20, 25 ou 30 ans. La plupart des familles alignent la durée avec leur hypothèque." },
    { heading: "Convertible en police permanente", text: "La plupart des polices temporaires peuvent être converties en vie entière ou universelle sans nouvel examen médical." },
    { heading: "Primes nivelées", text: "Votre prime reste la même pendant toute la durée. Aucune surprise, aucune augmentation. Bloquez votre taux quand vous êtes jeune et en bonne santé." },
  ],
  bestFor: [
    "Young families with mortgages and children",
    "Anyone replacing income for dependents",
    "Business owners needing key-person coverage",
    "Those wanting maximum coverage at minimum cost",
    "People with temporary financial obligations",
  ],
  bestForFr: [
    "Jeunes familles avec hypothèques et enfants",
    "Toute personne remplaçant un revenu pour des dépendants",
    "Propriétaires d'entreprise nécessitant une couverture personne clé",
    "Ceux qui veulent une couverture maximale au coût minimal",
    "Personnes avec des obligations financières temporaires",
  ],
  faqs: [
    { q: "What happens when my term expires?", a: "You can renew annually at a higher rate, convert to permanent insurance, or let the policy lapse." },
    { q: "How much term insurance do I need?", a: "A common rule is 10-15x your annual income, plus outstanding debts. We'll help you calculate the right amount." },
    { q: "Can I get term insurance without a medical exam?", a: "Yes. Some carriers like Canada Protection Plan offer no-medical term policies." },
    { q: "Is term insurance better than whole life?", a: "It depends on your goals. Term is better for temporary needs and maximum coverage. Whole life is better for lifetime coverage." },
    { q: "Which insurance companies do you work with?", a: "We compare Manulife, Desjardins, iA Financial, Foresters, Canada Protection Plan, Empire Life, Humania, and more." },
  ],
  faqsFr: [
    { q: "Que se passe-t-il à l'expiration de mon terme ?", a: "Vous pouvez renouveler annuellement à un taux plus élevé, convertir en assurance permanente, ou laisser la police expirer." },
    { q: "De combien d'assurance temporaire ai-je besoin ?", a: "Une règle courante est 10 à 15 fois votre revenu annuel, plus les dettes en cours. Nous vous aiderons à calculer le bon montant." },
    { q: "Puis-je obtenir une assurance temporaire sans examen médical ?", a: "Oui. Certains assureurs comme Canada Protection Plan offrent des polices sans examen médical." },
    { q: "L'assurance temporaire est-elle meilleure que la vie entière ?", a: "Cela dépend de vos objectifs. Le temporaire est mieux pour les besoins temporaires et la couverture maximale." },
    { q: "Avec quelles compagnies d'assurance travaillez-vous ?", a: "Nous comparons Manuvie, Desjardins, iA Financière, Foresters, Canada Protection Plan, Empire Vie, Humania et plus." },
  ],
};

export default function TermLifePage() {
  return <ServicePageLayout data={data} />;
}
