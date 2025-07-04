/* eslint-disable no-undef */
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT
const mongo_uri = process.env.MONGO_URI

export {
      mongo_uri,
      port
}