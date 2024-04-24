import { ValidationError } from "./client-errors";
import Joi from "joi";

class FollowerModel {

    public constructor(public userId: number, public vacationId: number) { }

    public validate(): void {
        const result = FollowerModel.ValidationSchema.validate(this);
        if (result.error) throw new ValidationError(result.error.message);
    }


    public static ValidationSchema = Joi.object({

        userId: Joi.number().positive().required(),
        vacationId: Joi.number().positive().required(),

    });

}
export default FollowerModel;