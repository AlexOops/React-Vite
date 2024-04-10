import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantIds} from "../selectors.js";

export const getRestaurants = createAsyncThunk(
    "restaurants/getRestaurants",

    async (_, rejectWithValue) => {
        const response = await fetch("http://localhost:3005/api/restaurants/");
        const result = await response.json();

        if (result.length === 0) {
            return rejectWithValue('No restaurants found.');
        }

        return result;
    },
    {
        // если не пустой, не делай запрос
        condition: (_, {getState}) => !selectRestaurantIds(getState())?.length,
    }
);