import { Model, model, Schema } from "mongoose";
import { BookInstanceMethod, IBook } from "../interfaces/book.interface";
import Borrow from "./borrow.model";

const bookSchema = new Schema<IBook, Model<IBook>, BookInstanceMethod>(
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
                  unique: [true, "This ISBN number is already exist"],
                  required: [true, "ISBN number required!"]
            },
            copies: {
                  type: Number,
                  required: true
            },
            available: {
                  type: Boolean,
                  default: true
            }
      }, {
      versionKey: false,
      timestamps: true
})

// Inside book.model.ts
bookSchema.pre("findOneAndDelete", async function (next) {
      const doc = await this.model.findOne(this.getFilter());
      if (doc) {
            console.log("Deleting related borrows for book:", doc._id); // ✅ debug
            await Borrow.deleteMany({ book: doc._id });
      }
      next();
});


// Instance method to reduce copies and update availability
bookSchema.method("reduceCopies", async function reduceCopies(quantity: number) {
      // send not available copies enough
      if (this.copies < quantity) {
            throw new Error(`Not enough copies available! Available copies: ${this.copies}`);
      }
      // substract copies to quantity
      this.copies -= quantity;
      // if copies 0 available become false
      if (this.copies === 0) this.available = false;

      return this.save();
});

const Book = model("Book", bookSchema)
export default Book