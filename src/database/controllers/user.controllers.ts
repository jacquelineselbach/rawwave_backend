import { Request, Response } from "express";
import User from "../models/user.model";

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
export const addUser = (req: Request, res: Response) => {
    const user = new User(req.body);
    user.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
    });
};

export const updateUser = (req: Request, res: Response) => {
    let user = User.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, user: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(user + "Could not be updated" );
            }
        }
    );
};

export const deleteUser = (req: Request, res: Response) => {
    const user = User.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("User deleted from database");
        }
    });
};