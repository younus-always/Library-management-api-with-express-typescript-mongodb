import { Request, Response, Router } from "express";
import Book from "../models/book.model";

export const bookRoute = Router()

// create book
bookRoute.post('/', async (req: Request, res: Response) => {
      try {
            const { body } = req
            // const book = new Book(body)
            // await book.save()
            const book = await Book.create(body)

            res.status(201).send({
                  success: true,
                  message: "Book created successfuly",
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
// get all books
bookRoute.get('/', async (req: Request, res: Response) => {
      const { filter, sortBy, sort, limit, skip } = req.query
      let books: any = []

      try {
            // filter by genre
            const query: any = filter ? { genre: filter } : {}
            // sorting ascending and descending by createdAt
            const sortOptions: any = sortBy && typeof sortBy === 'string'
                  ? { [sortBy]: sort === 'desc' ? -1 : 1 } : {}
            // Safely parse and narrow limit
            const limitNum = typeof limit === 'string' && !isNaN(Number(limit))
                  ? parseInt(limit)
                  : 0;
            const skipNum = typeof skip === 'string' && !isNaN(Number(skip))
                  ? parseInt(skip)
                  : 0

            // if query exist then return
            if (filter || sortBy || limit || skip) {
                  books = await Book.find(query).sort(sortOptions).limit(limitNum).skip(skipNum)
            } else {
                  books = await Book.find()
            }

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
// get single book by id
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
// update book
bookRoute.put('/:bookId', async (req: Request, res: Response) => {
      try {
            const { bookId } = req.params
            const updatedData = req.body
            const book = await Book.findByIdAndUpdate(bookId, updatedData, { new: true })

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
// delete book
bookRoute.delete("/:bookId", async (req: Request, res: Response) => {
      try {
            const { bookId } = req.params;

            const book = await Book.findOneAndDelete({ _id: bookId });

            if (!book) {
                  res.status(404).send({
                        success: false,
                        message: "Book not found",
                  });
            } else {
                  res.status(200).send({
                        success: true,
                        message: "Book and related borrows deleted successfully",
                        data: book,
                  });
            }
      } catch (error: any) {
            res.status(400).send({
                  success: false,
                  message: error.message,
                  error,
            });
      }
});
