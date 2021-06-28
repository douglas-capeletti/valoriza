import { Request, Response } from 'express'
import { IComplimentRequest } from '../models/interfaces/Compliment';
import ComplimentService from '../services/ComplimentService';

export default class UserController {

    async createCompliment(req: Request, res: Response) {
        const complimentRequest: IComplimentRequest = { ...req.body }

        const service = new ComplimentService()

        const user = await service.createCompliment(complimentRequest)

        return res.json(user)
    }

}