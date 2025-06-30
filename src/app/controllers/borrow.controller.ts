import { Request, Response, Router } from "express";
import Borrow from "../modules/borrow.model";

export const borrowRoute = Router()

// create borrow book by reference using book ObjectId
borrowRoute.post('/', async (req: Request, res: Response) => {
      try {
            const { body } = req
            const borrow = await Borrow.create(body)

            res.status(200).send({
                  success: true,
                  message: "Book borrowed successfully",
                  data: borrow
            })
      } catch (error: any) {
            res.status(400).send({
                  success: false,
                  message: error.message,
                  error
            })
      }
})
// Retrived all borrowed books and book details using aggrregate populate()
borrowRoute.get('/', async (req: Request, res: Response) => {
      try {
            const borrowBooks = await Borrow.find().populate("book")

            res.status(200).send({
                  success: true,
                  message: "Borrowed books summary retrieved successfully",
                  data: borrowBooks
            })
      } catch (error: any) {
            res.status(400).send({
                  success: false,
                  message: error.message,
                  error
            })
      }
})