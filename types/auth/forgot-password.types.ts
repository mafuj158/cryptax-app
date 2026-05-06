export interface ForgotPasswordRequest {
    email: string;
}

export interface ForgotPasswordSuccessResponse {
    message: string;
    status: boolean;
    code: number;
}
export interface ForgotPasswordErrorResponse {
    status: boolean;
    code: number;
    message: string;
    errors: ForgotPasswordError[];
}

export interface ForgotPasswordError {
    field: string;
    message: string;
}