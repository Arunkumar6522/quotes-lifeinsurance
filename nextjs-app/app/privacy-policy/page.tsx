import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Quotes Life Insurance",
  description: "Privacy policy for Quotes Life Insurance (DCW Financial Inc.). How we collect, use, and protect your personal information.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-3 pb-2 relative"
        style={{ color: "var(--dark)", borderBottom: "2px solid #f0f0f0" }}>
        <span className="absolute bottom-[-2px] left-0 w-10 h-0.5" style={{ background: "var(--green)" }} />
        {title}
      </h2>
      <div className="text-gray-500 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <div style={{ background: "var(--dark)" }} className="py-16 text-center">
          <p className="text-sm font-semibold mb-2" style={{ color: "var(--green)" }}>Home / Privacy Policy</p>
          <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-2 text-sm">Effective: October 21, 2025 · Last updated: October 21, 2025</p>
        </div>

        <section className="section-padding bg-white">
          <div className="container max-w-3xl">

            {/* Intro */}
            <div className="rounded-xl p-6 mb-10 text-sm leading-relaxed"
              style={{ background: "var(--bg-soft)", borderLeft: "4px solid var(--green)", color: "var(--dark)" }}>
              Your privacy is important to us. It is <strong>DCW Financial Inc.</strong>&apos;s policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website{" "}
              <a href="https://quotes-lifeinsurance.com" className="underline" style={{ color: "var(--green)" }}>
                https://quotes-lifeinsurance.com/
              </a>, and other sites we own and operate.
            </div>

            <Section title="Information We Collect">
              <p>Information we collect falls into one of two categories: <strong>&ldquo;voluntarily provided&rdquo;</strong> and <strong>&ldquo;automatically collected&rdquo;</strong> information.</p>
              <p>&ldquo;Voluntarily provided&rdquo; information refers to any information you knowingly and actively provide us when using or participating in any of our services and promotions.</p>
              <p>&ldquo;Automatically collected&rdquo; information refers to any information automatically sent by your devices in the course of accessing our products and services.</p>
            </Section>

            <Section title="Log Data">
              <p>When you visit our website, our servers may automatically log the standard data provided by your web browser — including your IP address, browser type and version, the pages you visit, the time and date of your visit, and the time spent on each page.</p>
            </Section>

            <Section title="Device Data">
              <p>We may automatically collect data about your device, such as:</p>
              <ul className="list-disc pl-5 space-y-1">
                {["Device type", "Operating system", "Unique device identifiers", "Device settings", "Geo-location data"].map((i) => <li key={i}>{i}</li>)}
              </ul>
            </Section>

            <Section title="Personal Information">
              <p>We may ask for personal information which may include one or more of the following:</p>
              <ul className="list-disc pl-5 space-y-1">
                {["Name", "Email", "Date of birth", "Phone / mobile number", "Home / mailing address"].map((i) => <li key={i}>{i}</li>)}
              </ul>
            </Section>

            <Section title="Collection and Use of Information">
              <p>We may collect, hold, use, and disclose information for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                {[
                  "To provide you with our platform's core features and services",
                  "To enable you to customize or personalize your experience",
                  "To contact and communicate with you",
                  "For analytics, market research, and business development",
                  "For advertising and marketing",
                  "To comply with our legal obligations",
                  "For security and fraud prevention",
                ].map((i) => <li key={i}>{i}</li>)}
              </ul>
            </Section>

            <Section title="Security of Your Personal Information">
              <p>When we collect and process personal information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.</p>
            </Section>

            <Section title="How Long We Keep Your Personal Information">
              <p>We keep your personal information only for as long as we need to. If your personal information is no longer required for its purpose, we will delete it or make it anonymous.</p>
            </Section>

            <Section title="Children's Privacy">
              <p>We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13.</p>
            </Section>

            <Section title="Disclosure of Personal Information to Third Parties">
              <p>We may disclose personal information to third-party service providers, our employees and contractors, and regulatory authorities as required by law.</p>
              <p>Third parties we currently use include: <strong>Google Analytics</strong>.</p>
            </Section>

            <Section title="International Transfers">
              <p>The personal information we collect is stored and/or processed in <strong>Canada</strong>, or where we or our partners maintain facilities.</p>
            </Section>

            <Section title="Your Rights">
              <ul className="list-disc pl-5 space-y-2">
                {[
                  { t: "Access", d: "You may request details of the personal information we hold about you." },
                  { t: "Correction", d: "You may request we correct inaccurate information." },
                  { t: "Complaints", d: "If you believe we have breached a data protection law, please contact us." },
                  { t: "Unsubscribe", d: "To opt out of marketing communications, contact us using the details below." },
                ].map((r) => (
                  <li key={r.t}><strong>{r.t}:</strong> {r.d}</li>
                ))}
              </ul>
            </Section>

            <Section title="Changes to This Policy">
              <p>At our discretion, we may change our privacy policy to reflect updates to our business processes or legislative changes. Changes will be posted at this URL.</p>
            </Section>

            <Section title="Contact Us">
              <div className="rounded-xl p-5" style={{ background: "var(--bg-soft)", border: "1px solid #d1e8d4" }}>
                <p><strong>DCW Financial Inc. — Quotes Life Insurance</strong></p>
                <p>✉️ <a href="mailto:info@quotes-lifeinsurance.com" className="underline" style={{ color: "var(--green)" }}>info@quotes-lifeinsurance.com</a></p>
                <p>📞 <a href="tel:+15146620403" className="underline" style={{ color: "var(--green)" }}>514-662-0403</a> <em className="text-gray-400 text-xs">(New life insurance quotes inquiry only)</em></p>
                <p className="mt-2"><strong>Business Hours:</strong> Mon–Fri 9AM–8PM EST · Sat 10AM–4PM EST</p>
              </div>
            </Section>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
