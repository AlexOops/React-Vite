import React from 'react';
import {Dish} from "../dish/component.jsx";
import s from './style.module.scss';

export const Menu = ({menu}) => {

    return (
        <div className={s.menu}>
            {
                menu?.map((dish) => <Dish dish={dish}/>)
            }
        </div>
    );
};