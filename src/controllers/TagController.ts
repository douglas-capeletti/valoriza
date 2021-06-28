import { Request, Response } from 'express'
import { ITagRequest } from '../models/interfaces/Tag';
import TagService from '../services/TagService';


export default class TagController {

    async createTag(req: Request, res: Response) {
        const tagRequest: ITagRequest = { ...req.body }

        const service = new TagService()

        const user = await service.createTag(tagRequest)

        return res.json(user)
    }

}