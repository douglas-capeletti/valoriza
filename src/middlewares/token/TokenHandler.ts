import { Request, Response, NextFunction } from 'express'
import { getTokenHash, verifyToken } from '../../utils/TokenUtils'

export function validateToken(isAdmin = false) {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log('HEADERS =>' ,req.headers.authorization)
        const hash = getTokenHash('bearer', req.headers.authorization)
        console.log('HASH => ' ,hash)
        if (hash) {
            const token = verifyToken(hash)
            console.log('TOKEN =>', token)
            if (token) {
                req.token = token
                if (isAdmin && !req.token.admin) {
                    return res.status(401).json({ error: 'Unauthorized user' }).end()
                }
                return next()
            }
        }
        throw res.status(403).json({ error: 'Invalid authentication data' }).end()
    }
}