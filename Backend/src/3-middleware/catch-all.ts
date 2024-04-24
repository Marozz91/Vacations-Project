import { NextFunction, Request, Response } from "express";

function catchAll(err: any, request: Request, response: Response, next: NextFunction) {

    // log the error:
    console.log(err);

    const status = err.status || 500; // Short circut

    // log to file:
    if (status >= 500) {
        response.status(status).send("Network Error");
    }

    let msg = err.message;

    // Response to client:
    response.status(status).send(msg);


}

export default catchAll;