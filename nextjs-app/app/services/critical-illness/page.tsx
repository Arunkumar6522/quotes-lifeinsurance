import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Critical Illness Insurance in Canada | Quotes Life Insurance",
  description: "Tax-free lump sum if you're diagnosed with cancer, heart attack, stroke or 25+ conditions. Compare critical illness quotes. AMF licensed brokers.",
};

const data = {
  title: "Critical Illness Coverage",
  titleFr: "Couverture maladies graves",
  tagline: "A tax-free lump sum payment when you're diagnosed with a serious illness.",
  taglineFr: "Un versement forfaitaire non imposable lors du diagnostic d'une maladie grave.",
  icon: "🏥",
  color: "#00a759",
  description: "Critical illness insurance pays you a tax-free lump sum if you're diagnosed with a covered serious illness such as cancer, heart attack, or stroke. CI gives you a single large payment to use however you need: medical costs, travel for treatment, paying off your mortgage, or maintaining your lifestyle while you recover.",
  descriptionFr: "L'assurance maladies graves vous verse un montant forfaitaire non imposable si vous êtes diagnostiqué avec une maladie grave couverte comme le cancer, une crise cardiaque ou un AVC. CI vous donne un paiement unique à utiliser comme vous le souhaitez : frais médicaux, déplacement pour traitement ou remboursement de votre hypothèque.",
  highlights: [
    { heading: "Tax-free lump-sum payment", text: "Upon diagnosis and surviving the waiting period (usually 30 days), you receive a tax-free lump sum, typically $25,000 to $2,000,000, with no restrictions on how you spend it." },
    { heading: "Covers 25+ critical conditions", text: "Standard policies cover life-threatening cancer, heart attack, stroke, and coronary artery bypass. Enhanced policies cover 25+ conditions." },
    { heading: "Return of premium option", text: "Many carriers offer a return of premium rider. If you never make a claim, you get all your premiums back at a specified age or at death." },
    { heading: "Complements your health and life insurance", text: "Provincial health insurance covers treatment, but not your mortgage, lost income, or travel costs. CI fills this critical gap." },
  ],
  highlightsFr: [
    { heading: "Paiement forfaitaire non imposable", text: "Après le diagnostic et la survie à la période d'attente (généralement 30 jours), vous recevez un forfait non imposable, généralement de 25 000 $ à 2 000 000 $." },
    { heading: "Couvre 25+ maladies graves", text: "Les polices standard couvrent le cancer, la crise cardiaque, l'AVC et le pontage coronarien. Les polices améliorées couvrent 25+ conditions." },
    { heading: "Option de remboursement de primes", text: "De nombreux assureurs offrent un avenant de remboursement de primes. Si vous ne faites jamais de réclamation, vous récupérez toutes vos primes." },
    { heading: "Complète votre assurance santé et vie", text: "L'assurance maladie provinciale couvre les traitements, mais pas votre hypothèque, votre revenu perdu ou vos frais de déplacement. CI comble cette lacune." },
  ],
  bestFor: [
    "Anyone with a family history of cancer or heart disease",
    "Self-employed individuals without group benefits",
    "Parents wanting financial protection during illness",
    "People with high financial obligations (mortgage, business)",
    "Anyone who wants peace of mind beyond basic coverage",
  ],
  bestForFr: [
    "Toute personne avec des antécédents familiaux de cancer ou de maladie cardiaque",
    "Travailleurs autonomes sans avantages collectifs",
    "Parents souhaitant une protection financière en cas de maladie",
    "Personnes avec des obligations financières élevées (hypothèque, entreprise)",
    "Toute personne souhaitant une tranquillité d'esprit au-delà de la couverture de base",
  ],
  faqs: [
    { q: "What conditions are covered?", a: "Most policies cover: life-threatening cancer, heart attack, stroke, coronary artery bypass surgery, kidney failure, major organ transplant, blindness, deafness, paralysis, and more." },
    { q: "How is critical illness different from disability insurance?", a: "Disability insurance replaces your income monthly if you can't work. Critical illness pays a one-time lump sum upon diagnosis, regardless of whether you can work." },
    { q: "Is the critical illness benefit taxable?", a: "No. The lump sum benefit paid from a personally owned critical illness policy is completely tax-free in Canada." },
    { q: "What is the waiting period?", a: "Most policies require you to survive 30 days after diagnosis before the benefit is paid." },
    { q: "Can I get CI insurance if I have pre-existing conditions?", a: "It depends on the condition and carrier. Some carriers specialize in higher-risk applicants." },
  ],
  faqsFr: [
    { q: "Quelles maladies sont couvertes ?", a: "La plupart des polices couvrent : le cancer, la crise cardiaque, l'AVC, le pontage coronarien, l'insuffisance rénale, la transplantation d'organe majeur, la cécité, la surdité, la paralysie et plus." },
    { q: "En quoi l'assurance maladies graves diffère-t-elle de l'assurance invalidité ?", a: "L'assurance invalidité remplace votre revenu mensuel si vous ne pouvez pas travailler. L'assurance maladies graves verse un montant forfaitaire unique lors du diagnostic." },
    { q: "La prestation maladies graves est-elle imposable ?", a: "Non. Le montant forfaitaire versé par une police personnelle est entièrement non imposable au Canada." },
    { q: "Qu'est-ce que la période d'attente ?", a: "La plupart des polices exigent que vous surviviez 30 jours après le diagnostic avant que la prestation soit versée." },
    { q: "Puis-je obtenir une assurance MI si j'ai des conditions préexistantes ?", a: "Cela dépend de la condition et de l'assureur. Certains assureurs se spécialisent dans les demandeurs à risque plus élevé." },
  ],
};

export default function CriticalIllnessPage() {
  return <ServicePageLayout data={data} />;
}
