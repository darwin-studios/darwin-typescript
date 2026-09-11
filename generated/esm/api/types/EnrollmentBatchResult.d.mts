import type * as Darwin from "../index.mjs";
export interface EnrollmentBatchResult {
    batch: Darwin.EnrollmentBatch;
    items: Darwin.EnrollmentBatchItem[];
    page: EnrollmentBatchResult.Page;
}
export declare namespace EnrollmentBatchResult {
    interface Page {
        nextCursor: string | null;
    }
}
