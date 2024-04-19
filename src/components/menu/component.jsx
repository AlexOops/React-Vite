import React from 'react';
import s from './style.module.scss';
import {DishContainer} from "../dish/container.jsx";

export const Menu = ({dishIds}) => {

    if (!dishIds) {
        return null;
    }

    return (
        <div className={s.menu}>
            {
                dishIds.map((dishId) => <DishContainer key={dishId} dishId={dishId}/>)
            }
        </div>
    );
};