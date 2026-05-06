import { User } from "@/types";

export interface UpdateSocialRequest {
    x_link?: string;
    linkedin_link?: string;
}

export interface UpdateSocialSuccessResponse {
    message: string;
    status: boolean;
    code: number;
    data: User;
}

export interface UpdateSocialErrorResponse {
    message: string;
    status: boolean;
    code: number;
    errors: UpdateSocialError[];
}

interface UpdateSocialError {
    field: string;
    message: string;
}
