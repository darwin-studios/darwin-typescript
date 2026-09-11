export interface Approval {
  id: string;
  aiId: string | null;
  goalId: string | null;
  type: string;
  subjectType: string;
  subjectId: string;
  status: Approval.Status;
  payload: Record<string, unknown>;
  policySnapshot: Record<string, unknown>;
  traceId: string | null;
  expiresAt: string | null;
  decidedAt: string | null;
  decisionReason: string | null;
  createdAt: string;
  updatedAt: string;
}
export declare namespace Approval {
  const Status: {
    readonly Pending: 'PENDING';
    readonly Approved: 'APPROVED';
    readonly Rejected: 'REJECTED';
    readonly Expired: 'EXPIRED';
  };
  type Status = (typeof Status)[keyof typeof Status];
}
