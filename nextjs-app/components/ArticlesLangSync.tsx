"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";

// Syncs the articles listing with the current language.
// Static export: FR articles live at /fr/articles/[slug], EN at /articles/[slug].
// The listing page (/articles) shows both languages via client-side toggle — no URL changes needed.
// This component only cleans up legacy ?lang=fr query params if they somehow appear.
export default function ArticlesLangSync() {
  const { lang } = useLang();
  const router   = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // If user lands on /articles with a stale ?lang=fr query param, strip it —
    // the client-side lang toggle in ArticlesContent handles FR display.
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.has("lang")) {
        url.searchParams.delete("lang");
        router.replace(url.pathname);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
