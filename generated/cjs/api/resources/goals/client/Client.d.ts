import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace GoalsClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Create and manage the durable outcomes an AI pursues across buy, sell, and chat.
 */
export declare class GoalsClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<GoalsClient.Options>;
  constructor(options: GoalsClient.Options);
  /**
   * @param {Darwin.ListGoalsRequest} request
   * @param {GoalsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.goals.listGoals()
   */
  listGoals(
    request?: Darwin.ListGoalsRequest,
    requestOptions?: GoalsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListGoalsResponse>;
  private __listGoals;
  /**
   * @param {Darwin.CreateGoalRequest} request
   * @param {GoalsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.goals.createGoal({
   *         intent: "intent"
   *     })
   */
  createGoal(
    request: Darwin.CreateGoalRequest,
    requestOptions?: GoalsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateGoalResponse>;
  private __createGoal;
  /**
   * @param {Darwin.GetGoalRequest} request
   * @param {GoalsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.goals.getGoal({
   *         id: "id"
   *     })
   */
  getGoal(
    request: Darwin.GetGoalRequest,
    requestOptions?: GoalsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetGoalResponse>;
  private __getGoal;
  /**
   * @param {Darwin.UpdateGoalBody} request
   * @param {GoalsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.goals.updateGoal({
   *         id: "id",
   *         body: {}
   *     })
   */
  updateGoal(
    request: Darwin.UpdateGoalBody,
    requestOptions?: GoalsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.UpdateGoalResponse>;
  private __updateGoal;
  /**
   * Draft goals can activate; active goals can pause or complete; paused goals can resume or complete; completed goals can archive. Completion is blocked while negotiations, transactions, or recurring agreements remain active.
   *
   * @param {Darwin.ActOnGoalRequest} request
   * @param {GoalsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.goals.actOnGoal({
   *         id: "id",
   *         body: {
   *             action: "PAUSE"
   *         }
   *     })
   */
  actOnGoal(
    request: Darwin.ActOnGoalRequest,
    requestOptions?: GoalsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActOnGoalResponse>;
  private __actOnGoal;
  /**
   * Creates an actionable request to publish a private goal. Darwin does not publish the goal until the account resolves the request.
   *
   * @param {Darwin.RequestGoalPublicationRequest} request
   * @param {GoalsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.goals.requestGoalPublication({
   *         id: "id",
   *         body: {}
   *     })
   */
  requestGoalPublication(
    request: Darwin.RequestGoalPublicationRequest,
    requestOptions?: GoalsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.PublicationRequestResult>;
  private __requestGoalPublication;
}
