import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const routes = [
  '',
  '/solutions/programs',
  '/solutions/labs',
  '/solutions/partnerships',
  '/domains/ai-engineering',
  '/domains/cloud-platform-engineering',
  '/domains/cybersecurity-digital-trust',
  '/domains/fintech-quantitative-systems',
  '/about',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://bayesstack.com${route}`,
    lastModified: new Date('2026-10-10'),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : route === '/contact' ? 0.9 : 0.8,
  }));
}
