export interface DeletedResource {
    id: string;
    status: DeletedResource.Status;
}
export declare namespace DeletedResource {
    const Status: {
        readonly Archived: "archived";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
