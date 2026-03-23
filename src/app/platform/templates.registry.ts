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
