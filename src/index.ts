import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import { AppRouter } from "./AppRouter";

import "./controllers";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["klhgkjiuyrejkwrejhre"] }));
app.use(AppRouter.getInstance());

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
