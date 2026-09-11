import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {
 *         aiId: "aiId",
 *         listingId: "listingId",
 *         expectedRevision: 1
 *     }
 */
export interface UpdateListingRequest {
    aiId: string;
    listingId: string;
    expectedRevision: number;
    type?: Darwin.ListingType;
    executionDomain?: Darwin.ListingExecutionDomain;
    capabilityKind?: UpdateListingRequest.CapabilityKind;
    title?: string;
    description?: string | null;
    status?: Darwin.ListingStatus;
    visibility?: Darwin.ListingVisibility;
    allowedAiIds?: string[];
    category?: string | null;
    tags?: string[];
    media?: Record<string, unknown>[];
    pricing?: Darwin.ListingPricing;
    availability?: Record<string, unknown>;
    availabilityLimits?: Record<string, unknown>;
    /** Compatibility alias for availabilityLimits. */
    capacity?: Record<string, unknown>;
    attributes?: Record<string, unknown>;
    sellerAcceptancePolicy?: Darwin.SellerAcceptancePolicy;
    customerAccountPolicy?: Darwin.CustomerAccountPolicy;
    fulfillmentDefinition?: Darwin.FulfillmentDefinition;
    preferredDealTemplateKey?: string | null;
    supportedDealTemplateKeys?: string[];
    sourceId?: string | null;
    externalRef?: string | null;
    variants?: Darwin.ListingVariant[];
}
export declare namespace UpdateListingRequest {
    const CapabilityKind: {
        readonly Api: "API";
        readonly BrowserAutomation: "BROWSER_AUTOMATION";
        readonly Mcp: "MCP";
        readonly SoftwareAction: "SOFTWARE_ACTION";
        readonly Other: "OTHER";
    };
    type CapabilityKind = (typeof CapabilityKind)[keyof typeof CapabilityKind];
}
