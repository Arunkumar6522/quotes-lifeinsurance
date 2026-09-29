import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universal Life Insurance in Canada | Quotes Life Insurance",
  description: "Flexible permanent coverage with tax-advantaged investing. Compare universal life quotes from 20+ carriers. AMF licensed brokers.",
};

const data = {
  title: "Universal Life Insurance",
  titleFr: "Assurance vie universelle",
  tagline: "Permanent protection with flexible premiums and tax-sheltered growth.",
  taglineFr: "Protection permanente avec primes flexibles et croissance à l'abri de l'impôt.",
  icon: "📈",
  color: "#00a759",
  description: "Universal life insurance combines permanent death benefit protection with a tax-advantaged investment account. It offers more flexibility than whole life: you can adjust your premiums and death benefit as your circumstances change.",
  descriptionFr: "L'assurance vie universelle combine une protection permanente avec un compte d'investissement avantageux sur le plan fiscal. Elle offre plus de flexibilité que la vie entière : vous pouvez ajuster vos primes et votre prestation de décès selon vos besoins.",
  highlights: [
    { heading: "Flexible premiums", text: "Unlike whole life, universal life lets you adjust how much you pay and the level of coverage you hold as your financial situation evolves." },
    { heading: "Tax-advantaged investing", text: "The investment account inside your policy grows completely tax-deferred. Choose from guaranteed GICs to equity index funds." },
    { heading: "Permanent coverage", text: "Coverage lasts your entire life as long as sufficient premium is paid. Your beneficiaries receive the death benefit tax-free." },
    { heading: "Estate planning tool", text: "Universal life is commonly used to create a tax-free legacy, cover estate taxes, or fund charitable giving." },
  ],
  highlightsFr: [
    { heading: "Primes flexibles", text: "Contrairement à la vie entière, la vie universelle vous permet d'ajuster vos paiements et votre niveau de couverture selon l'évolution de votre situation financière." },
    { heading: "Investissement avantageux sur le plan fiscal", text: "Le compte d'investissement dans votre police croît entièrement à l'abri de l'impôt. Choisissez parmi des CPG garantis ou des fonds indiciels." },
    { heading: "Couverture permanente", text: "La couverture dure toute votre vie tant que la prime suffisante est payée. Vos bénéficiaires reçoivent la prestation en franchise d'impôt." },
    { heading: "Outil de planification successorale", text: "La vie universelle est couramment utilisée pour créer un héritage non imposable ou couvrir les impôts successoraux." },
  ],
  bestFor: [
    "High-income earners seeking tax-advantaged investing",
    "Business owners for corporate-owned insurance strategies",
    "Those who have maxed out RRSP and TFSA room",
    "People wanting permanent coverage with investment flexibility",
    "Estate planning and wealth transfer",
  ],
  bestForFr: [
    "Personnes à revenus élevés cherchant des investissements avantageux fiscalement",
    "Propriétaires d'entreprise pour des stratégies d'assurance d'entreprise",
    "Ceux qui ont maximisé leur REER et leur CELI",
    "Personnes souhaitant une couverture permanente avec flexibilité d'investissement",
    "Planification successorale et transfert de patrimoine",
  ],
  faqs: [
    { q: "What's the difference between universal life and whole life?", a: "Both are permanent policies. Whole life has fixed premiums and guaranteed cash value. Universal life offers flexible premiums and links growth to investment options." },
    { q: "Can I lose money in a universal life policy?", a: "If you choose market-linked investments and markets decline, yes. However, you can choose guaranteed interest options for stability." },
    { q: "What are the tax benefits?", a: "Investment growth is tax-sheltered. Death benefit is tax-free to beneficiaries. You can also access cash value via policy loans without triggering immediate taxes." },
    { q: "Is universal life a good investment?", a: "It's primarily insurance with an investment component. Best for those who need permanent coverage AND want tax-sheltered growth." },
    { q: "How much flexibility do I really have?", a: "You can increase or decrease premiums, adjust the death benefit, change investment options, and access cash value within policy limits." },
  ],
  faqsFr: [
    { q: "Quelle est la différence entre la vie universelle et la vie entière ?", a: "Les deux sont des polices permanentes. La vie entière a des primes fixes et une valeur de rachat garantie. La vie universelle offre des primes flexibles liées à des options d'investissement." },
    { q: "Puis-je perdre de l'argent dans une police vie universelle ?", a: "Si vous choisissez des investissements liés au marché et que les marchés baissent, oui. Cependant, vous pouvez choisir des options à intérêt garanti pour la stabilité." },
    { q: "Quels sont les avantages fiscaux ?", a: "La croissance des investissements est à l'abri de l'impôt. La prestation de décès est en franchise d'impôt pour les bénéficiaires." },
    { q: "La vie universelle est-elle un bon investissement ?", a: "C'est principalement une assurance avec une composante d'investissement. Idéale pour ceux qui ont besoin d'une couverture permanente ET souhaitent une croissance à l'abri de l'impôt." },
    { q: "Quelle flexibilité ai-je vraiment ?", a: "Vous pouvez augmenter ou diminuer les primes, ajuster la prestation de décès, changer les options d'investissement et accéder à la valeur de rachat dans les limites de la police." },
  ],
};

export default function UniversalLifePage() {
  return <ServicePageLayout data={data} />;
}
