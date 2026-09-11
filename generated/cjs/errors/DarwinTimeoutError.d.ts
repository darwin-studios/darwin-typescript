import * as errors from './index.js';

export declare class DarwinTimeoutError extends errors.DarwinError {
  constructor(
    message: string,
    opts?: {
      cause?: unknown;
    },
  );
}
