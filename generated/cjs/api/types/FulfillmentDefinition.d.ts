export interface FulfillmentDefinition {
  mechanism: FulfillmentDefinition.Mechanism;
  bindingRef?: string | undefined;
  inputSchema?: Record<string, unknown> | undefined;
  outputSchema?: Record<string, unknown> | undefined;
  effects?: string[] | undefined;
}
export declare namespace FulfillmentDefinition {
  const Mechanism: {
    readonly Manual: 'MANUAL';
    readonly NativeConnector: 'NATIVE_CONNECTOR';
    readonly ProtoballsWorkflow: 'PROTOBALLS_WORKFLOW';
    readonly ExternalRedirect: 'EXTERNAL_REDIRECT';
  };
  type Mechanism = (typeof Mechanism)[keyof typeof Mechanism];
}
