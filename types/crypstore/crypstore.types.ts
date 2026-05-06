import { Pagination } from "@/types";

export interface CrypStoreListSuccessResponse {
    status: boolean;
    code: number;
    message: string;
    data: Crypstore[];
    total_crypto_stores: number;
    total_years_of_experience: string;
    pagination: Pagination;
}
export interface Crypstore {
    id: number;
    name: string;
    slug: string;
    title: string;
    short_description: string;
    image: string;
    type: string;
    created_at: string;
    updated_at: string;
    avg_rating: number;
    ratings_count: number;
}

export interface CrypstoreListParams {
    current_page?: number;
    per_page?: number;
    type?: string | null;
}
