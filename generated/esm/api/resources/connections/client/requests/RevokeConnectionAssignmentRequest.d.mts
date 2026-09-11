/**
 * @example
 *     {
 *         aiId: "aiId",
 *         connectionId: "connectionId",
 *         assignmentId: "assignmentId"
 *     }
 */
export interface RevokeConnectionAssignmentRequest {
    aiId: string;
    connectionId: string;
    assignmentId: string;
}
