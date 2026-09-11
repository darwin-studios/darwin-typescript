import type * as Darwin from '../index.js';

export interface Outcome {
  id: string;
  outcomeId: string;
  sessionId: string;
  goalId: string | null;
  /** Deprecated compatibility alias for goalId. */
  taskId?: (string | null) | undefined;
  dealId?: (string | null) | undefined;
  mode: Darwin.WorkMode;
  status: string;
  canonical: boolean;
  createdAt: string;
  updatedAt: string;
  /** Accepts any additional properties */
  [key: string]: any;
}
