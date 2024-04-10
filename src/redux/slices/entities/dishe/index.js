import {createSlice} from "@reduxjs/toolkit";
import {getMenuByRestaurantId} from "./thunks/get-menu-by-restaurant-id.js";
import {createEntityAdapter} from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => builder.addCase(
        getMenuByRestaurantId.fulfilled, (state, {payload: dishes}) =>
            entityAdapter.upsertMany(state, dishes)
    )
});