import Joi from "joi";
import { ValidationError } from "./client-errors";
import RoleModel from "./role-model";

class UserModel {

    public userId: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public roleId: RoleModel;


    public constructor(user: UserModel) {
        this.userId = user.userId;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.roleId = user.roleId;
    }

    public validate(): void {
        const result = UserModel.ValidationSchema.validate(this);
        if (result.error) throw new ValidationError(result.error.message);
    }

    public static ValidationSchema = Joi.object({

        userId: Joi.number().positive().integer().optional(),
        firstName: Joi.string().min(2).max(20).required(),
        lastName: Joi.string().min(2).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(35).required(),
        roleId: Joi.optional()
    });

}
export default UserModel;