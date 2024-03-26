import React from 'react';
import {Tab} from "../tab/component.jsx";

export const RestaurantTabs = ({restaurants, onTabClick, currentIndex}) => {

    return (
        <div>
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
    );
};