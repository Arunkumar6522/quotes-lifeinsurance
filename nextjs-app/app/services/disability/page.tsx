import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disability Insurance in Canada — Quotes Life Insurance",
  description: "Protect your income with disability insurance. Replace up to 70% of your earnings if illness or injury stops you from working. AMF licensed brokers.",
};

const data = {
  title: "Disability Insurance",
  titleFr: "Assurance invalidité",
  tagline: "Your income is your most valuable asset — protect it.",
  icon: "🦽",
  color: "#4aa461",
  description: "Disability insurance replaces a portion of your income — typically 60–70% — if illness or injury prevents you from working. Statistics show 1 in 3 Canadians will experience a disability lasting 90 days or more before age 65. Yet most Canadians have no private disability coverage. Without income, even a few months off work can be financially devastating.",
  highlights: [
    {
      heading: "Replaces up to 70% of your income",
      text: "Monthly disability benefits are paid directly to you, tax-free (if you pay the premiums personally), giving you financial stability to cover your mortgage, bills, and daily living expenses.",
    },
    {
      heading: "Own-occupation vs. any-occupation definition",
      text: "The strongest policies use an 'own-occupation' definition — you're considered disabled if you can't perform your specific job, even if you could do another. Cheaper policies use 'any-occupation,' which is harder to qualify under.",
    },
    {
      heading: "Short-term and long-term options",
      text: "Short-term disability covers the first 3–6 months. Long-term disability kicks in after and can pay until age 65. We help you structure both for complete income protection.",
    },
    {
      heading: "Especially critical for the self-employed",
      text: "Employees may have group disability coverage. Self-employed professionals, entrepreneurs, and independent contractors have no safety net — private disability insurance is essential.",
    },
  ],
  bestFor: [
    "Self-employed professionals and entrepreneurs",
    "Single-income households",
    "High-income earners with significant fixed expenses",
    "Anyone without employer group disability benefits",
    "Those in physically demanding occupations",
  ],
  faqs: [
    {
      q: "Is disability insurance benefit taxable in Canada?",
      a: "If you pay the premiums personally with after-tax dollars, the benefit is tax-free. If your employer pays the premiums, the benefit is taxable. We'll help you structure the most tax-efficient arrangement.",
    },
    {
      q: "What is the elimination (waiting) period?",
      a: "The elimination period is how long you must be disabled before benefits start — typically 30, 60, 90, or 120 days. A longer elimination period lowers your premium. Most people choose 90 days.",
    },
    {
      q: "How long do disability benefits last?",
      a: "Benefit periods typically run 2 years, 5 years, or to age 65. A 'to age 65' benefit period is the most comprehensive — it protects your income for your entire working life.",
    },
    {
      q: "Can I get disability insurance if I have health issues?",
      a: "Yes, though some conditions may be excluded. Many carriers can cover you with an exclusion rider for pre-existing conditions. We'll find the best option given your health history.",
    },
    {
      q: "Do I need disability insurance if I have CPP/QPP disability?",
      a: "CPP/QPP disability benefits are very modest (averaging ~$1,100/month in 2025) and are difficult to qualify for. Private disability insurance provides substantially more income replacement.",
    },
  ],
};

export default function DisabilityPage() {
  return <ServicePageLayout data={data} />;
}
