"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
//export const allBooks = (req: Request, res: Response) => {
//    const books = User.find((err: any, books: any) => {
//        if (err) {
//            res.send(err);
//        } else {
//            res.send(books);
//        }
//    });
//};
//export const getUser = (req: Request, res: Response) => {
//    const book = User.findById(req.params.id, (err: any, book: any) => {
//        if (err) {
//            res.send(err);
//        } else {
//            res.send(book);
//        }
//    });
//};
const addUser = (req, res) => {
    const user = new user_model_1.default(req.body);
    user.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.addUser = addUser;
const updateUser = (req, res) => {
    let user = user_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const user = user_model_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Book deleted from database");
        }
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controllers.js.map