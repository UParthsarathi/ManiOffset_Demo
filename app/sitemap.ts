import { MetadataRoute } from 'next'
import { products } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://feeltheprint.com'

  // We can add dynamic routes here later by querying the database
  const staticRoutes = [
    '',
    '/about',
    '/about/history',
    '/about/facilities',
    '/about/sustainability',
    '/about/leadership',
    '/about/careers',
    '/contact/express',
    '/contact/corporate',
    '/calculator',
    '/press/standards',
    '/press/process',
    '/press/logistics',
    '/products',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const dynamicProductRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...dynamicProductRoutes]
}
