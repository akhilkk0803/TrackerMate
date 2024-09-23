import mongoose, { Document, Model, Schema } from "mongoose";
export interface IChat extends Document {
  userId: string;
  messages: [string];
}
const chatSchema: Schema = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  messages: [mongoose.Schema.Types.ObjectId],
});

const Chat: Model<IChat> =
  mongoose.models.Chat || mongoose.model("Chat", chatSchema);
export default Chat;
