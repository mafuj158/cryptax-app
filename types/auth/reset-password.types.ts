export interface ResetPasswordRequest {
    password: string;
    password_confirmation: string;
    token: string;

}

export interface ResetPasswordSuccessResponse {
    message: string;
    status: boolean;
    code: number;
}
export interface ResetPasswordErrorResponse {
    status: boolean;
    code: number;
    message: string;
    errors: ResetPasswordError[];
}

export interface ResetPasswordError {
    field: string;
    message: string;
}