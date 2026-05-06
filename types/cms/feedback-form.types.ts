export interface FeedBackRequest {
    email?: string;
    feedback: string;
    anonymous: boolean;
}

export interface FeedBackSuccessResponse {
    status: boolean;
    code: number;
    message: string;
}

export interface FeedBackErrorResponse {
    status: boolean;
    code: number;
    message: string;
    errors: FeedBackError[];
}

export interface FeedBackError {
    field: string;
    message: string;
}