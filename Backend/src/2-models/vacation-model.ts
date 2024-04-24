import Joi from "joi";
import { ValidationError } from "./client-errors";
import { UploadedFile } from "express-fileupload";


class VacationModel {

    public vacationId: number;
    public destination: string;
    public description: string;
    public checkIn: string;
    public checkOut: string;
    public price: number;
    public imageUrl: string;
    public image: UploadedFile;

    public constructor(vacation: VacationModel) {

        this.vacationId = vacation.vacationId;
        this.destination = vacation.destination;
        this.description = vacation.description;
        this.checkIn = vacation.checkIn;
        this.checkOut = vacation.checkOut;
        this.price = vacation.price;
        this.imageUrl = vacation.imageUrl;
        this.image = vacation.image;

    }

    public validate(): void {
        const result = VacationModel.ValidationSchema.validate(this);
        if (result.error) throw new ValidationError(result.error.message);
    }

    public static ValidationSchema = Joi.object({

        vacationId: Joi.number().positive().integer().optional(),
        destination: Joi.string().min(3).max(25).required(),
        description: Joi.string().min(4).max(2000).required(),
        checkIn: Joi.date().required(),
        checkOut: Joi.date().required().greater(Joi.ref(('checkIn'))),
        price: Joi.number().positive().integer().max(10000).required().required(),
        imageUrl: Joi.optional(),
        image: Joi.optional(),
    });

}
export default VacationModel;
