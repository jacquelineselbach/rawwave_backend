import * as express from "express";
import * as Mongoose from "mongoose";
import { connect } from "./database/database";

const app = express();
const port = 3000;

connect();

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
