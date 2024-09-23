import mongoose, { Document, Schema, Model } from "mongoose";

export interface ICategory extends Document {
  name: string;
  userId?: string;
  isDefault: Boolean;
}

const categorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userId: mongoose.Schema.Types.ObjectId,
  isDefault: {
    type: Boolean,
    required: true,
  },
});

const Category: Model<ICategory> = mongoose.model<ICategory>(
  "Category",
  categorySchema
);
export default Category;
