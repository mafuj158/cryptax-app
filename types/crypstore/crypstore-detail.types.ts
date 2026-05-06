
export interface CrypStoreDetailsSuccessResponse {
    status: boolean;
    code: number;
    message: string;
    data: CrypstoreDetails

}

export interface CrypStoreDetailsErrorResponse {
    status: boolean;
    code: number;
    message: string;
}

export interface CrypstoreDetails {
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
    legacy: string;
    scale: string;
    experience_years: number;
    address: string;
    linkedin_url: string;
    twitter_url: string;
    website: string;
    contact_email: string | null;
    phone: string | null;
    our_mission: string;
    success_stories: string;
    expertises: Expertise[];
    verification_audits: Verification_Audit[];
    supported_ecosystems: Supported_Ecosystem[];
}

export interface Expertise {
    id: number;
    name: string;
}
export interface Verification_Audit {
    id: number;
    name: string;
}
export interface Supported_Ecosystem {
    id: number;
    name: string;
}