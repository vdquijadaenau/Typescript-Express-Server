import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response): void => {
  res.send(`
<h1>Hi There!</h1>
`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
