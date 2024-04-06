import {createSlice} from "@reduxjs/toolkit";
import {normalizedUsers} from "../../../../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedUsers.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {}),
    ids: normalizedUsers.map(({id}) => id)
};

export const userSlice = createSlice({
    name: 'user',
    initialState
});