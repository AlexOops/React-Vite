import React from 'react';
import {Restaurants} from "./component.jsx";
import {RestaurantsSkeleton} from "./skeleton.jsx";
import {useRequest} from "../../../hooks/requests/use-request.js";
import {getRestaurants} from "../../../redux/slices/entities/restaurant/thunks/get-restaurants.js";
import {REQUEST_STATUSES} from "../../../redux/slices/ui/request/constants.js";

export const RestaurantsContainer = () => {

    const requestStatus = useRequest(getRestaurants);

    if ([REQUEST_STATUSES.pending, REQUEST_STATUSES.idle].includes(requestStatus)) {
        return <RestaurantsSkeleton/>
    }

    return <Restaurants/>
};