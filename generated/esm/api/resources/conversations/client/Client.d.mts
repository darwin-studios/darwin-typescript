import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace ConversationsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Start conversations and exchange messages with an account’s AIs.
 */
export declare class ConversationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ConversationsClient.Options>;
    constructor(options: ConversationsClient.Options);
    /**
     * @param {Darwin.GetSelectedAiConversationRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.conversations.getSelectedAiConversation()
     */
    getSelectedAiConversation(request?: Darwin.GetSelectedAiConversationRequest, requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ConversationPage>;
    private __getSelectedAiConversation;
    /**
     * When aiId is omitted, Darwin infers the intended accessible AI from natural language and current context.
     *
     * @param {Darwin.CreateAiMessageRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.conversations.createMessage({
     *         content: "content"
     *     })
     */
    createMessage(request: Darwin.CreateAiMessageRequest, requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ConversationTurn>;
    private __createMessage;
    /**
     * @param {Darwin.ListAiConversationsRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.conversations.listAiConversations({
     *         aiId: "aiId"
     *     })
     */
    listAiConversations(request: Darwin.ListAiConversationsRequest, requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ListAiConversationsResponse>;
    private __listAiConversations;
    /**
     * @param {Darwin.CreateAiConversationRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.conversations.createAiConversation({
     *         aiId: "aiId"
     *     })
     */
    createAiConversation(request: Darwin.CreateAiConversationRequest, requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ConversationPage>;
    private __createAiConversation;
    /**
     * @param {Darwin.GetConversationRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.conversations.getConversation({
     *         conversationId: "conversationId"
     *     })
     */
    getConversation(request: Darwin.GetConversationRequest, requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ConversationPage>;
    private __getConversation;
    /**
     * @param {Darwin.CreateConversationMessageRequest} request
     * @param {ConversationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.conversations.createConversationMessage({
     *         conversationId: "conversationId",
     *         content: "content"
     *     })
     */
    createConversationMessage(request: Darwin.CreateConversationMessageRequest, requestOptions?: ConversationsClient.RequestOptions): core.HttpResponsePromise<Darwin.ConversationTurn>;
    private __createConversationMessage;
}
