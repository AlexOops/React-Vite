import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectUserIds} from "../selectors.js";

export const getUsers = createAsyncThunk(
    "users/getUsers",

    async (_, rejectWithValue) => {
        const response = await fetch("http://localhost:3005/api/users/");
        const result = await response.json();

        if (result.length === 0) {
            return rejectWithValue('No users found.');
        }

        return result;
    },
    {
        condition: (_, {getState}) => !selectUserIds(getState())?.length,
    }
);