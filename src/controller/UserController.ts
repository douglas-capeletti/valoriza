import { Request, Response } from 'express'
import { IUserRequest } from '../model/dto/UserDTO';
import UserService from '../service/UserService';


export default class UserController {

    async createUser(req: Request, res: Response) {
        const userRequest: IUserRequest = { ...req.body }

        const service = new UserService()

        const user = await service.createUser(userRequest)

        return res.json(user)
    }

}