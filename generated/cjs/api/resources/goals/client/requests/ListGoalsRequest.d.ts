import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {}
 */
export interface ListGoalsRequest {
  /** Optional explicit AI scope. When omitted, Darwin uses the caller’s selected AI. */
  aiId?: string;
  /** Filter tasks by the user-facing workflow mode. */
  mode?: Darwin.WorkMode;
}
