import { Request, Response, NextFunction } from 'express'
import { getTokenHash, verifyToken } from '../../utils/TokenUtils'

export enum ITokenRole {
    ADMIN,
    USER,
}

export function validateToken(isAdmin = ITokenRole.USER) {
    return (req: Request, res: Response, next: NextFunction) => {
        const hash = getTokenHash('bearer', req.headers.authorization)
        if (hash) {
            const token = verifyToken(hash)
            if (token) {
                req.token = token
                if (isAdmin === ITokenRole.ADMIN && !req.token.admin) {
                    return res.status(401).json({ error: 'Unauthorized user' }).end()
                }
                return next()
            }
        }
        throw res.status(403).json({ error: 'Invalid authentication data' }).end()
    }
}