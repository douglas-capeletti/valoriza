import { EntityRepository, Repository, getCustomRepository } from 'typeorm'
import UserEntity from "../models/entities/UserEntity"

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> {

    static getInstance() {
        return getCustomRepository(UserRepository)
    }

}