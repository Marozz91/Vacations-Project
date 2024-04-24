import { Request } from "express";
import UserModel from "../2-models/user-model";
import { UnauthorizedError } from "../2-models/client-errors";
import crypto from "crypto";
import jwt from "jsonwebtoken";


const secretKey = "cutePuppy";

// Create Token:
function createToken(user: UserModel): string {

    // Remove password:
    delete user.password;

    // Create Container containing the user:
    const container = { user };

    // Create option object:
    const options = { expiresIn: "1460h" };

    // Create Token:
    const token = jwt.sign(container, secretKey, options);

    // Return Token:
    return token;

}

// Verify Token:
async function verifyToken(request: Request): Promise<UserModel> {

    // Promisify:
    return new Promise((resolve, reject) => {

        // Extract header:
        const header = request.header("authorization");

        // If no header sent:
        if (!header) reject(new UnauthorizedError("Unauthorized"));

        // Extract token:
        const token = header.replace("Bearer ", "");

        // If no token sent:
        if (!token) reject(new UnauthorizedError("Missing Token"));

        // Verify Token:
        jwt.verify(token, secretKey, (err, container: { user: UserModel }) => {

            if (err) {
                reject(new UnauthorizedError("Invalid token"));
            }

            // All is good:
            resolve(container.user);
        });

    })

}


function hashPassword(plainText: string): string {

    const salt = "VacationProjectJohnBryce";
    const hashedText = crypto.createHmac("sha512", salt).update(plainText).digest("hex");

    return hashedText;
}


export default {
    createToken,
    verifyToken,
    hashPassword
}