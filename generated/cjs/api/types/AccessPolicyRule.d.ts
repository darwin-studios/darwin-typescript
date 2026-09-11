export interface AccessPolicyRule {
  aiIds?: string[] | undefined;
  verifiedAttributes?: Record<string, AccessPolicyRule.VerifiedAttributes.Value> | undefined;
  geography?: AccessPolicyRule.Geography | undefined;
}
export declare namespace AccessPolicyRule {
  namespace VerifiedAttributes {
    type Value = string | boolean;
  }
  interface Geography {
    countries?: string[] | undefined;
    regions?: string[] | undefined;
  }
}
