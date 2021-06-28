import { IToken } from "../../models/interfaces/Token";

declare global {
    namespace Express {
        interface Request {
            token?: IToken
        }
    }
}