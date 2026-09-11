import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace TasksClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Deprecated compatibility API for executable work now represented by Goals.
 */
export declare class TasksClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<TasksClient.Options>;
  constructor(options: TasksClient.Options);
  /**
   * @deprecated
   *
   * Deprecated compatibility alias. Use `GET /goals`.
   *
   * @param {Darwin.ListTasksRequest} request
   * @param {TasksClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.tasks.listTasks()
   */
  listTasks(
    request?: Darwin.ListTasksRequest,
    requestOptions?: TasksClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListTasksResponse>;
  private __listTasks;
  /**
   * @deprecated
   *
   * Deprecated compatibility alias. Use `POST /goals`.
   *
   * @param {Darwin.CreateTaskRequest} request
   * @param {TasksClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.tasks.createTask({
   *         intent: "intent"
   *     })
   */
  createTask(
    request: Darwin.CreateTaskRequest,
    requestOptions?: TasksClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateTaskResponse>;
  private __createTask;
  /**
   * @deprecated
   *
   * @param {Darwin.GetTaskRequest} request
   * @param {TasksClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.tasks.getTask({
   *         id: "id"
   *     })
   */
  getTask(
    request: Darwin.GetTaskRequest,
    requestOptions?: TasksClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetTaskResponse>;
  private __getTask;
  /**
   * @deprecated
   *
   * @param {Darwin.UpdateTaskBody} request
   * @param {TasksClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.tasks.updateTask({
   *         id: "id",
   *         body: {}
   *     })
   */
  updateTask(
    request: Darwin.UpdateTaskBody,
    requestOptions?: TasksClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.UpdateTaskResponse>;
  private __updateTask;
  /**
   * @deprecated
   *
   * Deprecated compatibility alias for the goal lifecycle. Use `POST /goals/{id}/actions`.
   *
   * @param {Darwin.ActOnTaskRequest} request
   * @param {TasksClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.tasks.actOnTask({
   *         id: "id",
   *         body: {
   *             action: "PAUSE"
   *         }
   *     })
   */
  actOnTask(
    request: Darwin.ActOnTaskRequest,
    requestOptions?: TasksClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActOnTaskResponse>;
  private __actOnTask;
  /**
   * @deprecated
   *
   * @param {Darwin.RequestTaskPublicationApprovalRequest} request
   * @param {TasksClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.tasks.requestTaskPublicationApproval({
   *         id: "id",
   *         body: {}
   *     })
   */
  requestTaskPublicationApproval(
    request: Darwin.RequestTaskPublicationApprovalRequest,
    requestOptions?: TasksClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ApprovalResult>;
  private __requestTaskPublicationApproval;
  /**
   * @deprecated
   *
   * Deprecated compatibility alias. Use `POST /goals/{id}/publication-requests`.
   *
   * @param {Darwin.RequestTaskPublicationRequest} request
   * @param {TasksClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.tasks.requestTaskPublication({
   *         id: "id",
   *         body: {}
   *     })
   */
  requestTaskPublication(
    request: Darwin.RequestTaskPublicationRequest,
    requestOptions?: TasksClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.PublicationRequestResult>;
  private __requestTaskPublication;
}
