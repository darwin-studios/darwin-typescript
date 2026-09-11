export interface Tool {
    name: string;
    title: string;
    category: Tool.Category;
    description: string;
    risk: Tool.Risk;
    inputSchema: Record<string, unknown>;
}
export declare namespace Tool {
    const Category: {
        readonly Ais: "ais";
        readonly Goals: "goals";
        readonly Inbox: "inbox";
        readonly Network: "network";
        readonly Work: "work";
        readonly Routines: "routines";
        readonly Connections: "connections";
        readonly Payments: "payments";
        readonly Email: "email";
        readonly Calendar: "calendar";
        readonly Knowledge: "knowledge";
    };
    type Category = (typeof Category)[keyof typeof Category];
    const Risk: {
        readonly Read: "read";
        readonly Write: "write";
        readonly ApprovalRequired: "approval_required";
    };
    type Risk = (typeof Risk)[keyof typeof Risk];
}
