export interface ListingImport {
    id: string;
    aiId: string;
    kind: ListingImport.Kind;
    status: ListingImport.Status;
    processedRows?: number | undefined;
    successfulRows?: number | undefined;
    failedRows?: number | undefined;
    errorObjectKey?: (string | null) | undefined;
    createdAt: string;
    updatedAt: string;
}
export declare namespace ListingImport {
    const Kind: {
        readonly Csv: "CSV";
        readonly Shopify: "SHOPIFY";
    };
    type Kind = (typeof Kind)[keyof typeof Kind];
    const Status: {
        readonly Queued: "QUEUED";
        readonly Validating: "VALIDATING";
        readonly Ready: "READY";
        readonly Importing: "IMPORTING";
        readonly Completed: "COMPLETED";
        readonly Partial: "PARTIAL";
        readonly Failed: "FAILED";
        readonly Canceled: "CANCELED";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
