import {createSlice} from "@reduxjs/toolkit";
import {normalizedDishes} from "../../../../../materials/normalized-mock.js";

const initialState = {
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish;
        return acc;
    }, {}),
    ids: normalizedDishes.map(({id}) => id)
};

export const dishSlice = createSlice({
    name: 'dish',
    initialState
});