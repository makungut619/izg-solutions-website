import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/gate"],
    },
    sitemap: "https://www.izgsolutions.co.za/sitemap.xml",
  };
}
