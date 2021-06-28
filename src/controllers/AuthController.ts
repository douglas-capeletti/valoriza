import { Request, Response } from 'express'
import AuthService from '../services/AuthService'
import { getTokenHash } from '../utils/TokenUtils';

export default class AuthController {

    async authenticate(req: Request, res: Response) {
        const { authorization } = req.headers

        const authService = new AuthService();
        const token = await authService.authenticate(authorization)

        return res.json({ access_token: token })
    }
}