import { Pagination } from "@/types";


export interface CategoryParams {
    current_page?: number;
    per_page?: number;
}

export interface NewsCategorySuccessResponse {
    status: boolean;
    code: number;
    message: string;
    data: Category[];
    pagination: Pagination;
}

export interface Category {
    type: string;
}