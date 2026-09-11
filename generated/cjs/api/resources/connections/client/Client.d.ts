import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace ConnectionsClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Manage authorized external accounts without exposing provider credentials.
 */
export declare class ConnectionsClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<ConnectionsClient.Options>;
  constructor(options: ConnectionsClient.Options);
  /**
   * @param {Darwin.ListAiConnectionsRequest} request
   * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.connections.listAiConnections({
   *         aiId: "aiId"
   *     })
   */
  listAiConnections(
    request: Darwin.ListAiConnectionsRequest,
    requestOptions?: ConnectionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListAiConnectionsResponse>;
  private __listAiConnections;
  /**
   * Owner user credentials only. Assigns a sanitized provider authorization to one AI, Listing, or transaction without exposing credentials. Request-only assignments must expire within 24 hours; saved assignments require explicit consent.
   *
   * @param {Darwin.CreateConnectionAssignmentRequest} request
   * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.connections.createConnectionAssignment({
   *         aiId: "aiId",
   *         connectionId: "connectionId",
   *         targetKind: "AI",
   *         targetId: "targetId",
   *         retention: "REQUEST_ONLY",
   *         scopes: ["scopes"]
   *     })
   */
  createConnectionAssignment(
    request: Darwin.CreateConnectionAssignmentRequest,
    requestOptions?: ConnectionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateConnectionAssignmentResponse>;
  private __createConnectionAssignment;
  /**
   * Owner user credentials only. Revocation takes effect before the next fulfillment check.
   *
   * @param {Darwin.RevokeConnectionAssignmentRequest} request
   * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.connections.revokeConnectionAssignment({
   *         aiId: "aiId",
   *         connectionId: "connectionId",
   *         assignmentId: "assignmentId"
   *     })
   */
  revokeConnectionAssignment(
    request: Darwin.RevokeConnectionAssignmentRequest,
    requestOptions?: ConnectionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.RevokeConnectionAssignmentResponse>;
  private __revokeConnectionAssignment;
  /**
   * Owner credentials only. Darwin hosts the provider OAuth flow and never returns provider credentials.
   *
   * @param {Darwin.CreateConnectionAuthorizationRequest} request
   * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.connections.createConnectionAuthorizationSession({
   *         aiId: "aiId",
   *         toolkit: "toolkit",
   *         requestId: "requestId"
   *     })
   */
  createConnectionAuthorizationSession(
    request: Darwin.CreateConnectionAuthorizationRequest,
    requestOptions?: ConnectionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ConnectionAuthorizationSession>;
  private __createConnectionAuthorizationSession;
  /**
   * @param {Darwin.CompleteConnectionAuthorizationRequest} request
   * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.connections.completeConnectionAuthorizationSession({
   *         aiId: "aiId",
   *         attemptToken: "attemptToken"
   *     })
   */
  completeConnectionAuthorizationSession(
    request: Darwin.CompleteConnectionAuthorizationRequest,
    requestOptions?: ConnectionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ConnectionAuthorizationCompletion>;
  private __completeConnectionAuthorizationSession;
  /**
   * Owner credentials only. This disables Darwin access without claiming the provider revoked one scope from a cumulative token.
   *
   * @param {Darwin.DisableConnectionGrantRequest} request
   * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.connections.disableConnectionGrant({
   *         aiId: "aiId",
   *         connectionId: "connectionId",
   *         toolkit: "toolkit"
   *     })
   */
  disableConnectionGrant(
    request: Darwin.DisableConnectionGrantRequest,
    requestOptions?: ConnectionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ConnectionGrantDisableResult>;
  private __disableConnectionGrant;
  /**
   * Owner credentials only. Local access is disabled immediately and provider token revocation is retried if necessary.
   *
   * @param {Darwin.RemoveAiConnectionRequest} request
   * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.connections.removeAiConnection({
   *         aiId: "aiId",
   *         connectionId: "connectionId"
   *     })
   */
  removeAiConnection(
    request: Darwin.RemoveAiConnectionRequest,
    requestOptions?: ConnectionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ConnectionRemovalResult>;
  private __removeAiConnection;
}
