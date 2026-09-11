export interface Error_ {
    statusCode?: number | undefined;
    message?: Error_.Message | undefined;
    error?: string | undefined;
}
export declare namespace Error_ {
    type Message = string | string[];
}
