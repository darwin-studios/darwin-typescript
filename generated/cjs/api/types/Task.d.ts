import type * as Darwin from '../index.js';

export interface Task extends Darwin.Goal {
  /** Deprecated compatibility alias for goalId. */
  taskId: string;
}
