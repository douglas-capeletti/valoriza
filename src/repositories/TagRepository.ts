import { EntityRepository, Repository, getCustomRepository } from 'typeorm'
import TagEntity from '../models/entities/TagEntity'

@EntityRepository(TagEntity)
export default class TagRepository extends Repository<TagEntity> {

    static getInstance() {
        return getCustomRepository(TagRepository)
    }

}