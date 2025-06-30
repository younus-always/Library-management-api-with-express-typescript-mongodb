import { Request, Response, Router } from "express";
import app from "../../main";
import Borrow from "../modules/borrow.model";

export const borrowRoute = Router()

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
borrowRoute.get('/', async (req: Request, res: Response) => {
      try {
            const borrows = await Borrow.find()

            res.status(200).send({
                  success: true,
                  message: "Borrowed books summary retrieved successfully",
                  data: borrows
            })
      } catch (error: any) {
            res.status(400).send({
                  success: false,
                  message: error.message,
                  error
            })
      }
})