import { OkPacket } from "mysql";
import { ResourceNotFoundError } from "../2-models/client-errors";
import VacationModel from "../2-models/vacation-model";
import appConfig from "../4-utils/app-config";
import dal from "../4-utils/dal";
import fileHandler from "../4-utils/file-handler";


// Get all Vacations
async function getAllVacations(): Promise<VacationModel[]> {

    const sql = `SELECT 
    V.*,
    CONCAT('${appConfig.imagesUrl}', imageName) AS imageUrl,
    EXISTS(SELECT * FROM followers WHERE vacationId = V.vacationId) AS isFollowing,
    COUNT(F.userId) AS followersAmount
    FROM vacations AS V 
    LEFT JOIN followers AS F ON V.vacationId = F.vacationId 
    GROUP BY vacationId
    ORDER BY V.checkIn ASC`;

    const vacations = await dal.execute(sql);
    return vacations;
}



// Get all Vacations by userId
async function getAllVacationsByUserId(userId: number): Promise<VacationModel[]> {

    const sql = `SELECT 
    V.*,
    CONCAT('${appConfig.imagesUrl}', imageName) AS imageUrl,
    EXISTS(SELECT * FROM followers WHERE vacationId = V.vacationId AND userId = ? ) AS isFollowing,
    COUNT(F.userId) AS followersAmount
    FROM vacations AS V 
    LEFT JOIN followers AS F ON V.vacationId = F.vacationId 
    GROUP BY vacationId
    HAVING isFollowing = 1
    ORDER BY V.checkIn ASC`;

    const vacations = await dal.execute(sql, [userId]);
    return vacations;
}


// Get one Vacation
async function getOneVacation(id: number): Promise<VacationModel> {

    const sql = `SELECT vacationId,
                    destination,
                    description,
                    DATE_FORMAT(checkIn,'%Y/%m/%d') AS checkIn,
                    DATE_FORMAT(checkOut,'%Y/%m/%d') AS checkOut,
                    price,
                    CONCAT('${appConfig.imagesUrl}', imageName) AS imageUrl
                FROM vacations WHERE vacationId = ? `;

    const vacations = await dal.execute(sql, [id]);

    const vacation = vacations[0];
    if (!vacation) throw new ResourceNotFoundError(id);

    return vacation;

}

// Add Vacation
async function AddVacation(vacation: VacationModel): Promise<VacationModel> {

    vacation.validate();

    let imageName = null;

    if (vacation.image) {

        // Save image:
        imageName = await fileHandler.saveImage(vacation.image);

        // Set Back image url:
        vacation.imageUrl = appConfig.imagesUrl + imageName;

    }

    const sql = `INSERT INTO vacations VALUES(DEFAULT, ?, ?, ?, ?, ?, ?)`;

    const result: OkPacket = await dal.execute(sql, [vacation.destination, vacation.description, vacation.checkIn, vacation.checkOut, vacation.price, imageName]);

    // Set back the created id to the vacation:
    vacation.vacationId = result.insertId;

    // Delete the image object before return:
    delete vacation.image;

    // Return thet vacation:
    return vacation;

}


// Update vacation:
async function updateVacation(vacation: VacationModel): Promise<VacationModel> {


    // validation:
    vacation.validate();

    // Get original vacation image name:
    let imageName = await getVacationImageName(vacation.vacationId);

    // Set Back image url:
    vacation.imageUrl = appConfig.imagesUrl + imageName;

    // Check if there is a image:
    if (vacation.image) {

        // Save image:
        imageName = await fileHandler.updateImage(vacation.image, imageName);

        // Set Back image url:
        vacation.imageUrl = appConfig.imagesUrl + imageName;

    }

    // Create query:
    const sql = `UPDATE vacations SET
                    destination = ?,
                    description = ?,
                    checkIn = ?,
                    checkOut = ?,
                    price= ?,
                    imageName= ?
                WHERE vacationId = ?`;

    // Execute:
    const result: OkPacket = await dal.execute(sql, [vacation.destination, vacation.description, vacation.checkIn, vacation.checkOut, vacation.price, imageName, vacation.vacationId]);

    // If resource not found:
    if (!result.affectedRows) throw new ResourceNotFoundError(vacation.vacationId);

    // Delete the image object before return:
    delete vacation.image;

    // Return:
    return vacation;

}

// Get image name
async function getVacationImageName(id: number): Promise<string> {


    // Create query:
    const sql = `SELECT imageName FROM vacations WHERE vacationId = ?`;

    // Get vacations:
    const vacations = await dal.execute(sql, [id]);

    // Extract first vacation:
    const vacation = vacations[0];

    // If is not found:
    if (!vacation) throw new ResourceNotFoundError(id);

    // Get image name:
    const imageName = vacation.imageName;

    // return name:
    return imageName;

}

// Delete Vacation
async function deleteVacation(vacationId: number): Promise<void> {

    const imageName = await getVacationImageName(vacationId);

    const sql = `DELETE FROM vacations WHERE vacationId = ?`;
    const result: OkPacket = await dal.execute(sql, [vacationId]);
    if (!result.affectedRows) throw new ResourceNotFoundError(vacationId);

    await fileHandler.deleteImage(imageName);

}


export default {
    getAllVacations,
    getOneVacation,
    AddVacation,
    updateVacation,
    deleteVacation,
    getAllVacationsByUserId
}




