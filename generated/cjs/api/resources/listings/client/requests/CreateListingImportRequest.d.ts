/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         aiId: "aiId",
 *         kind: "CSV"
 *     }
 */
export interface CreateListingImportRequest {
  aiId: string;
  /** A caller-generated key, unique to this operation and payload. */
  'Idempotency-Key': string;
  kind: CreateListingImportRequest.Kind;
  sourceId?: string;
  objectKey?: string;
  mapping?: Record<string, unknown>;
  defaults?: Record<string, unknown>;
}
export declare namespace CreateListingImportRequest {
  const Kind: {
    readonly Csv: 'CSV';
    readonly Shopify: 'SHOPIFY';
  };
  type Kind = (typeof Kind)[keyof typeof Kind];
}
