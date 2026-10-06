import { getAllPosts } from "@/lib/blogger";
import BlogSectionHeader from "@/components/BlogSectionHeader";
import BlogSectionPosts from "@/components/BlogSectionPosts";

export default async function BlogSection() {
  // Fetch both EN and FR posts server-side — no CORS issues
  const [enPosts, frPosts] = await Promise.all([
    getAllPosts(6, false),
    getAllPosts(6, true),
  ]);

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="container">
        <BlogSectionHeader />
        {/* BlogSectionPosts is client — switches EN/FR based on lang toggle */}
        <BlogSectionPosts enPosts={enPosts} frPosts={frPosts} />
      </div>

      <style>{`
        .blog-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.09) !important; transform: translateY(-4px) !important; }
        .blog-card:hover .blog-thumb { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
