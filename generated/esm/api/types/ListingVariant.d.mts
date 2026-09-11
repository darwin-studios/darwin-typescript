import type * as Darwin from "../index.mjs";
export interface ListingVariant {
    id: string;
    externalRef?: (string | null) | undefined;
    sku?: (string | null) | undefined;
    title: string;
    status: Darwin.ListingStatus;
    options?: Record<string, unknown> | undefined;
    pricing?: Record<string, unknown> | undefined;
    availability?: Record<string, unknown> | undefined;
    inventory?: Record<string, unknown> | undefined;
    attributes?: Record<string, unknown> | undefined;
}
