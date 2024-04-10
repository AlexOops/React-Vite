import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectDishIds} from "../selectors.js";
import {selectMenuByRestaurantId} from "../../restaurant/selectors.js";

export const getMenuByRestaurantId = createAsyncThunk(
    'dishes/getMenuByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3005/api/dishes?restaurantId=${restaurantId}`);

        return response.json();
    },
    {
        condition: (restaurantId, {getState}) => {
            const state = getState()
            const dishRestaurantIds = selectMenuByRestaurantId(state, restaurantId);
            const dishIds = selectDishIds(state);

            // если нет, то добавить
            return dishRestaurantIds.some((id) => !dishIds.includes(id));
        }
    }
);