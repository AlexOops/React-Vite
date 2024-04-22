import React from 'react';
import {NavLink, Outlet, useParams} from "react-router-dom";
import {useGetRestaurantsQuery} from "../../redux/service/api.js";

import s from './style.module.scss'
import classNames from "classnames";

export const Restaurant = () => {

    const {restaurantId} = useParams();

    const {data: restaurant} = useGetRestaurantsQuery(undefined, {
        selectFromResult: ({data, ...result}) => ({  // данные из кэша
            ...result,
            data: data ? data.find(({id}) => id === restaurantId) : null
        }),
    });

    if (!restaurant) {
        return null;
    }

    return (
        <div className={s.restaurant}>

            <h2>{restaurant.name}</h2>

            <p className={s.description}>{restaurant.description}</p>

            <div className={s.tabs}>

                <NavLink className={({isActive}) =>
                    classNames(
                        s.tab,
                        {[s.active]: isActive}
                    )} to={`/restaurants/${restaurantId}/menu`} end>Меню</NavLink>

                <NavLink className={({isActive}) =>
                    classNames(
                        s.tab,
                        {[s.active]: isActive}
                    )} to={`/restaurants/${restaurantId}/reviews`} end>Отзывы</NavLink>

            </div>

            <Outlet/>
        </div>
    );
};