import { OkPacket } from "mysql";
import { ResourceNotFoundError } from "../2-models/client-errors";
import dal from "../4-utils/dal";

// Add Follower
async function addFollower(userId: number, vacationId: number): Promise<void> {

    const sql = `INSERT INTO followers VALUES (?, ?)`;
    await dal.execute(sql, [userId, vacationId]);
}

// Delete Follower
async function removeFollower(userId: number, vacationId: number): Promise<void> {

    const sql = `DELETE FROM followers WHERE userId = ? AND vacationId = ?`;
    const result: OkPacket = await dal.execute(sql, [userId, vacationId]);
    if (!result.affectedRows) throw new ResourceNotFoundError(vacationId || userId);
}

async function isUserFollowing(userId: number, vacationId: number): Promise<boolean> {
    const sql = `SELECT 1 FROM followers WHERE userId = ? AND vacationId = ? LIMIT 1`;
    const result = await dal.execute(sql, [userId, vacationId]);
    return result.length > 0;
}

export default {
    addFollower,
    removeFollower,
    isUserFollowing
}




