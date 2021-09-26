import { Request, Response } from 'express'
import { IComplimentRequest } from '../models/interfaces/Compliment';
import ComplimentService from '../services/ComplimentService';
import { badRequestIfAbsent } from '../utils/ValidationUtils';

export default class UserController {

    private service = new ComplimentService();

    async createCompliment(req: Request, res: Response) {
        const complimentRequest: IComplimentRequest = { ...req.body, senderId: req.token?.sub }

        const compliment = await this.service.createCompliment(complimentRequest)

        return res.json(compliment)
    }

    async listUserCompliments(req: Request, res: Response) {
        
        const receiverId = badRequestIfAbsent(req.token?.sub)

        const compliments = await this.service.listUserCompliments(receiverId)

        return res.json(compliments)
    }

}