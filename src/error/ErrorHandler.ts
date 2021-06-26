import { Request, Response, NextFunction } from 'express'

export default function handle(err: Error, req: Request, res: Response, next: NextFunction) {
    return err instanceof Error ?
        res.status(400).json({ error: err.message }) :
        res.status(500).json({ error: 'Internal server error' })
}