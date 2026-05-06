// types.ts
import { News, Pagination } from "@/types";

export interface MostPopularNewsListSuccessResponse {
    status: boolean;
    code: number;
    message: string;
    data: MostPopularNewsData;
}

export interface MostPopularNewsData {
    newslist: News[];
    pagination: Pagination;
}

export interface MostPopularNewsListParams {
    current_page?: number;
    per_page?: number;
}
