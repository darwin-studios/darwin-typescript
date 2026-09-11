/**
 * @example
 *     {
 *         aiId: "aiId",
 *         email: "email"
 *     }
 */
export interface CreateAiInvitationRequest {
    aiId: string;
    email: string;
    role?: CreateAiInvitationRequest.Role;
}
export declare namespace CreateAiInvitationRequest {
    const Role: {
        readonly Admin: "admin";
        readonly Member: "member";
    };
    type Role = (typeof Role)[keyof typeof Role];
}
