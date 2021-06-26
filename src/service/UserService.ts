import { IUserRequest } from "../model/dto/UserDTO";
import { UsersRepositories } from "../repository/UserRepository";

export default class UserService {

    async createUser({ name, email, admin }: IUserRequest) {
        const repo = UsersRepositories.getInstance()
        
        const userAlreadyExists = await repo.findOne({ email })

        if (userAlreadyExists) {
            throw new Error(`Email '${email}' already exists`)
        }

        const user = repo.create({ name, email, admin })

        await repo.save(user)

        return user
    }
}