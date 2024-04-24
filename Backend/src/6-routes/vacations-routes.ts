import express, { Request, Response, NextFunction } from "express"
import vacationsService from "../5-services/vacations-service";
import fileHandler from "../4-utils/file-handler";
import VacationModel from "../2-models/vacation-model";
import verifyAdmin from "../3-middleware/verify-admin";

const router = express.Router();

// GET http://localhost:4000/api/vacations
router.get("/vacations", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const vacations = await vacationsService.getAllVacations();
        response.json(vacations);
    } catch (err: any) {
        next(err);
    }
});


// GET http://localhost:4000/api/vacations-by-user/:userId
router.get("/vacations-by-user/:userId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const userId = +request.params.userId;
        const vacations = await vacationsService.getAllVacationsByUserId(userId);
        response.json(vacations);
    } catch (err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/vacations/:vacationId
router.get("/vacations/:vacationId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const vacationId = +request.params.vacationId;
        const vacation = await vacationsService.getOneVacation(vacationId);
        response.json(vacation);

    } catch (err: any) {
        next(err);
    }
});


// POST http://localhost:4000/api/vacations
router.post("/vacations", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {

    try {

        request.body.image = request.files?.image;

        const vacation = new VacationModel(request.body);

        const addedvacation = await vacationsService.AddVacation(vacation);
        response.status(201).json(addedvacation);
    }
    catch (err: any) {
        next(err);
    }
});


// PUT http://localhost:4000/api/vacations/:id
router.put("/vacations/:id([0-9]+)", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {

    try {

        // Take route id into the body:
        request.body.vacationId = +request.params.id;

        // Take image if exist:
        request.body.image = request.files?.image;

        // Extract the vacation from the body of the request:
        const vacation = new VacationModel(request.body);

        // Update vacation in the database:
        const updatedVacation = await vacationsService.updateVacation(vacation);

        // Response back:
        response.json(updatedVacation);

    } catch (err: any) {
        next(err);
    }

});


// GET http://localhost:4000/api/vacations/images/:imageName
router.get("/vacations/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    try {

        // Take image name form the Route:
        const imageName = request.params.imageName;

        // Get the full path to the image in the fs
        const imagePath = fileHandler.getImagePath(imageName);

        // Send Back the file to the client:
        response.sendFile(imagePath);

    } catch (err: any) {
        next(err);
    }
});


// DELETE http://localhost:4000/api/vacation/:id
router.delete("/vacations/:id([0-9]+)", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        await vacationsService.deleteVacation(id);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});


export default router;