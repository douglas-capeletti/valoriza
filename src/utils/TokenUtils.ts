import { sign, verify } from "jsonwebtoken";
import UserEntity from "../models/entities/UserEntity";
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

export function decodeBasic(basic: string) {
    const [email, password] = Buffer.from(basic, 'base64').toString('utf-8').split(':')
    return email && password ? { email, password } : undefined
}

export function generateToken({ id, email, admin }: UserEntity): string {
    const payload = { email, admin }
    const options = { subject: id, expiresIn: EXPIRE_IN }
    console.log('secret =>', SECRET)
    console.log('expires_in =>', EXPIRE_IN)
    return sign(payload, SECRET, options)
}

export function verifyToken(hash: string) {
    try {
        const content = verify(hash, SECRET)
        console.log('CONTENT =>', content)
        return content as IToken
    } catch (err) {
        return undefined
    }
}