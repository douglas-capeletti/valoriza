import { IComplimentRequest, IComplimentResponse, toComplimentResponse } from "../models/interfaces/Compliment";
import ComplimentRepository from "../repositories/ComplimentRepository";
import UserService from "./UserService";

export default class ComplimentService {

    private repo = ComplimentRepository.getInstance()

    async createCompliment(request: IComplimentRequest): Promise<IComplimentResponse> {
        const { receiverId, senderId } = request
        if (receiverId === senderId) {
            throw new Error(`Receiver should be different from sender`)
        }

        const receiverExists = await new UserService().userExists({ id: receiverId })

        if (!receiverExists) {
            throw new Error(`Receiver don't exists`)
        }

        const compliment = this.repo.create(request)

        await this.repo.save(compliment)

        return toComplimentResponse(compliment)
    }

    async listUserCompliments(params: {receiverId?: string}): Promise<Array<IComplimentResponse>> {

        const receiverExists = await new UserService().userExists({ id: receiverId })

        if (!receiverExists) {
            throw new Error(`Receiver don't exists`)
        }

        const compliments = await this.repo.find({ receiverId })

        return compliments.map(compliment => toComplimentResponse(compliment))
    }
}