import React from 'react';
import {Dish} from "../dish/component.jsx";
import s from './style.module.scss';
import {useSelector} from "react-redux";

export const Menu = ({restaurantId}) => {

    const restaurant = useSelector((state) => state.restaurant.entities[restaurantId]);

    if (!restaurant) {
        return null;
    }

    // index временно
    return (
        <div className={s.menu}>
            {
                restaurant.menu.map((dish, index) => <Dish key={index} dishId={dish}/>)
            }
        </div>
    );
};