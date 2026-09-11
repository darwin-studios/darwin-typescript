import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace SkillsClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Inspect and configure versioned AI skills.
 */
export declare class SkillsClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<SkillsClient.Options>;
  constructor(options: SkillsClient.Options);
  /**
   * @param {Darwin.ListAiSkillsRequest} request
   * @param {SkillsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.skills.listAiSkills({
   *         aiId: "aiId"
   *     })
   */
  listAiSkills(
    request: Darwin.ListAiSkillsRequest,
    requestOptions?: SkillsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListAiSkillsResponse>;
  private __listAiSkills;
  /**
   * @param {Darwin.CreateAiSkillRequest} request
   * @param {SkillsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.skills.createAiSkill({
   *         aiId: "aiId",
   *         name: "name"
   *     })
   */
  createAiSkill(
    request: Darwin.CreateAiSkillRequest,
    requestOptions?: SkillsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateAiSkillResponse>;
  private __createAiSkill;
  /**
   * @param {Darwin.DeleteAiSkillRequest} request
   * @param {SkillsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.skills.deleteAiSkill({
   *         aiId: "aiId",
   *         skillId: "skillId"
   *     })
   */
  deleteAiSkill(
    request: Darwin.DeleteAiSkillRequest,
    requestOptions?: SkillsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.DeleteAiSkillResponse>;
  private __deleteAiSkill;
  /**
   * @param {Darwin.UpdateAiSkillRequest} request
   * @param {SkillsClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.skills.updateAiSkill({
   *         aiId: "aiId",
   *         skillId: "skillId"
   *     })
   */
  updateAiSkill(
    request: Darwin.UpdateAiSkillRequest,
    requestOptions?: SkillsClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.UpdateAiSkillResponse>;
  private __updateAiSkill;
}
