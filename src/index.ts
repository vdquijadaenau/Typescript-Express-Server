import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import { router } from "./routes/loginRoutes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
