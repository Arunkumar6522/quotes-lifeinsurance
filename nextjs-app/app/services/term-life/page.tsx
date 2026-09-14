import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Term Life Insurance in Canada — Quotes Life Insurance",
  description: "Compare term life insurance quotes from 20+ top Canadian carriers. Affordable coverage for 10, 20 or 30 years. Free advice from AMF licensed brokers.",
};

const data = {
  title: "Term Life Insurance",
  titleFr: "Assurance vie temporaire",
  tagline: "The most affordable way to protect your family during the years they need it most.",
  icon: "📋",
  color: "#63a066",
  description: "Term life insurance provides pure death benefit coverage for a fixed period — typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive the tax-free death benefit. It's the simplest, most cost-effective form of life insurance and is ideal for families who need large coverage amounts at low premiums.",
  highlights: [
    {
      heading: "Lowest premiums for the highest coverage",
      text: "Term life gives you the most coverage per dollar. A healthy 35-year-old can secure $500,000 of coverage for as little as $25–$40/month.",
    },
    {
      heading: "Flexible term lengths",
      text: "Choose a term that matches your needs — 10, 15, 20, 25, or 30 years. Most families align the term with their mortgage length or until children are financially independent.",
    },
    {
      heading: "Convertible to permanent coverage",
      text: "Most term policies can be converted to whole or universal life without a new medical exam — giving you flexibility as your needs change.",
    },
    {
      heading: "Rates locked in at purchase",
      text: "Your premium is fixed for the entire term. Buy when you're young and healthy to lock in the lowest possible rate for decades.",
    },
  ],
  bestFor: [
    "Young families with a mortgage",
    "Parents with dependent children",
    "Income replacement",
    "Business loan protection",
    "First-time life insurance buyers",
  ],
  faqs: [
    {
      q: "What happens when my term ends?",
      a: "At the end of your term, you can renew (usually at a higher rate), convert to permanent insurance, or let the policy lapse. If you're still healthy, you can apply for a new term policy at competitive rates.",
    },
    {
      q: "How much term life insurance do I need?",
      a: "A common rule is 10–12x your annual income. Factor in your mortgage balance, outstanding debts, and how many years your family would need income replacement.",
    },
    {
      q: "Can I get term life insurance without a medical exam?",
      a: "Yes — some carriers like Canada Protection Plan offer no-medical term policies. These carry higher premiums but are ideal if you have health conditions.",
    },
    {
      q: "Is the death benefit taxable in Canada?",
      a: "No. Life insurance death benefits paid to a named beneficiary are completely tax-free in Canada.",
    },
    {
      q: "What carriers do you compare for term life?",
      a: "We compare Manulife, Desjardins, iA Financial, Foresters, Canada Protection Plan, Empire Life, Humania, Assumption Life, and more — over 20 carriers in total.",
    },
  ],
};

export default function TermLifePage() {
  return <ServicePageLayout data={data} />;
}
