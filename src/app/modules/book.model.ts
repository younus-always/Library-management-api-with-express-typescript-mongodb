import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>(
      {
            title: {
                  type: String,
                  required: [true, "Title is required!"],
                  trim: true
            },
            author: {
                  type: String,
                  required: [true, "Author name is required!"],
                  trim: true
            },
            genre: {
                  type: String,
                  required: [true, "Genre is required!"],
                  uppercase: true,
                  enum: {
                        values: ["FICTION", "NON_FICTION", "SCIENCE",
                              "HISTORY", "BIOGRAPHY", "FANTASY"],
                        message: "{VALUE} is not valid genre."
                  }
            },
            description: {
                  type: String,
                  trim: true,
                  default: ""
            },
            isbn: {
                  type: String,
                  unique: [true, "This isbn number is already exist"],
                  required: [true, "Isbn number required!"]
            },
            copies: {
                  type: Number,
                  required: true,
                  min: [1, "Add minimum copies atleast 1"]
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