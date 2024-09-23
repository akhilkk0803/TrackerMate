// creating budget schema in next js using mongoose
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBudget extends Document {
  userId: string;
  category: string;
  amount: number;
  isActive: boolean;
}

const budgetSchema: Schema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  amount: Number,
  isActive: Boolean,
});
const Budget: Model<IBudget> = mongoose.model<IBudget>("Budget", budgetSchema);
export default Budget;
