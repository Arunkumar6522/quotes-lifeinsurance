import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Quotes Life Insurance",
  description: "Terms of Service for Quotes Life Insurance (DCW Financial Inc.). Governing your use of https://quotes-lifeinsurance.com/.",
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

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <div style={{ background: "var(--dark)" }} className="py-16 text-center">
          <p className="text-sm font-semibold mb-2" style={{ color: "var(--green)" }}>Home / Terms of Service</p>
          <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: October 21, 2025</p>
        </div>

        <section className="section-padding bg-white">
          <div className="container max-w-3xl">

            <div className="rounded-xl p-6 mb-10 text-sm leading-relaxed"
              style={{ background: "var(--bg-soft)", borderLeft: "4px solid var(--green)", color: "var(--dark)" }}>
              These Terms of Service govern your use of the website located at{" "}
              <a href="https://quotes-lifeinsurance.com" className="underline" style={{ color: "var(--green)" }}>
                https://quotes-lifeinsurance.com/
              </a>{" "}
              and any related services provided by <strong>DCW Financial Inc.</strong> By accessing this website, you agree to abide by these Terms of Service.
            </div>

            <Section title="Limitations of Use">
              <p>By using this website, you warrant that you will not:</p>
              <ul className="list-disc pl-5 space-y-1">
                {[
                  "Modify, copy, or reverse engineer any materials on this website",
                  "Remove any copyright or proprietary notations",
                  "Transfer materials to another person or mirror them on any server",
                  "Use this website in a way that abuses or disrupts our networks",
                  "Use this website to transmit harassing, fraudulent, or unlawful material",
                  "Use this website in violation of any applicable laws or regulations",
                  "Send unauthorized advertising or spam via this website",
                  "Harvest or collect user data without consent",
                  "Infringe the privacy or intellectual property rights of third parties",
                ].map((i) => <li key={i}>{i}</li>)}
              </ul>
            </Section>

            <Section title="Intellectual Property">
              <p>The intellectual property in the materials contained on this website are owned by or licensed to DCW Financial Inc. and are protected by applicable copyright and trademark law. We grant users permission to download one copy of the materials for personal, non-commercial transitory use.</p>
              <p>This constitutes the grant of a license, not a transfer of title. This license shall automatically terminate if you violate any of these restrictions.</p>
            </Section>

            <Section title="User-Generated Content">
              <p>You retain your intellectual property ownership rights over content you submit to us for publication. We require a non-exclusive, royalty-free, transferable, worldwide license to use, distribute, and display your content in a manner consistent with your privacy preferences and our Privacy Policy.</p>
            </Section>

            <Section title="Liability">
              <p>Our website and the materials on our website are provided on an &ldquo;as is&rdquo; basis. To the extent permitted by law, DCW Financial Inc. makes no warranties, expressed or implied.</p>
              <p>In no event shall DCW Financial Inc. or its suppliers be liable for any consequential loss suffered or incurred by you or any third party arising from the use or inability to use this website.</p>
            </Section>

            <Section title="Accuracy of Materials">
              <p>The materials appearing on our website are for general information purposes only. DCW Financial Inc. does not warrant or make any representations concerning the accuracy or reliability of these materials.</p>
            </Section>

            <Section title="Links">
              <p>DCW Financial Inc. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DCW Financial Inc.</p>
            </Section>

            <Section title="Right to Terminate">
              <p>We may suspend or terminate your right to use our website immediately upon written notice to you for any breach of these Terms of Service.</p>
            </Section>

            <Section title="Governing Law">
              <p>These Terms of Service are governed by and construed in accordance with the laws of <strong>Canada</strong>. You irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </Section>

            <Section title="Contact Us">
              <div className="rounded-xl p-5" style={{ background: "var(--bg-soft)", border: "1px solid #d1e8d4" }}>
                <p><strong>DCW Financial Inc. — Quotes Life Insurance</strong></p>
                <p>✉️ <a href="mailto:info@quotes-lifeinsurance.com" className="underline" style={{ color: "var(--green)" }}>info@quotes-lifeinsurance.com</a></p>
                <p>📞 <a href="tel:+15146620403" className="underline" style={{ color: "var(--green)" }}>514-662-0403</a> <em className="text-gray-400 text-xs">(New life insurance quotes only)</em></p>
              </div>
            </Section>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
