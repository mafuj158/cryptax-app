import { Pagination } from "@/types";

export type ChatRole = "user" | "bot" | string;

export type ChatOutcome = "answered" | "failed" | null;


export interface AiChatMessage {
    id: number;
    session_id: number;
    role: ChatRole;
    message: string;
    outcome: ChatOutcome;
    reason_code: string | null;
    category: string | null;
    created_at: string; // you can convert to Date if needed
}

// Data wrapper
export interface AiChatSessionData {
    session_id: number;
    messages: AiChatMessage[];
    pagination: Pagination;
}

// Main API response
export interface AiChatApiResponse {
    message: string;
    success: boolean;
    data: AiChatSessionData;
    code: number;
}

export interface AiConversationParams {
    current_page?: number;
    per_page?: number;
}