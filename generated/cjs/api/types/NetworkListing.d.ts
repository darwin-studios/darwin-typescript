export interface NetworkListing {
  id: string;
  type: string;
  title: string;
  description: string | null;
  category: string | null;
  tags: string[];
  media: Record<string, unknown>[];
  pricing: Record<string, unknown>;
  availability: Record<string, unknown>;
  capacity: Record<string, unknown>;
  attributes: Record<string, unknown>;
  preferredDealTemplateKey: string | null;
  supportedDealTemplateKeys: string[];
  revision: number;
  updatedAt: string;
}
