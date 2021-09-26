import { sign, verify } from "jsonwebtoken";
import UserEntity from "../models/entities/UserEntity";
import { IBasic } from "../models/interfaces/Basic";
import { IToken } from "../models/interfaces/Token";

const SECRET = process.env.TOKEN_SECRET ?? 'secret'
const EXPIRE_IN = process.env.TOKEN_EXPIRE_IN ?? '1'

export function getTokenHash(expectedType: string, authorization?: string): string | undefined {
    if (authorization) {
        const [type, hash] = authorization.split(' ')
        if (type.toLowerCase() === expectedType.toLowerCase()) {
            return hash;
        }
    }
    return undefined;
}

export function decodeBasic(basic: string): IBasic | undefined {
    const [email, password] = Buffer.from(basic, 'base64').toString('utf-8').split(':')
    return email && password ? { email, password } : undefined
}

export function generateToken({ id, email, admin }: UserEntity): string {
    const payload = { email, admin }
    const options = { subject: id, expiresIn: EXPIRE_IN }
    return sign(payload, SECRET, options)
}

export function verifyToken(hash: string): IToken | undefined {
    try {
        return verify(hash, SECRET) as IToken
    } catch (err) {
        return undefined
    }
}