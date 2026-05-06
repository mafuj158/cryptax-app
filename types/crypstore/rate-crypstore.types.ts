export interface RateCrypstoreRequest {
    crypto_store_slug: string;
    rating: number;
    comment: string;
}

export interface RateCrypstoreSuccessResponse {
    status: boolean;
    code: number;
    message: string;
}


export interface RateCrypstoreErrorResponse {
    status: boolean;
    code: number;
    message: string;
    errors: RateCrypstoreError[];
}

export interface RateCrypstoreError {
    field: string;
    message: string;
}
