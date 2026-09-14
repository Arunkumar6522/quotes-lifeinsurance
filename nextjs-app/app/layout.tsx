import type { Metadata } from "next";
import { Nunito, Sora } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quotes Life Insurance — Free Life Insurance Quotes in Canada",
  description:
    "Quotes Life Insurance compares 20+ top Canadian carriers — Manulife, Desjardins, Foresters and more — to find you the best coverage at the lowest rate. AMF Licensed #179631.",
  keywords:
    "life insurance Canada, term life insurance, whole life insurance, critical illness, disability insurance, AMF licensed broker, Montreal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${sora.variable}`}>
      <body style={{ fontFamily: "var(--font-nunito), system-ui, sans-serif", minHeight: "100vh" }}>
        <LangProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LangProvider>
      </body>
    </html>
  );
}
