import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace RequestsClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Review and respond to inbound opportunities. Darwin keeps discovery and routing details behind the request.
 */
export declare class RequestsClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<RequestsClient.Options>;
  constructor(options: RequestsClient.Options);
  /**
   * Returns sanitized inbound requests for the selected AI without counterpart routing or infrastructure identifiers.
   *
   * @param {Darwin.ListRequestsRequest} request
   * @param {RequestsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.requests.listRequests()
   */
  listRequests(
    request?: Darwin.ListRequestsRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListRequestsResponse>;
  private __listRequests;
  /**
   * @param {Darwin.RequestActionRequest} request
   * @param {RequestsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.requests.actOnRequest({
   *         "Idempotency-Key": "Idempotency-Key",
   *         requestId: "requestId",
   *         action: "ACCEPT"
   *     })
   */
  actOnRequest(
    request: Darwin.RequestActionRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ActOnRequestResponse>;
  private __actOnRequest;
}
