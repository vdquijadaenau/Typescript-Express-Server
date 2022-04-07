import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("No permitted");
}

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === "g@g.com" && password === "12345678") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("you must provide email and password");
  }
});

router.get("/", (req, res) => {
  if (req.session?.loggedIn) {
    res.send(`
  <div>
    <div>You are logged in</div>
    <a href="/logout">Logout</a>
  </div>
  `);
  } else {
    res.send(`
<div>
  <div>You are not logged in</div>
  <a href="/login">Login</a>
</div>
`);
  }
});

router.get("/logout", (req, res) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route");
});

export { router };
