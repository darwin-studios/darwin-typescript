import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {
 *         aiId: "aiId",
 *         name: "name",
 *         visibility: "PUBLIC"
 *     }
 */
export interface CreateAccessPolicyRequest {
    aiId: string;
    name: string;
    visibility: Darwin.Visibility;
    naturalLanguage?: string;
    rules?: Darwin.AccessPolicyRule[];
}
