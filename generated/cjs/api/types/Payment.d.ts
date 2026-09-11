import type * as Darwin from '../index.js';

export interface Payment {
  id: string;
  aiId: string;
  goalId?: (string | null) | undefined;
  dealId?: (string | null) | undefined;
  amountMinor: number;
  currency: string;
  description: string;
  status: string;
  checkoutUrl?: (string | null) | undefined;
  expiresAt?: (string | null) | undefined;
  paidAt?: (string | null) | undefined;
  canceledAt?: (string | null) | undefined;
  metadata?: Record<string, unknown> | undefined;
  payout?: (Darwin.Payout | null) | undefined;
  createdAt: string;
  updatedAt: string;
}
