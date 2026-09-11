export interface GoalActionRequest {
    action: GoalActionRequest.Action;
    pausedUntil?: string | undefined;
}
export declare namespace GoalActionRequest {
    const Action: {
        readonly Pause: "PAUSE";
        readonly Resume: "RESUME";
        readonly Complete: "COMPLETE";
        readonly Archive: "ARCHIVE";
    };
    type Action = (typeof Action)[keyof typeof Action];
}
