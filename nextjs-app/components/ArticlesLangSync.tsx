"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLang } from "@/lib/i18n";

// Automatically syncs the articles page with the current language
// When lang=FR → adds ?lang=fr to URL → server fetches FR blogspot
// When lang=EN → removes ?lang=fr → server fetches EN blogspot
export default function ArticlesLangSync() {
  const { lang } = useLang();
  const router    = useRouter();
  const params    = useSearchParams();
  const urlLang   = params.get("lang");

  useEffect(() => {
    if (lang === "fr" && urlLang !== "fr") {
      router.replace("/articles?lang=fr");
    } else if (lang === "en" && urlLang === "fr") {
      router.replace("/articles");
    }
  }, [lang, urlLang, router]);

  return null;
}
