import { User } from "./user.types";

export interface UpdateInfoRequest {
    first_name: string;
    last_name: string;
    phone: string;
    company_name: string | null;
    Chamber_of_Commerce_kvk_number: string | null;
    Chamber_of_Commerce: string | null;
    gender: string | null;
    dob: string | null;
    country: string | null;
    address: string | null;
}


export interface UpdateInfoSuccessResponse {
    message: string;
    status: boolean;
    code: number;
    data: User
}

export interface UpdateInfoErrorResponse {
    message: string;
    status: boolean;
    code: number;
    errors: UpdateInfoError[]
}

interface UpdateInfoError {
    field: string;
    message: string;
}

