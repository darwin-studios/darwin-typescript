import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {
 *         dealId: "dealId"
 *     }
 */
export interface UpdateDealRequest {
    dealId: string;
    title?: string;
    visibility?: Darwin.Visibility;
    accessPolicyId?: string | null;
    terms?: Record<string, unknown>;
    counterparty?: Record<string, unknown>;
}
