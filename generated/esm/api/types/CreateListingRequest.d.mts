import type * as Darwin from "../index.mjs";
export interface CreateListingRequest {
    type: Darwin.ListingType;
    executionDomain: Darwin.ListingExecutionDomain;
    capabilityKind?: CreateListingRequest.CapabilityKind | undefined;
    title: string;
    description?: (string | null) | undefined;
    status?: Darwin.ListingStatus | undefined;
    visibility?: Darwin.ListingVisibility | undefined;
    allowedAiIds?: string[] | undefined;
    category?: (string | null) | undefined;
    tags?: string[] | undefined;
    media?: Record<string, unknown>[] | undefined;
    pricing?: Darwin.ListingPricing | undefined;
    availability?: Record<string, unknown> | undefined;
    availabilityLimits?: Record<string, unknown> | undefined;
    /** Compatibility alias for availabilityLimits. */
    capacity?: Record<string, unknown> | undefined;
    attributes?: Record<string, unknown> | undefined;
    sellerAcceptancePolicy?: Darwin.SellerAcceptancePolicy | undefined;
    customerAccountPolicy?: Darwin.CustomerAccountPolicy | undefined;
    fulfillmentDefinition?: Darwin.FulfillmentDefinition | undefined;
    preferredDealTemplateKey?: (string | null) | undefined;
    supportedDealTemplateKeys?: string[] | undefined;
    sourceId?: (string | null) | undefined;
    externalRef?: (string | null) | undefined;
    variants?: Darwin.ListingVariant[] | undefined;
}
export declare namespace CreateListingRequest {
    const CapabilityKind: {
        readonly Api: "API";
        readonly BrowserAutomation: "BROWSER_AUTOMATION";
        readonly Mcp: "MCP";
        readonly SoftwareAction: "SOFTWARE_ACTION";
        readonly Other: "OTHER";
    };
    type CapabilityKind = (typeof CapabilityKind)[keyof typeof CapabilityKind];
}
