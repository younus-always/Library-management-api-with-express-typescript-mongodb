import { Request, Response, Router } from "express";
import Book from "../modules/book.model";

export const bookRoute = Router()


bookRoute.post('/', async (req: Request, res: Response) => {
      try {
            const { body } = req
            const books = new Book(body)
            await books.save()

            res.status(200).send({
                  success: true,
                  message: "Book created successfuly",
                  data: books
            })
      } catch (error: any) {
            res.status(400).send({
                  success: false,
                  message: error.message,
                  error
            })
      }
})

bookRoute.get('/', async (req: Request, res: Response) => {
      try {
            const books = await Book.find()

            res.status(200).send({
                  success: true,
                  message: "All books retrived successfuly",
                  data: books
            })
      } catch (error: any) {
            res.status(400).send({
                  success: false,
                  message: error.message,
                  error
            })
      }
})

bookRoute.get('/:bookId', async (req: Request, res: Response) => {
      try {
            const { bookId } = req.params
            const book = await Book.findOne({ _id: bookId })

            res.status(200).send({
                  success: true,
                  message: "Single book retrived successfuly",
                  data: book
            })
      } catch (error: any) {
            res.status(400).send({
                  success: false,
                  message: error.message,
                  error
            })
      }
})

bookRoute.patch('/:bookId', async (req: Request, res: Response) => {
      try {
            const { bookId } = req.params
            const updatedData = req.body
            const book = await Book.findByIdAndUpdate(bookId, updatedData)

            res.status(200).send({
                  success: true,
                  message: "Book updated successfuly",
                  data: book
            })
      } catch (error: any) {
            res.status(400).send({
                  success: false,
                  message: error.message,
                  error
            })
      }
})

bookRoute.delete('/:bookId', async (req: Request, res: Response) => {
      try {
            const { bookId } = req.params
            const book = await Book.findByIdAndDelete(bookId)
            console.log(book)

            res.status(200).send({
                  success: true,
                  message: "Book deleted successfuly",
                  data: book
            })
      } catch (error: any) {
            res.status(400).send({
                  success: false,
                  message: error.message,
                  error
            })
      }
})