import type * as Darwin from '../index.js';

export interface AiActivityPage {
  events: Darwin.AiActivity[];
  nextCursor: string | null;
}
