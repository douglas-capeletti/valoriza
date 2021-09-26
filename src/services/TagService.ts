import { ITagRequest, ITagResponse, toTagResponse } from "../models/interfaces/Tag";
import TagRepository from "../repositories/TagRepository";

export default class TagService {

    async createTag({ name }: ITagRequest): Promise<ITagResponse> {
        const repo = TagRepository.getInstance()
        
        const tagAlreadyExists = await repo.findOne({ name })

        if (tagAlreadyExists) {
            throw new Error(`Tag '${name}' already exists`)
        }

        const tag = repo.create({ name })

        await repo.save(tag)

        return toTagResponse(tag)
    }
}