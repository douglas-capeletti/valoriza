import { FindConditions, FindOneOptions } from 'typeorm'
import { hash } from "bcryptjs";
import { IUserRequest, IUserResponse, toUserResponse } from "../models/interfaces/User";
import UserEntity from "../models/entities/UserEntity";
import UserRepository from "../repositories/UserRepository";

export default class UserService {

    async createUser(request: IUserRequest): Promise<IUserResponse> {
        const repo = UserRepository.getInstance()

        const userAlreadyExists = await this.userExists({ email: request.email })

        if (userAlreadyExists) {
            throw new Error(`Email '${request.email}' already exists`)
        }

        request.password = await hash(request.password, 8)
        const user = repo.create(request)

        await repo.save(user)

        return toUserResponse(user)
    }

    async userExists(conditions?: FindConditions<UserEntity>, options?: FindOneOptions<UserEntity>) {
        const repo = UserRepository.getInstance()
        const userAlreadyExists = await repo.findOne(conditions, options)
        return !!userAlreadyExists
    }
}