import { Pagination } from "@/types"

// post
export interface PostCommentRequest {
    slug: string;
    comment: string;
    parent_id?: number | string | undefined;
}

export interface PostCommentSuccessResponse {
    status: string;
    message: string;
    code: number;
}

export interface PostCommentErrorResponse {
    status: string;
    message: string;
    code: number;
    errors: PostCommentError[];
}

export interface PostCommentError {
    field: string;
    message: string;
}

// get comments
export interface GetCommentsParams {
    slug?: number | string | undefined;
    current_page?: number;
    per_page?: number;
}

export interface GetNewsCommentSuccessResponse {
    status: boolean;
    code: number;
    message: string;
    data: NewsComment[];
    pagination: Pagination;
}

export interface NewsComment {
    id: number;
    user_id: number;
    is_mine: boolean;
    is_liked: boolean;
    avatar: null | string;
    name: string;
    comment: string;
    commented_at: string;
    replies?: NewsComment[];
}


// edit comment
export interface EditCommentRequest {
    comment_id: number | string;
    comment: string;
}

export interface EditCommentSuccessResponse {
    status: string;
    message: string;
    code: number;
}

export interface EditCommentErrorResponse {
    status: string;
    message: string;
    code: number;
    errors: EditCommentError[];
}

export interface EditCommentError {
    field: string;
    message: string;
}


// delete comment
export interface DeleteCommentRequest {
    comment_id: number | string;
}

export interface DeleteCommentSuccessResponse {
    status: string;
    message: string;
    code: number;
}

export interface DeleteCommentErrorResponse {
    status: string;
    message: string;
    code: number;
    errors: DeleteCommentError[];
}

export interface DeleteCommentError {
    field: string;
    message: string;
}



// reaction
export interface NewsCommentReactionRequest {
    comment_id: number | string;
    reaction?: string;
}
export interface NewsCommentReactionSuccessResponse {
    status: string;
    message: string;
    code: number;
}

export interface NewsCommentReactionErrorResponse {
    status: string;
    message: string;
    code: number;
    errors: NewsCommentReactionError[];
}

export interface NewsCommentReactionError {
    field: string;
    message: string;
}
