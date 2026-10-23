import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rmibpo.com";
  const now = new Date("2026-10-23");

  const staticRoutes = [
    "",
    "/about",
    "/testimonials",
    "/faq",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
    "/legal/disclaimer",
    "/legal/acceptable-use",
    "/legal/gdpr",
    "/legal/copyright",
    "/legal/accessibility",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: (route === "" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/legal") ? 0.4 : 0.8,
  }));

  const serviceRoutes = servicesData.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
