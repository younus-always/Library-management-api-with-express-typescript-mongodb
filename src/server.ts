import mongoose from "mongoose";
import { mongo_uri, port } from "./app/config";
import app from "./main"
import { Server } from "http"

let server: Server;


async function main() {
      try {
            await mongoose.connect(mongo_uri as string)
            // console.log("mongoose connected successfuly")
            server = app.listen(port, () => {
                  console.log(`Library Management App Server Running Port ${port}`)
            })
      } catch (error) {
            console.log(error)
      }
}
main()