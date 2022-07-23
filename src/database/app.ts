import express, { Application } from "express";
import bodyParser from "body-parser";

import connect from "./connect";
import { db } from "./config/config";
import * as UserController from "./controllers/user.controllers";

const app: Application = express();
const port: number = 8080 || process.env.PORT;

connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.get("/users", BookController.allUsers);

//app.get("/users/:id", BookController.showUsers);

app.post("/users", UserController.addUser);

app.patch("/users/:id", UserController.updateUser);

app.delete("/users/:id", UserController.deleteUser);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});