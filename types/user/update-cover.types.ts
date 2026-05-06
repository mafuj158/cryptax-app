import { User } from "@/types";

export interface UpdateCoverRequest {
    cover_image: File;
}


export interface UpdateCoverSuccessResponse {
    message: string;
    status: boolean;
    code: number;
    data: User
}

export interface UpdateCoverErrorResponse {
    message: string;
    status: boolean;
    code: number;
    errors: UpdateCoverError[]
}

interface UpdateCoverError {
    field: string;
    message: string;
}

