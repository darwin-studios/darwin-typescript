export declare const NetworkCategory: {
  readonly Creators: 'creators';
  readonly People: 'people';
  readonly Businesses: 'businesses';
  readonly Products: 'products';
  readonly Services: 'services';
  readonly Apps: 'apps';
  readonly Data: 'data';
  readonly Assets: 'assets';
  readonly Managers: 'managers';
};
export type NetworkCategory = (typeof NetworkCategory)[keyof typeof NetworkCategory];
