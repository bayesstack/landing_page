import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BayesStack Institutional Learning System',
    short_name: 'BayesStack',
    description: 'Industry-shaped programs, hands-on labs, and meaningful partnerships for forward-looking universities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F6F5',
    theme_color: '#132B3A',
    icons: [
      { src: '/brand/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/brand/favicons/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
