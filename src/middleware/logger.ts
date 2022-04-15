import { Request, Response, NextFunction } from "express";

//sample middleare
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Redquest was made:", req.method, req.originalUrl, req.body);
  next();
}
