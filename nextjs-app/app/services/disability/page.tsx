import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disability Insurance in Canada | Quotes Life Insurance",
  description: "Protect your income if illness or injury prevents you from working. Compare disability insurance quotes from 20+ carriers. AMF licensed brokers.",
};

const data = {
  title: "Disability Insurance",
  titleFr: "Assurance invalidité",
  tagline: "Your income is your most valuable asset. Protect it.",
  taglineFr: "Votre revenu est votre atout le plus précieux. Protégez-le.",
  icon: "🛡️",
  color: "#4aa461",
  description: "Disability insurance replaces a portion of your income, typically 60–70%, if illness or injury prevents you from working. Statistics show 1 in 3 Canadians will experience a disability lasting 90 days or more before age 65.",
  descriptionFr: "L'assurance invalidité remplace une partie de votre revenu, généralement 60 à 70%, si une maladie ou une blessure vous empêche de travailler. Les statistiques montrent qu'1 Canadien sur 3 connaîtra une invalidité de 90 jours ou plus avant l'âge de 65 ans.",
  highlights: [
    { heading: "Own-occupation vs any-occupation", text: "The strongest policies use an 'own-occupation' definition. You're considered disabled if you can't perform your specific job, even if you could do another." },
    { heading: "Covers illness and injury", text: "Disability insurance covers both accidents and illnesses like cancer, heart disease, mental health conditions, and musculoskeletal disorders." },
    { heading: "Essential for self-employed and professionals", text: "Employees may have group disability coverage. Self-employed professionals and independent contractors have no safety net. Private disability insurance is essential." },
    { heading: "Tax-free benefits", text: "If you pay your own premiums with after-tax dollars, your disability benefits are received completely tax-free." },
  ],
  highlightsFr: [
    { heading: "Propre profession vs toute profession", text: "Les meilleures polices utilisent la définition 'propre profession'. Vous êtes considéré invalide si vous ne pouvez pas exercer votre emploi spécifique." },
    { heading: "Couvre maladie et blessure", text: "L'assurance invalidité couvre les accidents et les maladies comme le cancer, les maladies cardiaques, les troubles de santé mentale et musculosquelettiques." },
    { heading: "Essentielle pour les travailleurs autonomes", text: "Les professionnels indépendants n'ont pas de filet de sécurité. L'assurance invalidité privée est essentielle." },
    { heading: "Prestations non imposables", text: "Si vous payez vos primes avec des dollars après impôt, vos prestations d'invalidité sont reçues entièrement en franchise d'impôt." },
  ],
  bestFor: [
    "Self-employed professionals and business owners",
    "Anyone whose family depends on their income",
    "Employees with inadequate group coverage",
    "High-income earners with significant financial obligations",
    "Anyone who can't afford to go months without income",
  ],
  bestForFr: [
    "Professionnels autonomes et propriétaires d'entreprise",
    "Toute personne dont la famille dépend de son revenu",
    "Employés avec une couverture collective insuffisante",
    "Personnes à revenus élevés avec des obligations financières importantes",
    "Toute personne qui ne peut se permettre de passer des mois sans revenu",
  ],
  faqs: [
    { q: "What is the elimination period?", a: "The elimination period is how long you must be disabled before benefits start, typically 30, 60, 90, or 120 days." },
    { q: "How long do benefits last?", a: "Benefit periods typically run 2 years, 5 years, or to age 65." },
    { q: "Can I get disability insurance if I have health issues?", a: "Yes, many carriers offer coverage with exclusions or rated premiums for pre-existing conditions." },
    { q: "Is my group disability coverage enough?", a: "Often no. Group plans typically cover only 60% of base salary, use restrictive definitions, and benefits may be taxable." },
    { q: "How much disability coverage can I get?", a: "Insurers typically limit coverage to 60-70% of your gross income from all sources." },
  ],
  faqsFr: [
    { q: "Qu'est-ce que le délai de carence ?", a: "Le délai de carence est la durée pendant laquelle vous devez être invalide avant que les prestations commencent, généralement 30, 60, 90 ou 120 jours." },
    { q: "Combien de temps durent les prestations ?", a: "Les périodes de prestations durent généralement 2 ans, 5 ans, ou jusqu'à 65 ans." },
    { q: "Puis-je obtenir une assurance invalidité si j'ai des problèmes de santé ?", a: "Oui, de nombreux assureurs offrent une couverture avec des exclusions ou des primes majorées pour les conditions préexistantes." },
    { q: "Ma couverture collective est-elle suffisante ?", a: "Souvent non. Les régimes collectifs couvrent généralement seulement 60% du salaire de base et les prestations peuvent être imposables." },
    { q: "Quelle couverture invalidité puis-je obtenir ?", a: "Les assureurs limitent généralement la couverture à 60-70% de votre revenu brut de toutes sources." },
  ],
};

export default function DisabilityPage() {
  return <ServicePageLayout data={data} />;
}
