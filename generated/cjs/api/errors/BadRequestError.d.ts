import type * as core from '../../core/index.js';
import * as errors from '../../errors/index.js';
import type * as Darwin from '../index.js';

export declare class BadRequestError extends errors.DarwinError {
  constructor(body: Darwin.Error_, rawResponse?: core.RawResponse);
}
