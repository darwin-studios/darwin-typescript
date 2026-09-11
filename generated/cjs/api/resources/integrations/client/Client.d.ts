import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace IntegrationsClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Discover provider toolkits and the capabilities they make available.
 */
export declare class IntegrationsClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<IntegrationsClient.Options>;
  constructor(options: IntegrationsClient.Options);
  /**
   * @param {Darwin.GetAiIntegrationsRequest} request
   * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.integrations.getAiIntegrations({
   *         aiId: "aiId"
   *     })
   */
  getAiIntegrations(
    request: Darwin.GetAiIntegrationsRequest,
    requestOptions?: IntegrationsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.IntegrationCatalog>;
  private __getAiIntegrations;
  /**
   * User API keys only.
   *
   * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.integrations.getIntegrations()
   */
  getIntegrations(requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<Darwin.Integrations>;
  private __getIntegrations;
}
