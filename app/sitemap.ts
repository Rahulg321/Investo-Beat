import { createClient } from "@/prismicio";
import { MetadataRoute } from "next";

export default async function sitemap() {
  const client = createClient();
  const baseUrl = "https://investobeat.com";

  const blogs = await client.getAllByType("blogpost");

  const blogsURLS =
    blogs.map((member) => ({
      url: `${baseUrl}/blogs/${member.data.title}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...blogsURLS,
  ];
}
