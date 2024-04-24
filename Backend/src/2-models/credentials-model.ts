import Joi from "joi";
import { ValidationError } from "./client-errors";

class CredentialsModel {

    public email: string;
    public password: string;

    public constructor(credentials: CredentialsModel) {
        this.email = credentials.email;
        this.password = credentials.password;
    }

    public validate(): void {
        const result = CredentialsModel.ValidationSchema.validate(this);
        if (result.error) throw new ValidationError(result.error.message);
    }

    public static ValidationSchema = Joi.object({

        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(35).required(),

    });

}
export default CredentialsModel;