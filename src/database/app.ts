import express, { Application } from "express";
import bodyParser from "body-parser";

import connect from "./connect";
import { DB } from "./config/config";
import * as UserController from "./controllers/user.controllers";

const app: Application = express();
const port: number = 8080 || process.env.PORT;

connect(DB);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.get("/users", UserController.allUsers);

//app.get("/users/:id", UserController.showUsers);

app.post("/user", UserController.addUser);

app.patch("/user/update/:id", UserController.updateUser);

app.delete("/user/delete/:id", UserController.deleteUser);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});