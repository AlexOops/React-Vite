import React from 'react';
import s from './style.module.scss';
import {DishContainer} from "../dish/container.jsx";

export const Menu = ({dishes}) => {

    return (
        <div className={s.menu}>
            {
                dishes?.map((dish) => <DishContainer key={dish.id} dish={dish}/>)
            }
        </div>
    );
};