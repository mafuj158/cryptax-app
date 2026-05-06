import { Pagination } from "@/types";

export interface GlobalSearchSuccessResponse {
    status: boolean;
    code: number;
    message: string;
    data: GlobalSearchData;
}

export interface GlobalSearchData {
    results: GlobalSearchResultItem[];
    pagination: Pagination;
}

export type GlobalSearchType = "news" | "crypto_store";

export type GlobalSearchResultItem = GlobalSearchNewsItem | GlobalSearchCryptoStoreItem;

export interface GlobalSearchNewsItem {
    type: "news";
    id: number;
    slug: string;
    title: string;
    likes_count: number;
    dislikes_count: number;
    comments_count: number;
    description: string;
    thumbnail: string;
    date: string;
    is_read: boolean;
    created_at: string;
}

export interface GlobalSearchCryptoStoreItem {
    type: "crypto_store";
    id: number;
    name: string;
    slug: string;
    short_description: string;
    image: string;
    avg_rating: string | number;
    ratings_count: number;
    created_at: string;
}



export interface GlobalSearchParams {
    current_page?: number;
    per_page?: number;
    type?: string | null;
    title?: string | null | undefined;
}