/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         externalReferences: ["externalReferences"]
 *     }
 */
export interface CreateEnrollmentBatchRequest {
    applicationId: string;
    externalReferences: string[];
    expiresAt?: string;
}
