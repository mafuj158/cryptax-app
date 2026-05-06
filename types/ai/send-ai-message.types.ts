import { AiChatMessage } from "./get-ai-conversations.types";



export interface AiSendMessageRequest {
    question: string;
    session_id: number;
    language: string;
}
export interface AiSendMessageResponse {
    message: string;
    success: boolean;
    data: {
        session_id: number;
        messages: AiChatMessage;
    }
    code: number;
}
