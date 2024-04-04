import React from 'react';
import {Tab} from "../../tab/component.jsx";

import s from './style.module.scss';

export const RestaurantTabs = ({restaurants, onTabClick, currentIndex, className}) => {
    return (
        <div className={className}>

            <div className={"container"}>

                <div className={s.restaurantTabs}>
                    {
                        restaurants.map((restaurant, index) =>
                            <Tab
                                restaurant={restaurant}
                                onClick={() => onTabClick(index)}
                                isActive={index === currentIndex}
                            />
                        )
                    }
                </div>

            </div>
        </div>
    );
};