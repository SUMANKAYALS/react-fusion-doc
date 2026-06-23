import { MetadataRoute } from 'next'
import { getDocSlugs } from '@/lib/docs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://react-fusion.suamnkayal.com'

  // Get all docs slugs
  const docsSlugs = getDocSlugs()
  const docsUrls = docsSlugs.map((slug) => ({
    url: `${baseUrl}/docs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/showcase`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...docsUrls,
  ]
}
