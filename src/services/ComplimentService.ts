import { IComplimentRequest } from "../models/interfaces/Compliment";
import ComplimentRepository from "../repositories/ComplimentRepository";
import UserService from "./UserService";

export default class ComplimentService {

    async createCompliment(request: IComplimentRequest) {
        const { receiverId, senderId } = request
        if (receiverId === senderId) {
            throw new Error(`Receiver should be different from sender`)
        }

        const userService = new UserService()
        const receiverExists = await userService.userExists({ id: receiverId })

        if (!receiverExists) {
            throw new Error(`Receiver don't exists`)
        }

        const repo = ComplimentRepository.getInstance()

        const complient = repo.create(request)

        await repo.save(complient)

        return complient
    }
}