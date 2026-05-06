export interface SignupRequest {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    is_terms: boolean;
}

export interface SignupSuccessResponse {
    status: boolean;
    code: number;
    message: string;
}
export interface SignupErrorResponse {
    status: boolean;
    code:    number;
    message: string;
    errors:  SignupError[];
}

export interface SignupError {
    field:   string;
    message: string;
}
