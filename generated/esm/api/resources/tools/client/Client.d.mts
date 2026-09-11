import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Darwin from "../../../index.mjs";
export declare namespace ToolsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Inspect executable Darwin tools. Generic execution requires owner credentials.
 */
export declare class ToolsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ToolsClient.Options>;
    constructor(options: ToolsClient.Options);
    /**
     * @param {ToolsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.tools.listTools()
     */
    listTools(requestOptions?: ToolsClient.RequestOptions): core.HttpResponsePromise<Darwin.ListToolsResponse>;
    private __listTools;
    /**
     * User API keys only. Sensitive actions may return an approval request.
     *
     * @param {Darwin.ExecuteToolRequest} request
     * @param {ToolsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Darwin.BadRequestError}
     * @throws {@link Darwin.UnauthorizedError}
     * @throws {@link Darwin.ForbiddenError}
     * @throws {@link Darwin.NotFoundError}
     * @throws {@link errors.DarwinError}
     * @throws {@link errors.DarwinTimeoutError}
     *
     * @example
     *     await client.tools.executeTool({
     *         tool: "tool"
     *     })
     */
    executeTool(request: Darwin.ExecuteToolRequest, requestOptions?: ToolsClient.RequestOptions): core.HttpResponsePromise<Darwin.ToolExecution>;
    private __executeTool;
}
