import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>(
      {
            title: {
                  type: String,
                  required: true,
                  trim: true
            },
            author: {
                  type: String,
                  required: true,
                  trim: true
            },
            genre: {
                  type: String,
                  required: true,

                  enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"]
            },
            description: {
                  type: String,
                  trim: true
            },
            isbn: {
                  type: String,
                  required: true,
                  unique: true
            },
            copies: {
                  type: Number,
                  required: true,
                  min: 0
            },
            available: {
                  type: Boolean,
                  default: true
            }
      }, {
      versionKey: false,
      timestamps: true
})

const Book = model<IBook>("Book", bookSchema)
export default Book