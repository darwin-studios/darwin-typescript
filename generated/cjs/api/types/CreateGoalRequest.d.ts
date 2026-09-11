import type * as Darwin from '../index.js';

export interface CreateGoalRequest {
  aiId?: string | undefined;
  title?: string | undefined;
  intent: string;
  mode?: Darwin.WorkMode | undefined;
  /** Deprecated compatibility representation. Use mode. */
  type?: CreateGoalRequest.Type | undefined;
  lifecycleStatus?: CreateGoalRequest.LifecycleStatus | undefined;
  visibility?: Darwin.Visibility | undefined;
  accessPolicyId?: string | undefined;
  cadence?: Record<string, unknown> | undefined;
  targeting?: Record<string, unknown> | undefined;
  context?: Record<string, unknown> | undefined;
  listingIds?: string[] | undefined;
  dealTemplateKey?: string | undefined;
}
export declare namespace CreateGoalRequest {
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
  };
  type LifecycleStatus = (typeof LifecycleStatus)[keyof typeof LifecycleStatus];
}
