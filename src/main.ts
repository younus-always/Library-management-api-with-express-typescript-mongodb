import express, { Application, Request, Response } from "express"
import { bookRoute } from "./app/controllers/book.controller"
import { borrowRoute } from "./app/controllers/borrow.controller"

const app: Application = express()

app.use(express.json())
app.use("/api/books/", bookRoute)
app.use("/api/borrow", borrowRoute)

app.get('/', (req: Request, res: Response) => {
      try {
            res.status(200).send({
                  success: true,
                  message: "Welcome to Library Management API Services"
            })
      } catch (error: any) {
            res.status(400).send({
                  success: true,
                  message: error.message
            })
      }
})
export default app