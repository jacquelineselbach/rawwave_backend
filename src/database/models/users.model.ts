import * as Mongoose from "mongoose";
import UserSchema from "../schemas/users.schema";
import { IUserDocument, IUserModel } from "../users/users.types";

export const UserModel = Mongoose.model<IUserDocument>(
  "user",
  UserSchema
) as IUserModel;
