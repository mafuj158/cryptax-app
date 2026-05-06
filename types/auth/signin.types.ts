import { User } from "@/types";

export interface SigninRequest {
    email: string;
    password: string;
}

export interface SigninSuccessResponse {
    success: boolean;
    code: number;
    message: string;
    token: string;
    expires_in: number;
    data: User;
}

export interface SigninErrorResponse {
    status: boolean;
    code: number;
    message: string;
    errors: SigninError[];
}

export interface SigninError {
    field: string;
    message: string;
}
