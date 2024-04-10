import React from 'react';

import s from './style.module.scss';
import classNames from "classnames";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/slices/entities/restaurant/selectors.js";

export const Tab = ({restaurantId, onClick, isActive}) => {

    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))

    if (!restaurant) {
        return null;
    }

    return (
        <div
            className={
                classNames(
                    s.tab,
                    {[s.active]: isActive}
                )}
            onClick={() => onClick(restaurantId)}
        >
            {restaurant.name}

        </div>
    );
};