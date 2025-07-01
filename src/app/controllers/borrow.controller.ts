import { Request, Response, Router } from "express";
import Borrow from "../models/borrow.model";
import Book from "../models/book.model";

export const borrowRoute = Router()

// create borrow book by reference using book ObjectId
borrowRoute.post('/', async (req: Request, res: Response) => {
      try {
            const { book: bookId, quantity } = req.body
            // const borrow = await Borrow.create(body)
            //1. Find the book
            const book = await Book.findById(bookId)
            if (!book) throw new Error("Book not found")

            // 2. Check and update the book copies
            await (book as any).reduceCopies(quantity)

            // 3. Save the borrow record
            const borrow = await Borrow.create({
                  book: bookId,
                  quantity
            })

            res.status(201).send({
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
            const borrowBooks = await Borrow.aggregate([
                  {
                        $lookup: {
                              from: "books",
                              localField: "book",
                              foreignField: "_id",
                              as: "borrowedBook"
                        }
                  }, {
                        $project: {
                              _id: 0,
                              book: {
                                    $map: {
                                          input: "$borrowedBook",
                                          as: "book",
                                          in: {
                                                title: "$$book.title",
                                                isbn: "$$book.isbn"
                                          }
                                    }
                              },
                              totalQuantity: "$quantity"
                        }
                  }
            ])

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