import React from 'react';
import {RestaurantTabs} from "./component.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantIds} from "../../../redux/slices/entities/restaurant/selectors.js";

export const RestaurantTabsContainer = (props) => {
    const restaurantIds = useSelector((state) => selectRestaurantIds(state));

    return (
        <RestaurantTabs
            {...props}
            restaurantIds={restaurantIds}
        />
    );
};