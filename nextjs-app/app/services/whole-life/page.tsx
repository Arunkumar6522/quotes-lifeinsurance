import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole Life Insurance Canada | Permanent Coverage | Quotes Life Insurance",
  description: "Whole life insurance with guaranteed cash value growth. Compare quotes from 20+ Canadian carriers. Permanent coverage for families in Montreal and Quebec.",
};

const data = {
  title: "Whole Life Insurance",
  titleFr: "Assurance vie entière",
  tagline: "Lifetime protection that never expires, with guaranteed growing cash value.",
  taglineFr: "Protection permanente qui n'expire jamais, avec une valeur de rachat garantie en croissance.",
  videoId: "1zdZoK6fj_4",
  icon: "🏦",
  color: "#00a759",
  description: "Whole life insurance provides permanent coverage that lasts your entire life, with premiums that never increase. A portion of each premium builds guaranteed cash value that grows tax-deferred. This cash value can be accessed during your lifetime through policy loans or withdrawals, making whole life both protection and a financial asset.",
  descriptionFr: "L'assurance vie entière offre une couverture permanente qui dure toute votre vie, avec des primes qui n'augmentent jamais. Une partie de chaque prime constitue une valeur de rachat garantie qui croît à l'abri de l'impôt. Cette valeur peut être accessible via des avances sur police pour toute raison.",
  highlights: [
    { heading: "Guaranteed for life", text: "Your coverage and premiums are locked in from day one. As long as you pay premiums, your policy cannot be cancelled and your rates cannot increase." },
    { heading: "Cash value accumulation", text: "A portion of every premium builds a guaranteed cash value inside the policy. This grows tax-deferred and can be accessed via policy loans for any purpose." },
    { heading: "Participating dividends", text: "Participating whole life policies may pay annual dividends based on company performance. These can purchase additional coverage, reduce premiums, or be taken as cash." },
    { heading: "Estate planning", text: "Whole life is ideal for estate planning. The death benefit passes to beneficiaries tax-free, can cover estate taxes, and provides a guaranteed inheritance." },
  ],
  highlightsFr: [
    { heading: "Garantie à vie", text: "Votre couverture et vos primes sont établies dès le premier jour. Tant que vous payez vos primes conformément aux modalités de votre police, votre couverture demeure en vigueur et vos primes ne peuvent pas être augmentées." },
    { heading: "Accumulation de la valeur de rachat", text: "Une partie de chaque prime contribue à l'accumulation d'une valeur de rachat garantie. Celle-ci peut croître à l'abri de l'impôt et être accessible sous forme d'avance sur police, selon les modalités de votre contrat." },
    { heading: "Dividendes participatifs", text: "Les polices participantes peuvent donner droit à des dividendes annuels, selon la performance financière de la compagnie d'assurance. Ces dividendes peuvent notamment servir à souscrire une couverture supplémentaire ou à réduire les primes." },
    { heading: "Planification successorale", text: "L'assurance vie entière peut jouer un rôle important dans la planification successorale. La prestation de décès est versée aux bénéficiaires généralement en franchise d'impôt, sous réserve des règles fiscales applicables." },
  ],
  bestFor: [
    "Those wanting guaranteed lifetime coverage",
    "Parents and grandparents building legacy",
    "High-net-worth individuals for estate planning",
    "Business owners for buy-sell agreements",
    "Anyone wanting a conservative, guaranteed asset",
  ],
  bestForFr: [
    "Ceux qui recherchent une couverture permanente et garantie",
    "Les parents et les grands-parents qui souhaitent bâtir un héritage pour leurs proches",
    "Les personnes fortunées qui souhaitent intégrer l'assurance vie à leur planification successorale",
    "Les propriétaires d'entreprise qui souhaitent mettre en place une convention d'achat-vente",
    "Toute personne à la recherche d'un actif conservateur offrant des garanties",
  ],
  faqs: [
    { q: "Why is whole life more expensive than term?", a: "Whole life premiums are higher because coverage is permanent, cash value is guaranteed to grow, and the insurer will definitely pay a claim." },
    { q: "Can I access the cash value?", a: "Yes. You can take a policy loan against your cash value at any time, tax-free, with no credit check." },
    { q: "What happens if I stop paying premiums?", a: "Options include: using cash value to pay premiums, reducing coverage to a paid-up amount, or surrendering for the cash value." },
    { q: "Is whole life insurance worth it?", a: "For the right client, yes. It's a permanent, guaranteed, tax-advantaged financial tool." },
    { q: "How do participating dividends work?", a: "If you own a participating policy, the insurance company shares profits with policyholders through dividends." },
  ],
  faqsFr: [
    { q: "Pourquoi l'assurance vie entière est-elle plus chère que l'assurance temporaire ?", a: "Les primes sont plus élevées parce que la couverture est permanente, que la valeur de rachat peut être garantie et que la police est conçue pour couvrir toute la vie." },
    { q: "Puis-je accéder à la valeur de rachat ?", a: "Oui. Vous pouvez généralement accéder à la valeur de rachat au moyen d'une avance sur police, selon les modalités de votre contrat." },
    { q: "Que se passe-t-il si j'arrête de payer les primes ?", a: "Selon votre police, vous pourriez utiliser la valeur de rachat pour payer les primes, réduire la couverture avec une police libérée ou racheter la police." },
    { q: "L'assurance vie entière en vaut-elle la peine ?", a: "Pour le bon client, oui. C'est un outil financier permanent qui offre une protection garantie et peut présenter des avantages fiscaux." },
    { q: "Comment fonctionnent les dividendes participatifs ?", a: "Les polices participantes peuvent verser des dividendes selon les résultats de la compagnie d'assurance. Les dividendes ne sont pas garantis." },
  ],
};

export default function WholeLifePage() {
  return <ServicePageLayout data={data} />;
}
