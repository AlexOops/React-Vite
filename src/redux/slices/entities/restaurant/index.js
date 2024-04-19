import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getRestaurants} from "./thunks/get-restaurants.js";

const entityAdapter = createEntityAdapter();

// const initialState = {
//     entities: {},
//     ids: []
// };

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => builder.addCase(
        getRestaurants.fulfilled, (state, {payload: restaurants}) =>

            entityAdapter.setAll(state, restaurants)

            // state.entities = restaurants.reduce((acc, restaurant) => {
            //     acc[restaurant.id] = restaurant;
            //     return acc;
            // }, {});
            //
            // state.ids = restaurants.map(({id}) => id);
    )
});