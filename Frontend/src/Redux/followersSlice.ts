import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FollowerModel from '../Models/FollowerModel';

interface FollowersState {
    followersList: FollowerModel[];
    likesCount: number;
}

const initialState: FollowersState = {
    followersList: [],
    likesCount: 0,
};

const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        addFollower: (state, action: PayloadAction<FollowerModel>) => {
            state.followersList.push(action.payload);
            state.likesCount++;
        },
        removeFollower: (state, action: PayloadAction<FollowerModel>) => {
            state.followersList = state.followersList.filter((follower) => follower.userId !== action.payload.userId || follower.vacationId !== action.payload.vacationId);
            state.likesCount--;
        },
    },
});

export const { addFollower, removeFollower } = followersSlice.actions;
export default followersSlice.reducer;
