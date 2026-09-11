export interface NetworkAiProfile {
  id: string;
  type: string;
  name: string;
  handle: string | null;
  avatarUrl?: (string | null) | undefined;
  description?: (string | null) | undefined;
  visibility: NetworkAiProfile.Visibility;
  status: NetworkAiProfile.Status;
  exampleIntents: Record<string, unknown>;
  /** Accepts any additional properties */
  [key: string]: any;
}
export declare namespace NetworkAiProfile {
  const Visibility: {
    readonly Public: 'PUBLIC';
  };
  type Visibility = (typeof Visibility)[keyof typeof Visibility];
  const Status: {
    readonly Active: 'active';
  };
  type Status = (typeof Status)[keyof typeof Status];
}
