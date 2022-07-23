import mongoose, { Schema, Document } from "mongoose";

/**
 Schema for for RawWave User
 **/
export interface UserInterface extends Document {
  nickName: string;
  password: string;
}
const UserSchema: Schema = new Schema({
  nickName: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model<UserInterface>("User", UserSchema)

export default User;
