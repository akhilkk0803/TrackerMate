import mongoose, { Schema, Document, Model } from "mongoose";
export interface IUser extends Document {
  username: string;
  hashedPassword: string;
  notification: Boolean;
  currency: string;
}
const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  notification: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
