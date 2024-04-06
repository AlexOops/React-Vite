import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {dishSlice} from "./slices/entities/dishe/index.js";
import {restaurantSlice} from "./slices/entities/restaurant/index.js";
import {reviewSlice} from "./slices/entities/review/index.js";
import {userSlice} from "./slices/entities/user/index.js";

export const store = configureStore({
    reducer: combineSlices(dishSlice, restaurantSlice, reviewSlice, userSlice)
});