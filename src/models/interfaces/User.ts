export interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

export interface IUserResponse {
    id: string;
    name: string;
    email: string;
    admin: boolean;
}

export function toUserResponse(data: any): IUserResponse {
    return {
        id: data.id,
        name: data.name,
        email: data.email,
        admin: data.admin,
    }
}