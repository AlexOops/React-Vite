import React, {useEffect} from 'react';
import {Dish} from "../dish/component.jsx";
import s from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getMenuByRestaurantId} from "../../redux/slices/entities/dishe/thunks/get-menu-by-restaurant-id.js";
import {selectMenuByRestaurantId} from "../../redux/slices/entities/restaurant/selectors.js";

export const Menu = ({restaurantId}) => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getMenuByRestaurantId(restaurantId))

    }, [restaurantId]);

    const menu = useSelector((state) => selectMenuByRestaurantId(state, restaurantId));

    if (!menu?.length) {
        return null;
    }

    return (
        <div className={s.menu}>
            {
                menu.map((dishId) => <Dish key={dishId} dishId={dishId}/>)
            }
        </div>
    );
};