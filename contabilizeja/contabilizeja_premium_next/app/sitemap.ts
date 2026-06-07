import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.contabilizeja.com.br";
  return [
    "",
    "/abrir-empresa",
    "/contabilidade-online",
    "/area-cliente",
    "/google-ads/abrir-empresa",
    "/google-ads/contabilidade-online",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
