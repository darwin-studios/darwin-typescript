/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         batchId: "batchId"
 *     }
 */
export interface GetEnrollmentBatchRequest {
    applicationId: string;
    batchId: string;
    limit?: number;
    cursor?: string;
}
