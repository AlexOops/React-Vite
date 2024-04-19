import React from 'react';
import s from './style.module.scss';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

export const Tab = ({title, restaurantId}) => {

    return (
        <NavLink
            to={`/restaurants/${restaurantId}`}
            className={({isActive}) =>
                classNames(
                    s.tab,
                    {[s.active]: isActive}
                )}
        >
            {title}

        </NavLink>
    );
};