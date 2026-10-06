import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticlesHero from "@/components/ArticlesHero";
import ArticlesContent from "@/components/ArticlesContent";
import { getAllPosts } from "@/lib/blogger";
import type { Metadata } from "next";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Insurance Tips & News | Quotes Life Insurance Articles",
  description: "Expert life insurance tips, guides, and news from Quotes Life Insurance.",
};

export default async function ArticlesPage() {
  // Fetch both EN and FR posts server-side — no CORS issues
  const [enPosts, frPosts] = await Promise.all([
    getAllPosts(18, false),
    getAllPosts(18, true),
  ]);

  return (
    <>
      <Header />
      <main>
        <ArticlesHero />
        {/* ArticlesContent is client — shows FR or EN posts based on lang toggle */}
        <ArticlesContent enPosts={enPosts} frPosts={frPosts} />
      </main>
      <Footer />
    </>
  );
}
