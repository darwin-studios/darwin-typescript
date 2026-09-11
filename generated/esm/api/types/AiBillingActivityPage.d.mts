export interface AiBillingActivityPage {
    wallet: AiBillingActivityPage.Wallet.Item[];
    nextCursor: AiBillingActivityPage.NextCursor;
}
export declare namespace AiBillingActivityPage {
    type Wallet = Wallet.Item[];
    namespace Wallet {
        interface Item {
            id: string;
            kind: string;
            availableDeltaMinor: number;
            reservedDeltaMinor: number;
            currency: string;
            createdAt: string;
        }
    }
    interface NextCursor {
        wallet: string | null;
    }
}
