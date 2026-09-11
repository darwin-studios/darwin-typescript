import type * as Darwin from "../../../../index.mjs";
/**
 * @example
 *     {
 *         id: "id",
 *         body: {}
 *     }
 */
export interface RequestTaskPublicationRequest {
    id: string;
    body: Darwin.PublicationRequest;
}
