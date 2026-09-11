/**
 * @example
 *     {
 *         dealId: "dealId",
 *         action: "SEND"
 *     }
 */
export interface DealActionRequest {
  dealId: string;
  action: DealActionRequest.Action;
}
export declare namespace DealActionRequest {
  const Action: {
    readonly Send: 'SEND';
    readonly Accept: 'ACCEPT';
    readonly Reject: 'REJECT';
    readonly Withdraw: 'WITHDRAW';
  };
  type Action = (typeof Action)[keyof typeof Action];
}
