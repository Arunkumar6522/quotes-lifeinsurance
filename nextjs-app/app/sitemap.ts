import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quotes-lifeinsurance.com";
  const now = new Date();

  return [
    { url: baseUrl,                                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/about`,                         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/careers`,                       lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${baseUrl}/articles`,                      lastModified: now, changeFrequency: "daily",   priority: 0.8 },
    { url: `${baseUrl}/services/term-life`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/whole-life`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/universal-life`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/critical-illness`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/disability`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/quote-calculator`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`,                lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/terms`,                         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/manulife`,                      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/foresters`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
