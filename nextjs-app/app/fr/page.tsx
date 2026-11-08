"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/lib/i18n";

export default function FrenchEntryPage() {
  const { setLang } = useLang();
  const router = useRouter();

  useEffect(() => {
    // Force French language and save preference
    setLang("fr");
    localStorage.setItem("preferred-lang", "fr");
    // Redirect to homepage
    router.replace("/");
  }, [setLang, router]);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "var(--green)",
      color: "#fff",
      fontSize: "18px",
      fontWeight: 600,
    }}>
      Chargement en français...
    </div>
  );
}
