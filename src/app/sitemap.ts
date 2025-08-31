import type { MetadataRoute } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

const baseUrl = 'https://originotes.com'

async function listSlugsFrom(dir: string, prefix: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    const slugs: string[] = []
    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const slugDir = path.join(dir, entry.name)
      const pageFile = path.join(slugDir, 'page.mdx')
      try {
        await fs.access(pageFile)
        slugs.push(`${prefix}/${entry.name}`)
      } catch {
        // not a content leaf; ignore
      }
    }
    return slugs
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/process',
    '/privacy-policy',
    '/terms-and-conditions',
  ]

  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog')
  const processDir = path.join(process.cwd(), 'src', 'app', 'process')

  const [blogSlugs, processSlugs] = await Promise.all([
    listSlugsFrom(blogDir, '/blog'),
    listSlugsFrom(processDir, '/process'),
  ])

  const pages = [...staticRoutes, ...blogSlugs, ...processSlugs]

  return pages.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
