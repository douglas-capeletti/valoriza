export interface ITagRequest {
    name: string;
}

export interface ITagResponse {
    id: string;
    name: string;
}

export function toTagResponse(data: any): ITagResponse {
    return {
        id: data.id,
        name: data.name,
    }
}