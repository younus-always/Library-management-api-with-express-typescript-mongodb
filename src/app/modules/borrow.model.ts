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
                  required: true
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