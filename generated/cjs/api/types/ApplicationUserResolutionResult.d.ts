export type ApplicationUserResolutionResult =
  | {
      status: 'READY';
      darwinUserRef: string;
      darwinAiRef: string;
      verificationMethod?: string | undefined;
      consentScopes?: string[] | undefined;
    }
  | {
      status: 'ONBOARDING_REQUIRED' | 'REAUTH_REQUIRED';
      hostedUrl: string;
      expiresAt: string;
    };
