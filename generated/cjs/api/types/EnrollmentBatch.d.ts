export interface EnrollmentBatch {
  id: string;
  applicationId: string;
  status: EnrollmentBatch.Status;
  totalCount: number;
  readyCount: number;
  failedCount: number;
  expiresAt?: (string | null) | undefined;
  createdAt: string;
  updatedAt: string;
}
export declare namespace EnrollmentBatch {
  const Status: {
    readonly Processing: 'processing';
    readonly Completed: 'completed';
    readonly Partial: 'partial';
    readonly Failed: 'failed';
  };
  type Status = (typeof Status)[keyof typeof Status];
}
