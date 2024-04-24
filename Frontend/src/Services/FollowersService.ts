import axios from "axios";
import appConfig from "../Utils/Config";
import FollowerModel from "../Models/FollowerModel";
import { store } from "../Redux/Store";
import { addFollower, removeFollower } from "../Redux/followersSlice";

class FollowersService {

    public async addFollower(follower: FollowerModel): Promise<void> {

        const response = await axios.post<FollowerModel>(appConfig.followersUrl + follower.vacationId + "/" + follower.userId, follower);
        const addedFollower = response.data;
        store.dispatch(addFollower(addedFollower));
    }


    public async removeFollower(follower: FollowerModel): Promise<void> {
        await axios.delete<void>(appConfig.followersUrl + follower.userId + '/' + follower.vacationId);
        store.dispatch(removeFollower(follower));
    }

    public async isUserFollowing(userId: number, vacationId: number): Promise<boolean> {

        const response = await axios.get<boolean>(appConfig.followersUrl + userId + '/' + vacationId);
        return response.data;

    }

}

const followersService = new FollowersService();
export default followersService;
