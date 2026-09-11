import type * as Darwin from '../index.js';

export interface CreatedWebhook extends Darwin.Webhook {
  /** Returned only once. */
  signingSecret: string;
}
