import React from 'react';
import s from './style.module.scss';
import {Tab} from "../tab/component.jsx";

export const RestaurantTabs = ({restaurants, className}) => {
    return (
        <div className={className}>
            <div className={"container"}>
                <div className={s.restaurantTabs}>

                    {restaurants?.map((restaurant) =>

                        <Tab
                            key={restaurant.id}
                            title={restaurant.name}
                            restaurantId={restaurant.id}
                        />

                    )}

                </div>
            </div>
        </div>
    );
};