export interface AiWalletBalance {
    /** Darwin-issued wallet money. Spendable and nonwithdrawable. */
    promotional: number;
    /** Card-funded wallet money. Spendable and nonwithdrawable. */
    funded: number;
    /** Settled seller proceeds that can be spent or withdrawn. */
    earned: number;
    /** Seller proceeds awaiting settlement. */
    pendingEarned: number;
    /** Funds held for approved work. */
    reserved: number;
    earnedDeficit: number;
    spendable: number;
    withdrawable: number;
}
