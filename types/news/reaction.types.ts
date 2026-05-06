
export enum ReactionType {
    LIKE = "like",
    DISLIKE = "dislike",
}

export interface ReactionRequest {
    slug: string | number | undefined;
    action: ReactionType;
}

export interface ReactionSuccessResponse {
    status: boolean;
    code: number;

}

export interface ReactionErrorResponse {
    status: boolean;
    code: number;
}