import mongoose, { Document, Schema, Model } from "mongoose";
export interface IExpense extends Document {
  userId: string;
  category: string;
  amount: number;
  description?: string;
  date: Date;
  isRecurring: Boolean;
  recurrenceInterval: string;
  nextRecurrence: string;
}
const expenseSchema: Schema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  isRecurring: {
    type: Boolean,
    required: true,
  },
  nextRecurrence: {
    type: String,
  },
});
const Expense: Model<IExpense> =
  mongoose.models.Expense || mongoose.model<IExpense>("Expense", expenseSchema);

export default Expense;
