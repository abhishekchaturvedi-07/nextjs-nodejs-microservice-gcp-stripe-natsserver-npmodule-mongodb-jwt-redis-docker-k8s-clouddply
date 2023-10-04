import { NextFunction, Request, Response } from "express";

import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if(!req.session?.jwt){
        // return res.status(401).send('Not Authorized from Middleware')
        throw new NotAuthorizedError
    }
    next()
}