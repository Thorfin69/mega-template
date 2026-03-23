export interface RefinedBrief {
  businessName: string;
  industry: string;
  valueProp: string;
  targetAudience: string;
  tone: string;
  keyPoints: string[];
}

export type PortalStep = 'describe' | 'refine' | 'gallery' | 'generate';

export interface ContentResult {
  templateId: string;
  slots: Record<string, string>;
}
