import type * as core from "../../core/index.mjs";
import * as errors from "../../errors/index.mjs";
import type * as Darwin from "../index.mjs";
export declare class TooManyRequestsError extends errors.DarwinError {
    constructor(body: Darwin.Error_, rawResponse?: core.RawResponse);
}
