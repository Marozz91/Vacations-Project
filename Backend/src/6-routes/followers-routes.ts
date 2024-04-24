import express, { NextFunction, Request, Response } from "express";
import followersService from "../5-services/followers-service";

// Create Router:
const router = express.Router();


// GET http://localhost:4000/api/followers/:userId/:vacationId
router.get("/followers/:userId([0-9]+)/:vacationId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const userId = +request.params.userId;
        const vacationId = +request.params.vacationId;
        const isFollowing = await followersService.isUserFollowing(userId, vacationId);
        response.json(isFollowing);
    } catch (error: any) {
        next(error);
    }
});

// POST http://localhost:4000/api/followers/:userId/:vacationId
router.post("/followers/:userId([0-9]+)/:vacationId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const userId = +request.body.userId;
        const vacationId = +request.body.vacationId;
        const addedFollower = await followersService.addFollower(userId, vacationId);
        response.status(201).json(addedFollower);

    } catch (error: any) {
        next(error);
    }
});


// DELETE http://localhost:4000/api/followers/:userId/:vacationId
router.delete("/followers/:userId([0-9]+)/:vacationId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const userId = +request.params.userId;
        const vacationId = +request.params.vacationId;
        await followersService.removeFollower(userId, vacationId);
        response.sendStatus(204);
    } catch (error: any) {
        next(error);
    }
});


export default router;
