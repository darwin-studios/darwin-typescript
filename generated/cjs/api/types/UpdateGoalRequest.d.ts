import type * as Darwin from '../index.js';

export interface UpdateGoalRequest {
  title?: string | undefined;
  intent?: string | undefined;
  mode?: Darwin.WorkMode | undefined;
  /** Deprecated compatibility representation. Use mode. */
  type?: UpdateGoalRequest.Type | undefined;
  lifecycleStatus?: UpdateGoalRequest.LifecycleStatus | undefined;
  visibility?: Darwin.Visibility | undefined;
  accessPolicyId?: (string | null) | undefined;
  pausedUntil?: (string | null) | undefined;
  cadence?: Record<string, unknown> | undefined;
  targeting?: Record<string, unknown> | undefined;
  context?: Record<string, unknown> | undefined;
}
export declare namespace UpdateGoalRequest {
  /** Deprecated compatibility representation. Use mode. */
  const Type: {
    readonly Demand: 'DEMAND';
    readonly Supply: 'SUPPLY';
    readonly Chat: 'CHAT';
  };
  type Type = (typeof Type)[keyof typeof Type];
  const LifecycleStatus: {
    readonly Draft: 'DRAFT';
    readonly Active: 'ACTIVE';
    readonly Paused: 'PAUSED';
    readonly Completed: 'COMPLETED';
    readonly Archived: 'ARCHIVED';
  };
  type LifecycleStatus = (typeof LifecycleStatus)[keyof typeof LifecycleStatus];
}
