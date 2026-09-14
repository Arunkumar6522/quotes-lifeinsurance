import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universal Life Insurance in Canada — Quotes Life Insurance",
  description: "Flexible universal life insurance with tax-sheltered investment growth. Compare UL quotes from top Canadian carriers. AMF licensed brokers.",
};

const data = {
  title: "Universal Life Insurance",
  titleFr: "Assurance vie universelle",
  tagline: "Flexible permanent coverage with a tax-sheltered investment component.",
  icon: "🔄",
  color: "#63a066",
  description: "Universal life insurance combines permanent death benefit coverage with a tax-sheltered investment account. You can adjust your premiums and death benefit over time as your needs change, and the investment portion grows tax-deferred inside the policy. It's a powerful wealth-building tool for high-income Canadians who've maximized their RRSP and TFSA.",
  highlights: [
    {
      heading: "Flexible premiums and death benefit",
      text: "Unlike whole life, universal life lets you adjust how much you pay and the level of coverage you hold — within limits — as your financial situation evolves.",
    },
    {
      heading: "Tax-sheltered investment growth",
      text: "The investment account inside your policy grows completely tax-deferred. You can choose from a variety of investment options — from guaranteed GICs to equity index funds.",
    },
    {
      heading: "Access to accumulated funds",
      text: "You can withdraw or borrow from the policy's accumulated investment value. Strategic withdrawals can supplement retirement income with minimal tax impact.",
    },
    {
      heading: "Estate maximization tool",
      text: "UL policies can be used to pass significantly more wealth to heirs tax-efficiently, making them a core tool in sophisticated estate planning strategies.",
    },
  ],
  bestFor: [
    "High-income earners who've maxed RRSP & TFSA",
    "Business owners seeking tax-efficient growth",
    "Estate planning and wealth transfer",
    "Clients wanting investment + protection in one policy",
    "Long-term wealth accumulation strategies",
  ],
  faqs: [
    {
      q: "What is the difference between universal life and whole life?",
      a: "Both are permanent policies. Whole life has fixed premiums and guaranteed cash value. Universal life offers flexible premiums and links growth to investment options — higher potential but more complexity.",
    },
    {
      q: "Can I lose money in a universal life policy?",
      a: "If you choose market-linked investments and markets decline, your investment account can decrease. Many carriers offer guaranteed investment options within UL to avoid this risk.",
    },
    {
      q: "Is universal life insurance good for retirement planning?",
      a: "It can be a powerful supplement to registered accounts. After your RRSP and TFSA are maximized, UL offers another tax-sheltered growth vehicle with an added death benefit.",
    },
    {
      q: "What carriers offer universal life in Canada?",
      a: "We compare Manulife InnoVision, iA Financial Genus, Empire Life, and several other top Canadian UL products to find the best fit for your goals.",
    },
  ],
};

export default function UniversalLifePage() {
  return <ServicePageLayout data={data} />;
}
