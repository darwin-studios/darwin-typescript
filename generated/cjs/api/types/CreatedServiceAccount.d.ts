import type * as Darwin from '../index.js';

export interface CreatedServiceAccount extends Darwin.ServiceAccount {
  /** Returned only once. */
  apiKey: string;
}
