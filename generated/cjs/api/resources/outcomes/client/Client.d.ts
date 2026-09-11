import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace OutcomesClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Read Darwin-owned outcome projections and submit attributable verification evidence.
 */
export declare class OutcomesClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<OutcomesClient.Options>;
  constructor(options: OutcomesClient.Options);
  /**
   * @param {Darwin.ListOutcomesRequest} request
   * @param {OutcomesClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.outcomes.listOutcomes()
   */
  listOutcomes(
    request?: Darwin.ListOutcomesRequest,
    requestOptions?: OutcomesClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListOutcomesResponse>;
  private __listOutcomes;
  /**
   * @param {Darwin.GetOutcomeRequest} request
   * @param {OutcomesClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.outcomes.getOutcome({
   *         outcomeId: "outcomeId"
   *     })
   */
  getOutcome(
    request: Darwin.GetOutcomeRequest,
    requestOptions?: OutcomesClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetOutcomeResponse>;
  private __getOutcome;
  /**
   * Adds idempotent, attributable evidence for verification. This operation never lets the caller assert or overwrite the canonical outcome.
   *
   * @param {Darwin.SubmitOutcomeEvidenceRequest} request
   * @param {OutcomesClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.outcomes.submitOutcomeEvidence({
   *         "Idempotency-Key": "Idempotency-Key",
   *         outcomeId: "outcomeId",
   *         evidenceDigest: "evidenceDigest"
   *     })
   */
  submitOutcomeEvidence(
    request: Darwin.SubmitOutcomeEvidenceRequest,
    requestOptions?: OutcomesClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.SubmitOutcomeEvidenceResponse>;
  private __submitOutcomeEvidence;
}
