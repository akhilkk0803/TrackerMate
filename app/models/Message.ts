// creating message schema in next js
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMessage extends Document {
  chatId: string;
  query: string;
  response: string;
}

const messageSchema: Schema = new Schema({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});
const Message: Model<IMessage> =
  mongoose.models.Message || mongoose.model<IMessage>("Message", messageSchema);
export default Message;
