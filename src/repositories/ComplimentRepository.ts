import { EntityRepository, Repository, getCustomRepository } from 'typeorm'
import ComplimentEntity from '../models/entities/ComplimentEntity'

@EntityRepository(ComplimentEntity)
export default class ComplimentRepository extends Repository<ComplimentEntity> {

    static getInstance() {
        return getCustomRepository(ComplimentRepository)
    }

}