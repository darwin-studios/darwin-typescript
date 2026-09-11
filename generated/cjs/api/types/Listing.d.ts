import type * as Darwin from '../index.js';

export interface Listing {
  id: string;
  aiId: string;
  type: Darwin.ListingType;
  executionDomain: Darwin.ListingExecutionDomain;
  capabilityKind?: (Listing.CapabilityKind | null) | undefined;
  title: string;
  description?: (string | null) | undefined;
  category?: (string | null) | undefined;
  tags?: string[] | undefined;
  media?: Record<string, unknown>[] | undefined;
  status: Darwin.ListingStatus;
  visibility: Darwin.ListingVisibility;
  allowedAiIds?: string[] | undefined;
  pricing?: Darwin.ListingPricing | undefined;
  availability?: Record<string, unknown> | undefined;
  availabilityLimits?: Record<string, unknown> | undefined;
  /** Compatibility alias for availabilityLimits. */
  capacity?: Record<string, unknown> | undefined;
  attributes?: Record<string, unknown> | undefined;
  sellerAcceptancePolicy?: Darwin.SellerAcceptancePolicy | undefined;
  customerAccountPolicy?: Darwin.CustomerAccountPolicy | undefined;
  fulfillmentDefinition?: Darwin.FulfillmentDefinition | undefined;
  /** Private owner projection only. Public Browse responses omit this field. */
  operationalReadiness?: Listing.OperationalReadiness | undefined;
  preferredDealTemplateKey?: (string | null) | undefined;
  supportedDealTemplateKeys?: string[] | undefined;
  sourceId?: (string | null) | undefined;
  externalRef?: (string | null) | undefined;
  variants?: Darwin.ListingVariant[] | undefined;
  revision: number;
  createdAt: string;
  updatedAt: string;
}
export declare namespace Listing {
  const CapabilityKind: {
    readonly Api: 'API';
    readonly BrowserAutomation: 'BROWSER_AUTOMATION';
    readonly Mcp: 'MCP';
    readonly SoftwareAction: 'SOFTWARE_ACTION';
    readonly Other: 'OTHER';
  };
  type CapabilityKind = (typeof CapabilityKind)[keyof typeof CapabilityKind];
  /** Private owner projection only. Public Browse responses omit this field. */
  const OperationalReadiness: {
    readonly Unconfigured: 'UNCONFIGURED';
    readonly Activating: 'ACTIVATING';
    readonly Ready: 'READY';
    readonly Degraded: 'DEGRADED';
    readonly Disabled: 'DISABLED';
  };
  type OperationalReadiness = (typeof OperationalReadiness)[keyof typeof OperationalReadiness];
}
