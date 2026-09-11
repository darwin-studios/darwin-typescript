import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         applicationId: "applicationId",
 *         externalUserReference: "externalUserReference"
 *     }
 */
export interface ResolveApplicationUserRequest {
  applicationId: string;
  /** Stable application-scoped identifier. Darwin stores only a normalized digest in the durable mapping. */
  externalUserReference: string;
  /** Preview-only verified-claim hints. They do not affect current hosted-onboarding resolution, never authorize a global account merge by themselves, and are not logged. */
  claims?: ResolveApplicationUserRequest.Claims.Item[];
  /** Preview proof envelope. It is shape-validated and redacted, but public proof exchange is not active yet; omit it to reuse a mapping or receive hosted onboarding. */
  proof?: Darwin.ResolveApplicationUserRequestProof;
}
export declare namespace ResolveApplicationUserRequest {
  type Claims = Claims.Item[];
  namespace Claims {
    interface Item {
      type: Item.Type;
      value: string;
      verified: boolean;
    }
    namespace Item {
      const Type: {
        readonly Email: 'EMAIL';
        readonly Phone: 'PHONE';
      };
      type Type = (typeof Type)[keyof typeof Type];
    }
  }
}
