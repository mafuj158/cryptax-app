import { Pagination } from "@/types";

export interface NewsListSuccessResponse {
    status: boolean;
    code: number;
    message: string;
    data: NewsData;
}

export interface NewsData {
    unread_count: number;
    newslist: News[];
    pagination: Pagination;
}

export interface News {
    id: number;
    type: string;
    slug: string;
    title: string;
    likes_count: number;
    dislikes_count: number;
    comments_count: number;
    description: string;
    thumbnail: string;
    date: string;
    is_read: boolean;
}

export interface NewsListParams {
    current_page?: number;
    per_page?: number;
    type?: string | null;
}
