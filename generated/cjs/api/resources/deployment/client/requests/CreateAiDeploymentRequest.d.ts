/**
 * @example
 *     {
 *         "Idempotency-Key": "Idempotency-Key",
 *         aiId: "aiId",
 *         target: "DARWIN_CLOUD"
 *     }
 */
export interface CreateAiDeploymentRequest {
  aiId: string;
  /** A caller-generated key, unique to this operation and payload. */
  'Idempotency-Key': string;
  target: CreateAiDeploymentRequest.Target;
  reason?: string;
  requirements?: Record<string, unknown>;
}
export declare namespace CreateAiDeploymentRequest {
  const Target: {
    readonly DarwinCloud: 'DARWIN_CLOUD';
    readonly DarwinPrivateCloud: 'DARWIN_PRIVATE_CLOUD';
    readonly SelfHosted: 'SELF_HOSTED';
  };
  type Target = (typeof Target)[keyof typeof Target];
}
