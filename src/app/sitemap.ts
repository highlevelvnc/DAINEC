import type { MetadataRoute } from "next";

const SITE = "https://dainec.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/#servicos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/#processo`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/#projetos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/#contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
