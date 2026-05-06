export interface CrypstoreCmsResponse {
    status: boolean;
    message: string;
    code: number;
    data: CrypstoreCmsData;
}


export interface CrypstoreCmsData {
    id: number;
    title: string;
    description: string;
    image: string | null | undefined;
    partners: number;
    experience: number;
}