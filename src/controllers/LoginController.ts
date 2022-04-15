import { Request, Response } from "express";
import { get, controller, use, bodyValidators, post } from "./decorators";
import { logger } from "../middleware";

@controller("/auth")
class LoginController {
  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="POST">
          <div>
              <label>Email:</label>
              <input name="email"/>
          </div>
          <div>
              <label>Password:</label>
              <input name="password"/>
          </div>
          <button>Submit</button>
        </form>
        `);
  }

  @post("/login")
  @bodyValidators("email", "password")
  @use(logger)
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;
    if (email === "g@g.com" && password === "12345678") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("you must provide valid email and password");
    }
  }

  @get("/logout")
  @use(logger)
  getLogout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect("/");
  }
}
