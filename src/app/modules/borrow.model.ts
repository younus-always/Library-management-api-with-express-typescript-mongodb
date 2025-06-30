import { model, Schema } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interface";

const borrowSchema = new Schema<IBorrow>(
      {
            book: {
                  type: Schema.Types.ObjectId,
                  ref: "Book",
                  required: true
            },
            quantity: {
                  type: Number,
                  required: [true, "Quantity is required!"],
                  min: [1, "Borrow a book atleast 1"]
            },
            dueDate: {
                  type: Date,
                  required: true,
                  default: new Date()
            },
      }, {
      versionKey: false
})

const Borrow = model<IBorrow>("Borrow", borrowSchema)
export default Borrow