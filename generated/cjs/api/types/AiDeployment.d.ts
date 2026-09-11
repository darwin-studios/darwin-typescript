import type * as Darwin from '../index.js';

export interface AiDeployment {
  aiId: string;
  current: AiDeployment.Current;
  options: Record<string, unknown>[];
  requests: Darwin.AiDeploymentRequest[];
}
export declare namespace AiDeployment {
  const Current: {
    readonly DarwinCloud: 'DARWIN_CLOUD';
    readonly DarwinPrivateCloud: 'DARWIN_PRIVATE_CLOUD';
    readonly SelfHosted: 'SELF_HOSTED';
  };
  type Current = (typeof Current)[keyof typeof Current];
}
