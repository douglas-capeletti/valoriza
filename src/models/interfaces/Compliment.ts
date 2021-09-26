export interface IComplimentRequest {
    senderId: string;
    receiverId: string;
    tagId: string;
    message: string;
}

export interface IComplimentResponse {
    id: string;
    senderId: string;
    receiverId: string;
    tagId: string;
    message: string;
}

export function toComplimentResponse(data: any): IComplimentResponse {
    return {
        id: data.id,
        senderId: data.senderId,
        receiverId: data.receiverId,
        tagId: data.tagId,
        message: data.message,
    }
}