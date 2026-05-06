import { User } from "@/types";

export interface UpdateAvatarRequest {
    avatar: File;
}


export interface UpdateAvatarSuccessResponse {
    message: string;
    status: boolean;
    code: number;
    data: User
}

export interface UpdateAvatarErrorResponse {
    message: string;
    status: boolean;
    code: number;
    errors: UpdateAvatarError[]
}

interface UpdateAvatarError {
    field: string;
    message: string;
}

