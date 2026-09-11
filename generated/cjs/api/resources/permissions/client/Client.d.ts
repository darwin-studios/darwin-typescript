import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace PermissionsClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Inspect the visibility and access policies applied to an AI.
 */
export declare class PermissionsClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<PermissionsClient.Options>;
  constructor(options: PermissionsClient.Options);
  /**
   * @param {Darwin.GetAiPermissionsRequest} request
   * @param {PermissionsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.permissions.getAiPermissions({
   *         aiId: "aiId"
   *     })
   */
  getAiPermissions(
    request: Darwin.GetAiPermissionsRequest,
    requestOptions?: PermissionsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetAiPermissionsResponse>;
  private __getAiPermissions;
}
