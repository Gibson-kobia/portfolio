export interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
  keyHighlights: string[];
  accentTheme: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'neemon-beauty',
    title: 'Neemon Beauty Shop',
    tagline: 'A polished ecommerce storefront crafted for a branded beauty retail experience.',
    description: 'A customer-facing shopping experience focused on product discovery, clean visual presentation, and responsive ecommerce interaction.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=2070&auto=format&fit=crop',
    liveUrl: 'https://neemonbeauty.com',
    repoUrl: 'https://github.com/yourusername/neemon-beauty',
    keyHighlights: [
      'branded storefront design',
      'responsive ecommerce UI',
      'product browsing and shopping flow'
    ],
    accentTheme: '#ffc1d1'
  },
  {
    id: 'volthub',
    title: 'Volthub',
    tagline: 'A modern gadget ecommerce platform with a sharper retail-tech identity.',
    description: 'An ecommerce experience built for gadget shopping, with cleaner category organization, stronger product presentation, and a more modern visual system.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    liveUrl: 'https://volthub.energy',
    repoUrl: 'https://github.com/yourusername/volthub',
    keyHighlights: [
      'category-driven product browsing',
      'modern product presentation',
      'responsive shopping experience'
    ],
    accentTheme: '#00f3ff'
  }
];
