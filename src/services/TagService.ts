import { ITagRequest } from "../models/interfaces/Tag";
import TagRepository from "../repositories/TagRepository";

export default class TagService {

    async createTag({ name }: ITagRequest) {
        const repo = TagRepository.getInstance()
        
        const tagAlreadyExists = await repo.findOne({ name })

        if (tagAlreadyExists) {
            throw new Error(`Tag '${name}' already exists`)
        }

        const user = repo.create({ name })

        await repo.save(user)

        return user
    }
}