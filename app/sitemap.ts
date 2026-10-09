import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.smartonward.com'
  
  const paths = [
    '',
    '/about',
    '/services',
    '/website-development',
    '/branding-and-visual-design',
    '/video-and-reels',
    '/social-media-management',
    '/digital-marketing',
    '/ai-automation',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy'
  ]

  return paths.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }))
}
