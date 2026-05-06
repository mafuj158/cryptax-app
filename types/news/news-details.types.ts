export interface NewsDetailsSuccessResponse {
    status: boolean;
    code: number;
    message: string;
    data: NewsDetailsData;
}

export interface NewsDetailsData {
    id: number;
    is_subscribed: number;
    title: string;
    description: string;
    type: string;
    date: string;
    reading_time: string;
    details: NewsDetailsSection[];
    total_comments: number;
    total_likes: number;
    total_dislike: number;
    is_liked: boolean;
    is_disliked: boolean;
    thumbnail: string;
}

export interface NewsDetailsSection {
    title: string;
    description: string;
    images: NewsDetailsImage[];
}

export interface NewsDetailsImage {
    image: string;
}

export interface NewsDetailsParams {
    slug: string;
}