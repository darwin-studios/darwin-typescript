import type * as Darwin from "../../../index.mjs";
/**
 * Preview proof envelope. It is shape-validated and redacted, but public proof exchange is not active yet; omit it to reuse a mapping or receive hosted onboarding.
 */
export type ResolveApplicationUserRequestProof = Darwin.ResolveApplicationUserRequestProof.DarwinOauth | Darwin.ResolveApplicationUserRequestProof.OidcIdToken | Darwin.ResolveApplicationUserRequestProof.TrustedApplicationAttestation;
export declare namespace ResolveApplicationUserRequestProof {
    interface DarwinOauth {
        type: "DARWIN_OAUTH";
        authorizationCode: string;
    }
    interface OidcIdToken {
        type: "OIDC_ID_TOKEN";
        token: string;
        nonce: string;
    }
    interface TrustedApplicationAttestation {
        type: "TRUSTED_APPLICATION_ATTESTATION";
        assertion: string;
    }
    /**
     * Preview proof envelope. It is shape-validated and redacted, but public proof exchange is not active yet; omit it to reuse a mapping or receive hosted onboarding.
     */
    type Response = Darwin.ResolveApplicationUserRequestProof.DarwinOauth | Darwin.ResolveApplicationUserRequestProof.OidcIdToken | Darwin.ResolveApplicationUserRequestProof.TrustedApplicationAttestation;
}
