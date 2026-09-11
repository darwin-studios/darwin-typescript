export interface AiDeploymentRequest {
    id: string;
    aiId: string;
    target: AiDeploymentRequest.Target;
    status: string;
    reason?: (string | null) | undefined;
    createdAt: string;
    updatedAt: string;
}
export declare namespace AiDeploymentRequest {
    const Target: {
        readonly DarwinCloud: "DARWIN_CLOUD";
        readonly DarwinPrivateCloud: "DARWIN_PRIVATE_CLOUD";
        readonly SelfHosted: "SELF_HOSTED";
    };
    type Target = (typeof Target)[keyof typeof Target];
}
