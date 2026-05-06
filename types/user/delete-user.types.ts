
export interface DeleteUserSuccessResponse {
    message: string;
    status: boolean;
    code: number;
}

export interface DeleteUserErrorResponse {
    message: string;
    status: boolean;
    code: number;
    errors: DeleteUserError[]
}

interface DeleteUserError {
    field: string;
    message: string;
}

