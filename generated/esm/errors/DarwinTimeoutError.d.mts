import * as errors from "./index.mjs";
export declare class DarwinTimeoutError extends errors.DarwinError {
    constructor(message: string, opts?: {
        cause?: unknown;
    });
}
