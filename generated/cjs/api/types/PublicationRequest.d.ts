export interface PublicationRequest {
  objective?: Record<string, unknown> | undefined;
  idempotencyKey?: string | undefined;
  expiresAt?: string | undefined;
}
