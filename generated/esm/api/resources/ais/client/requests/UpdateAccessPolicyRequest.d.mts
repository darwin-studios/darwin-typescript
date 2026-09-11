import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {
 *         aiId: "aiId",
 *         policyId: "policyId"
 *     }
 */
export interface UpdateAccessPolicyRequest {
    aiId: string;
    policyId: string;
    name?: string;
    visibility?: Darwin.Visibility;
    naturalLanguage?: string | null;
    rules?: Darwin.AccessPolicyRule[];
}
