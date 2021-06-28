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