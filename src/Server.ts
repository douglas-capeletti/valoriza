import 'express-async-errors'
import 'reflect-metadata'
import './config/EnvConfig'
import './config/DatabaseConfig'

import express from "express"
import cors from "cors"
import router from "./Router"
import ErrorHandler from './middlewares/error/ErrorHandler'

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(ErrorHandler)

const port = process.env.API_PORT
const env = process.env.API_ENV

app.listen(port, () => {
    console.log(`==> Environment: ${env}`)
    console.log(`==> Server running at: http://0.0.0.0:${port}/\n`)
})
