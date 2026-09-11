import type * as Darwin from '../index.js';

export interface CreatedEnrollmentLink extends Darwin.EnrollmentLink {
  /** Returned only once. */
  token: string;
  url: string;
}
