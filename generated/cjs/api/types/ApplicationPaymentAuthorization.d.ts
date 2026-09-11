export interface ApplicationPaymentAuthorization {
  authorizationId: string;
  transactionId: string;
  status: string;
  providerPaymentIntentId?: (string | null) | undefined;
  nextActionRequired?: boolean | undefined;
  clientSecret?: (string | null) | undefined;
}
