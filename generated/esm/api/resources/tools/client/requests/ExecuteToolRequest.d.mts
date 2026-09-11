/**
 * @example
 *     {
 *         tool: "tool"
 *     }
 */
export interface ExecuteToolRequest {
    tool: string;
    input?: Record<string, unknown>;
}
