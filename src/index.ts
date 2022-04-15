import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import { router } from "./routes/loginRoutes";
import { AppRouter } from "./AppRouter";

import "./controllers/LoginController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["klhgkjiuyrejkwrejhre"] }));
app.use(router);
app.use(AppRouter.getInstance());

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
