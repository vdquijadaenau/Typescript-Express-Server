import { Request, Response, NextFunction, RequestHandler } from "express";

export function bodyRequestValidators(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("Invalid Request");
      return;
    }
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send("Invalid Request");
        return;
      }
    }
    next();
  };
}
