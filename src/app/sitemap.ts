import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://tradehound.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/features",
    "/pricing",
    "/about",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/sms-policy",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
