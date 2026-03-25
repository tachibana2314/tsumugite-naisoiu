import { projects } from "@/lib/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tsumugite-naisoudesign.com";
  
  // Base pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Project pages
  const projectRoutes = projects.map((project) => {
    // Convert date string to Date object (assuming format is YYYY/MM)
    const dateParts = project.date.split('/');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // JS months are 0-indexed
    const projectDate = new Date(year, month);
    
    return {
      url: `${baseUrl}/works/${project.id}`,
      lastModified: projectDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [...routes, ...projectRoutes];
}