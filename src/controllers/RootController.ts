import { Request, Response } from "express";
import { controller, get, use } from "./decorators";
import { logger, requireAuth } from "../middleware";

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response): void {
    if (req.session?.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
        `);
    } else {
      res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/auth/login">Login</a>
      </div>
      `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  @use(logger)
  getProtected(req: Request, res: Response): void {
    res.send("Welcome to protected route");
  }
}
