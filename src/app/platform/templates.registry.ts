export interface TemplateMetadata {
  id: string;
  displayName: string;
  route: string;
  accentColor: string;
  bgStyle: 'dark' | 'light' | 'mixed';
  industries: string[];
  keywords: string[];
  complexity: 'simple' | 'medium' | 'complex';
  swapHours: number;
  previewImage: string;
  claudeMdPath: string;
  contentMdPath: string;
  designMdPath: string;
}

export const TEMPLATES: TemplateMetadata[] = [
  {
    id: 'template-k',
    displayName: 'Medical & Wellness',
    route: '/template-k',
    accentColor: '#4da7aa',
    bgStyle: 'mixed',
    industries: ['healthcare', 'nursing', 'staffing', 'medical', 'allied-health', 'wellness', 'recruiting', 'travel-nursing'],
    keywords: ['light', 'clean', 'trust-forward', 'teal', 'image-heavy', 'professional', 'data-forward', 'white', 'dark-sections'],
    complexity: 'complex',
    swapHours: 3.5,
    previewImage: '/templates/template-k/preview/hero.png',
    claudeMdPath: '/templates/template-k/CLAUDE.md',
    contentMdPath: '/templates/template-k/CONTENT.md',
    designMdPath: '/templates/template-k/DESIGN.md',
  },
  {
    id: 'template-m',
    displayName: 'Care Elite — Nurse Staffing',
    route: '/template-m',
    accentColor: '#0094DC',
    bgStyle: 'mixed',
    industries: ['healthcare', 'nursing', 'staffing', 'medical', 'per-diem', 'travel-nursing', 'allied-health', 'home-care'],
    keywords: ['blue', 'professional', 'dark-hero', 'trust-forward', 'counter-stats', 'service-cards', 'marquee-testimonials'],
    complexity: 'complex',
    swapHours: 3,
    previewImage: '/templates/template-m/preview/hero.png',
    claudeMdPath: '/templates/template-m/CLAUDE.md',
    contentMdPath: '/templates/template-m/CONTENT.md',
    designMdPath: '/templates/template-m/DESIGN.md',
  },
  {
    id: 'template-n',
    displayName: 'Tiger Loans — Home Lending',
    route: '/template-n',
    accentColor: '#f7b433',
    bgStyle: 'mixed',
    industries: ['finance', 'mortgage', 'home-loans', 'lending', 'real-estate', 'refinancing', 'first-time-buyers'],
    keywords: ['financial', 'trust-forward', 'amber', 'professional', 'mortgage', 'home-ownership', 'wealth-building', 'dark-hero', 'marquee-logos', 'team-heavy'],
    complexity: 'complex',
    swapHours: 3,
    previewImage: '/templates/template-n/preview/hero.png',
    claudeMdPath: '/templates/template-n/CLAUDE.md',
    contentMdPath: '/templates/template-n/CONTENT.md',
    designMdPath: '/templates/template-n/DESIGN.md',
  },
  {
    id: 'template-l',
    displayName: 'B2B SaaS Cloud',
    route: '/template-l',
    accentColor: '#027DFC',
    bgStyle: 'mixed',
    industries: ['saas', 'data-tools', 'cloud', 'snowflake', 'b2b', 'finops', 'data-engineering', 'developer-tools', 'ai-products', 'enterprise-software', 'analytics'],
    keywords: ['blue', 'clean', 'data-forward', 'dashboard-hero', 'pricing-table', 'feature-grid', 'professional', 'mixed-dark-light', 'faq-heavy', 'b2b', 'tech'],
    complexity: 'complex',
    swapHours: 3,
    previewImage: '/templates/template-l/preview/hero.png',
    claudeMdPath: '/templates/template-l/CLAUDE.md',
    contentMdPath: '/templates/template-l/CONTENT.md',
    designMdPath: '/templates/template-l/DESIGN.md',
  },
];
