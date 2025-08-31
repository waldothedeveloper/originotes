import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/sign-in/'],
    },
    host: 'https://originotes.com',
    sitemap: 'https://originotes.com/sitemap.xml',
  }
}
