import { Router } from "express";
import AuthController from "./controllers/AuthController";
import ComplimentController from "./controllers/ComplimentController";
import TagController from "./controllers/TagController";
import UserController from "./controllers/UserController"
import { validateToken } from "./middlewares/token/TokenHandler"

const router = Router()

const authController = new AuthController();
const userController = new UserController();
const tagController = new TagController();
const complimentController = new ComplimentController();

//No token needed
router.post('/auth', authController.authenticate)
router.post('/users', userController.createUser)

//Admin token needed
router.post('/tags', validateToken(true), tagController.createTag)

//Any token needed
router.post('/compliments', validateToken(), complimentController.createCompliment)

export default router;