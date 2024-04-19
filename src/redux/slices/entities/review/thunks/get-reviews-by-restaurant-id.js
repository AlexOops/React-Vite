import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectReviewByRestaurantId, selectReviewIds} from "../selectors.js";

export const getReviewsByRestaurantId = createAsyncThunk(
    'reviews/getReviewsByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3005/api/reviews?restaurantId=${restaurantId}`);

        return response.json();
    },
    {
        condition: (restaurantId, {getState}) => {
            const state = getState()
            const reviewRestaurantIds = selectReviewByRestaurantId(state, restaurantId);
            const reviewIds = selectReviewIds(state);

            return reviewRestaurantIds.some((id) => !reviewIds.includes(id));
        }
    }
);