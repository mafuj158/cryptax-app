export interface AboutCryptaxResponse {
    success: boolean;
    message: string;
    data: AboutCryptaxData;
}

export interface AboutCryptaxData {
    updated_at: Date;
    about: string;
    mission: string;
    team: CryptaxTeam[];
}

export interface CryptaxTeam {
    name: string;
    role: string;
    image: string;
}
