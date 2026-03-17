export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  video?: string;
  liveUrl: string;
  repoUrl: string;
  keyHighlights: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Nexus AI Dashboard',
    description: 'A real-time analytics dashboard for AI-powered SaaS applications.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    repoUrl: '#',
    keyHighlights: [
      'Real-time data synchronization with WebSockets',
      'Custom animated data visualizations',
      'Fully responsive glassmorphism UI'
    ]
  },
  {
    id: '2',
    title: 'E-Commerce Ultra',
    description: 'High-performance headless commerce storefront with seamless transitions.',
    tech: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    repoUrl: '#',
    keyHighlights: [
      'Sub-100ms page transitions',
      'Optimized image loading with Next.js Image',
      'Custom shopping cart with local persistence'
    ]
  },
  {
    id: '3',
    title: 'Crypto Pulse',
    description: 'Live cryptocurrency tracker with advanced filtering and price alerts.',
    tech: ['Next.js', 'CoinGecko API', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    repoUrl: '#',
    keyHighlights: [
      'Real-time price updates via API polling',
      'Interactive historical price charts',
      'Customizable user watchlists'
    ]
  }
];
