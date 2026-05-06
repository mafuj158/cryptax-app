import { User } from "@/types";
export type SocialProvider = "google" | "apple" | "facebook";

export interface SocialLoginRequest {
    token: string;
    provider: SocialProvider
}

export interface SocialLoginSuccessResponse {
    success: boolean;
    code: number;
    message: string;
    token: string;
    expires_in: number;
    data: User;
}

export interface SocialLoginErrorResponse {
    status: boolean;
    code: number;
    message: string;
    errors: SocialLoginError[];
}

export interface SocialLoginError {
    field: string;
    message: string;
}


export interface GoogleLoginResponse {
    access_token: string;
    authuser: string;
    expires_in: number;
    iss: string;
    prompt: string;
    scope: string;
    token_type: string;
}
