/** The economic object. CAPACITY is displayed as Reservations in Darwin clients. Legacy values are accepted only by compatibility endpoints. */
export declare const ListingType: {
  readonly Product: 'PRODUCT';
  readonly Service: 'SERVICE';
  readonly Capability: 'CAPABILITY';
  readonly Capacity: 'CAPACITY';
  readonly Asset: 'ASSET';
  readonly Data: 'DATA';
  readonly Right: 'RIGHT';
};
export type ListingType = (typeof ListingType)[keyof typeof ListingType];
