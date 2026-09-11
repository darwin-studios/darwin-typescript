/**
 * @example
 *     {
 *         aiId: "aiId",
 *         membershipId: "membershipId",
 *         role: "admin"
 *     }
 */
export interface UpdateAiMemberRequest {
  aiId: string;
  membershipId: string;
  role: UpdateAiMemberRequest.Role;
}
export declare namespace UpdateAiMemberRequest {
  const Role: {
    readonly Admin: 'admin';
    readonly Member: 'member';
  };
  type Role = (typeof Role)[keyof typeof Role];
}
