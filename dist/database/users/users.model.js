"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const Mongoose = require("mongoose");
const users_schema_1 = require("./users.schema");
exports.UserModel = Mongoose.model("user", users_schema_1.default);
//# sourceMappingURL=users.model.js.map