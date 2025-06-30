import express, { Application, Request, Response } from "express"
import { bookRoute } from "./app/controllers/book.controller"
import { borrowRoute } from "./app/controllers/borrow.controller"

const app: Application = express()

console.log(a)
const a = 3;

app.use(express.json())
app.use("/api/books/", bookRoute)
app.use("/api/borrow", borrowRoute)

app.get('/', (req: Request, res: Response) => {
      res.send("Library Management App")
})
export default app