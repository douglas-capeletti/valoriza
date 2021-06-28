import UserRepository from '../repositories/UserRepository'
import { compare } from 'bcryptjs'
import { decodeBasic, generateToken, getTokenHash } from '../utils/TokenUtils'

export default class AuthService {
    async authenticate(authorization?: string): Promise<string> {
        const hash = getTokenHash('basic', authorization)
        if (hash) {

            const content = decodeBasic(hash)
            if (content) {

                const user = await UserRepository.getInstance().findOne({ email: content.email })
                if (user) {

                    const passwordMatch = await compare(content.password, user.password)
                    if (passwordMatch) {

                        return generateToken(user)
                    }
                }
            }
        }
        throw new Error('Invalid authentication data')
    }


}
