export interface ToolExecution {
  tool: string;
  result: Record<string, unknown>;
  traceId: string;
}
