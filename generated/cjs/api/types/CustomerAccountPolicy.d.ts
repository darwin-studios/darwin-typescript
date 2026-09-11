export interface CustomerAccountPolicy {
  requirement: CustomerAccountPolicy.Requirement;
  providerKey?: string | undefined;
  requiredScopes?: string[] | undefined;
  allowedRetention: CustomerAccountPolicy.AllowedRetention.Item[];
}
export declare namespace CustomerAccountPolicy {
  const Requirement: {
    readonly None: 'NONE';
    readonly Optional: 'OPTIONAL';
    readonly Required: 'REQUIRED';
  };
  type Requirement = (typeof Requirement)[keyof typeof Requirement];
  type AllowedRetention = AllowedRetention.Item[];
  namespace AllowedRetention {
    const Item: {
      readonly RequestOnly: 'REQUEST_ONLY';
      readonly SavedWithConsent: 'SAVED_WITH_CONSENT';
    };
    type Item = (typeof Item)[keyof typeof Item];
  }
}
