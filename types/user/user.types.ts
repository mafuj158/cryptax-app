export interface User {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    company_name: string | null;
    Chamber_of_Commerce_kvk_number: string | null;
    Chamber_of_Commerce: string | null;
    email: string;
    avatar: string | null;
    gender: string | null;
    cover_image: string | null;
    dob: string | null;
    country: string | null;
    address: string | null;
    x: string | null;
    linkedin: string | null;
    is_subscribed: boolean;
}

export interface UserSuccessResponse {
    status: boolean;
    message: string;
    code: number;
    data: User;
}

export interface UserErrorResponse {
    status: boolean;
    message: string;
    code: number;
}