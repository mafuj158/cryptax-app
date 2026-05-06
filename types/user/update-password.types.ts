import { User } from "@/types";

export interface UpdatePasswordRequest {
    password_confirmation: string;
    password: string;
    current_password: string;
}


export interface UpdatePasswordSuccessResponse {
    message: string;
    status: boolean;
    code: number;
    data: User
}

export interface UpdatePasswordErrorResponse {
    message: string;
    status: boolean;
    code: number;
    errors: UpdatePasswordError[]
}

interface UpdatePasswordError {
    field: string;
    message: string;
}

