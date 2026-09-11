import type { BaseClientOptions, BaseRequestOptions } from '../../../../BaseClient.js';
import { type NormalizedClientOptionsWithAuth } from '../../../../BaseClient.js';
import * as core from '../../../../core/index.js';
import * as Darwin from '../../../index.js';

export declare namespace AisClient {
  type Options = BaseClientOptions;
  interface RequestOptions extends BaseRequestOptions {}
}
/**
 * Manage canonical personal and business AI identities.
 */
export declare class AisClient {
  protected readonly _options: NormalizedClientOptionsWithAuth<AisClient.Options>;
  constructor(options: AisClient.Options);
  /**
   * Lists skills that can be assigned to a personal or business AI. Assigned skills are managed on the AI.
   *
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.listSkillCatalog()
   */
  listSkillCatalog(
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListSkillCatalogResponse>;
  private __listSkillCatalog;
  /**
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.listAIs()
   */
  listAIs(requestOptions?: AisClient.RequestOptions): core.HttpResponsePromise<Darwin.ListAIsResponse>;
  private __listAIs;
  /**
   * Every Darwin account already owns exactly one personal AI. This endpoint creates an additional business AI. A verified phone number may own up to three business AIs.
   *
   * @param {Darwin.CreateAiRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.createAi({
   *         name: "name"
   *     })
   */
  createAi(
    request: Darwin.CreateAiRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateAiResponse>;
  private __createAi;
  /**
   * @param {Darwin.GetAiRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.getAi({
   *         aiId: "aiId"
   *     })
   */
  getAi(
    request: Darwin.GetAiRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.GetAiResponse>;
  private __getAi;
  /**
   * @param {Darwin.UpdateAiRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.updateAi({
   *         aiId: "aiId"
   *     })
   */
  updateAi(
    request: Darwin.UpdateAiRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.UpdateAiResponse>;
  private __updateAi;
  /**
   * @param {Darwin.ListAiAssetsRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.listAiAssets({
   *         aiId: "aiId"
   *     })
   */
  listAiAssets(
    request: Darwin.ListAiAssetsRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListAiAssetsResponse>;
  private __listAiAssets;
  /**
   * @param {Darwin.CreateAiAssetRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.createAiAsset({
   *         aiId: "aiId",
   *         title: "title",
   *         sourceUrl: "sourceUrl"
   *     })
   */
  createAiAsset(
    request: Darwin.CreateAiAssetRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateAiAssetResponse>;
  private __createAiAsset;
  /**
   * @param {Darwin.BeginAiAssetUploadRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.beginAiAssetUpload({
   *         aiId: "aiId",
   *         title: "title",
   *         filename: "filename",
   *         mimeType: "mimeType",
   *         byteSize: 1
   *     })
   */
  beginAiAssetUpload(
    request: Darwin.BeginAiAssetUploadRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AiAssetUpload>;
  private __beginAiAssetUpload;
  /**
   * @param {Darwin.CompleteAiAssetUploadRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.completeAiAssetUpload({
   *         aiId: "aiId",
   *         assetId: "assetId"
   *     })
   */
  completeAiAssetUpload(
    request: Darwin.CompleteAiAssetUploadRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CompleteAiAssetUploadResponse>;
  private __completeAiAssetUpload;
  /**
   * @param {Darwin.DeleteAiAssetRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.deleteAiAsset({
   *         aiId: "aiId",
   *         assetId: "assetId"
   *     })
   */
  deleteAiAsset(
    request: Darwin.DeleteAiAssetRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.DeleteAiAssetResponse>;
  private __deleteAiAsset;
  /**
   * @param {Darwin.UpdateAiAssetRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.updateAiAsset({
   *         aiId: "aiId",
   *         assetId: "assetId"
   *     })
   */
  updateAiAsset(
    request: Darwin.UpdateAiAssetRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.UpdateAiAssetResponse>;
  private __updateAiAsset;
  /**
   * @param {Darwin.ListAiActivityRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.listAiActivity({
   *         aiId: "aiId"
   *     })
   */
  listAiActivity(
    request: Darwin.ListAiActivityRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.AiActivityPage>;
  private __listAiActivity;
  /**
   * @param {Darwin.ListAiMembersRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.listAiMembers({
   *         aiId: "aiId"
   *     })
   */
  listAiMembers(
    request: Darwin.ListAiMembersRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListAiMembersResponse>;
  private __listAiMembers;
  /**
   * @param {Darwin.RemoveAiMemberRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.removeAiMember({
   *         aiId: "aiId",
   *         membershipId: "membershipId"
   *     })
   */
  removeAiMember(
    request: Darwin.RemoveAiMemberRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.RemoveAiMemberResponse>;
  private __removeAiMember;
  /**
   * Owner transfers remain an interactive Darwin-app workflow.
   *
   * @param {Darwin.UpdateAiMemberRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.updateAiMember({
   *         aiId: "aiId",
   *         membershipId: "membershipId",
   *         role: "admin"
   *     })
   */
  updateAiMember(
    request: Darwin.UpdateAiMemberRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.UpdateAiMemberResponse>;
  private __updateAiMember;
  /**
   * @param {Darwin.ListAiInvitationsRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.listAiInvitations({
   *         aiId: "aiId"
   *     })
   */
  listAiInvitations(
    request: Darwin.ListAiInvitationsRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListAiInvitationsResponse>;
  private __listAiInvitations;
  /**
   * @param {Darwin.CreateAiInvitationRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.createAiInvitation({
   *         aiId: "aiId",
   *         email: "email"
   *     })
   */
  createAiInvitation(
    request: Darwin.CreateAiInvitationRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateAiInvitationResponse>;
  private __createAiInvitation;
  /**
   * @param {Darwin.RevokeAiInvitationRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.revokeAiInvitation({
   *         aiId: "aiId",
   *         invitationId: "invitationId"
   *     })
   */
  revokeAiInvitation(
    request: Darwin.RevokeAiInvitationRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.RevokeAiInvitationResponse>;
  private __revokeAiInvitation;
  /**
   * @param {Darwin.ListAccessPoliciesRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.listAccessPolicies({
   *         aiId: "aiId"
   *     })
   */
  listAccessPolicies(
    request: Darwin.ListAccessPoliciesRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.ListAccessPoliciesResponse>;
  private __listAccessPolicies;
  /**
   * Restricted policies support exact AIs, verified business attributes, and geography. Sensitive-trait targeting is rejected.
   *
   * @param {Darwin.CreateAccessPolicyRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.createAccessPolicy({
   *         aiId: "aiId",
   *         name: "name",
   *         visibility: "PUBLIC"
   *     })
   */
  createAccessPolicy(
    request: Darwin.CreateAccessPolicyRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.CreateAccessPolicyResponse>;
  private __createAccessPolicy;
  /**
   * @param {Darwin.UpdateAccessPolicyRequest} request
   * @param {AisClient.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @throws {@link Darwin.BadRequestError}
   * @throws {@link Darwin.UnauthorizedError}
   * @throws {@link Darwin.ForbiddenError}
   * @throws {@link Darwin.NotFoundError}
   * @throws {@link errors.DarwinError}
   * @throws {@link errors.DarwinTimeoutError}
   *
   * @example
   *     await client.ais.updateAccessPolicy({
   *         aiId: "aiId",
   *         policyId: "policyId"
   *     })
   */
  updateAccessPolicy(
    request: Darwin.UpdateAccessPolicyRequest,
    requestOptions?: AisClient.RequestOptions,
  ): core.HttpResponsePromise<Darwin.UpdateAccessPolicyResponse>;
  private __updateAccessPolicy;
}
