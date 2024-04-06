import {createSlice} from "@reduxjs/toolkit";
import {normalizedReviews} from "../../../../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedReviews.reduce((acc, review) => {
        acc[review.id] = review;
        return acc;
    }, {}),
    ids: normalizedReviews.map(({id}) => id)
};

export const reviewSlice = createSlice({
    name: 'review',
    initialState
});