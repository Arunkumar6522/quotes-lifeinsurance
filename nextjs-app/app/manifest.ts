import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quotes Life Insurance",
    short_name: "Quotes Life",
    description: "Free life insurance quotes from 20+ top Canadian carriers. AMF Licensed.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00a759",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
