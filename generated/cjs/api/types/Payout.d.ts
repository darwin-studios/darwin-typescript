export interface Payout {
  id: string;
  amountMinor: number;
  currency: string;
  status: string;
  failureReason?: (string | null) | undefined;
  transferredAt?: (string | null) | undefined;
  createdAt: string;
}
