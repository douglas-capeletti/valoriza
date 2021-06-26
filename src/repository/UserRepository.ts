import { EntityRepository, Repository, getCustomRepository } from 'typeorm'
import UserEntity from "../model/entities/UserEntity"

@EntityRepository(UserEntity)
export class UsersRepositories extends Repository<UserEntity> {

    static getInstance() {
        return getCustomRepository(UsersRepositories)
    }

}