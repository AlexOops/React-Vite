import React from 'react';
import {Menu} from "./component.jsx";
import {useSelector} from "react-redux";
import {getMenuByRestaurantId} from "../../redux/slices/entities/dishe/thunks/get-menu-by-restaurant-id.js";
import {selectMenuByRestaurantId} from "../../redux/slices/entities/restaurant/selectors.js";
import {useRequest} from "../../hooks/requests/use-request.js";
import {REQUEST_STATUSES} from "../../redux/slices/ui/request/constants.js";
import {MenuSkeleton} from "./skeleton.jsx";

export const MenuContainer = ({restaurantId}) => {

    const requestStatus = useRequest(getMenuByRestaurantId, restaurantId);
    const dishIds = useSelector((state) => selectMenuByRestaurantId(state, restaurantId));

    if ([REQUEST_STATUSES.pending, REQUEST_STATUSES.idle].includes(requestStatus)) {
        return <MenuSkeleton/>
    }

    return <Menu dishIds={dishIds}/>
};