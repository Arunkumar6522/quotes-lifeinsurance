import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole Life Insurance in Canada | Quotes Life Insurance",
  description: "Lifetime coverage with guaranteed cash value growth. Compare whole life quotes from 20+ carriers. AMF licensed brokers.",
};

const data = {
  title: "Whole Life Insurance",
  titleFr: "Assurance vie entière",
  tagline: "Lifetime protection that never expires, with guaranteed growing cash value.",
  taglineFr: "Protection permanente qui n'expire jamais, avec une valeur de rachat garantie en croissance.",
  icon: "🏦",
  color: "#4aa461",
  description: "Whole life insurance provides permanent coverage that lasts your entire life, with premiums that never increase. A portion of each premium builds guaranteed cash value that grows tax-deferred. This cash value can be accessed during your lifetime through policy loans or withdrawals, making whole life both protection and a financial asset.",
  descriptionFr: "L'assurance vie entière offre une couverture permanente qui dure toute votre vie, avec des primes qui n'augmentent jamais. Une partie de chaque prime constitue une valeur de rachat garantie qui croît à l'abri de l'impôt. Cette valeur peut être accessible via des avances sur police pour toute raison.",
  highlights: [
    { heading: "Guaranteed for life", text: "Your coverage and premiums are locked in from day one. As long as you pay premiums, your policy cannot be cancelled and your rates cannot increase." },
    { heading: "Cash value accumulation", text: "A portion of every premium builds a guaranteed cash value inside the policy. This grows tax-deferred and can be accessed via policy loans for any purpose." },
    { heading: "Participating dividends", text: "Participating whole life policies may pay annual dividends based on company performance. These can purchase additional coverage, reduce premiums, or be taken as cash." },
    { heading: "Estate planning", text: "Whole life is ideal for estate planning. The death benefit passes to beneficiaries tax-free, can cover estate taxes, and provides a guaranteed inheritance." },
  ],
  highlightsFr: [
    { heading: "Garanti à vie", text: "Votre couverture et vos primes sont fixées dès le premier jour. Tant que vous payez vos primes, votre police ne peut être annulée et vos tarifs ne peuvent pas augmenter." },
    { heading: "Accumulation de valeur de rachat", text: "Une partie de chaque prime constitue une valeur de rachat garantie. Celle-ci croît à l'abri de l'impôt et peut être accessible via des avances sur police." },
    { heading: "Dividendes participatifs", text: "Les polices participantes peuvent verser des dividendes annuels selon la performance de la compagnie. Ils peuvent acheter une couverture supplémentaire ou réduire les primes." },
    { heading: "Planification successorale", text: "L'assurance vie entière est idéale pour la planification successorale. La prestation est versée aux bénéficiaires en franchise d'impôt." },
  ],
  bestFor: [
    "Those wanting guaranteed lifetime coverage",
    "Parents and grandparents building legacy",
    "High-net-worth individuals for estate planning",
    "Business owners for buy-sell agreements",
    "Anyone wanting a conservative, guaranteed asset",
  ],
  bestForFr: [
    "Ceux qui veulent une couverture permanente garantie",
    "Parents et grands-parents qui construisent un héritage",
    "Personnes fortunées pour la planification successorale",
    "Propriétaires d'entreprise pour accords d'achat-vente",
    "Toute personne souhaitant un actif conservateur et garanti",
  ],
  faqs: [
    { q: "Why is whole life more expensive than term?", a: "Whole life premiums are higher because coverage is permanent, cash value is guaranteed to grow, and the insurer will definitely pay a claim." },
    { q: "Can I access the cash value?", a: "Yes. You can take a policy loan against your cash value at any time, tax-free, with no credit check." },
    { q: "What happens if I stop paying premiums?", a: "Options include: using cash value to pay premiums, reducing coverage to a paid-up amount, or surrendering for the cash value." },
    { q: "Is whole life insurance worth it?", a: "For the right client, yes. It's a permanent, guaranteed, tax-advantaged financial tool." },
    { q: "How do participating dividends work?", a: "If you own a participating policy, the insurance company shares profits with policyholders through dividends." },
  ],
  faqsFr: [
    { q: "Pourquoi l'assurance vie entière est-elle plus chère que l'assurance temporaire ?", a: "Les primes sont plus élevées car la couverture est permanente, la valeur de rachat est garantie de croître, et l'assureur paiera certainement une réclamation." },
    { q: "Puis-je accéder à la valeur de rachat ?", a: "Oui. Vous pouvez prendre une avance sur police sur votre valeur de rachat à tout moment, sans impôt et sans vérification de crédit." },
    { q: "Que se passe-t-il si j'arrête de payer les primes ?", a: "Options : utiliser la valeur de rachat pour payer les primes, réduire la couverture à une police libérée, ou racheter la police." },
    { q: "L'assurance vie entière en vaut-elle la peine ?", a: "Pour le bon client, oui. C'est un outil financier permanent, garanti et avantageux sur le plan fiscal." },
    { q: "Comment fonctionnent les dividendes participatifs ?", a: "Si vous possédez une police participante, la compagnie d'assurance partage les bénéfices avec les titulaires de polices sous forme de dividendes." },
  ],
};

export default function WholeLifePage() {
  return <ServicePageLayout data={data} />;
}
