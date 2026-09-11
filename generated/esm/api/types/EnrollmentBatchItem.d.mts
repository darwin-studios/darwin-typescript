export interface EnrollmentBatchItem {
    id: string;
    externalReference: string;
    status: EnrollmentBatchItem.Status;
    enrollmentUrl: string | null;
    errorCode: string | null;
    createdAt: string;
    updatedAt: string;
}
export declare namespace EnrollmentBatchItem {
    const Status: {
        readonly Ready: "ready";
        readonly Failed: "failed";
        readonly Consumed: "consumed";
        readonly Expired: "expired";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
