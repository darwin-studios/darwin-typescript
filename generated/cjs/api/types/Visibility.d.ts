export declare const Visibility: {
  readonly Public: 'PUBLIC';
  readonly Restricted: 'RESTRICTED';
  readonly Private: 'PRIVATE';
};
export type Visibility = (typeof Visibility)[keyof typeof Visibility];
