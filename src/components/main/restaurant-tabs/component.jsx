import React from 'react';
import s from './style.module.scss';
import {RestaurantTabContainer} from "../../restaurant-tab/container.jsx";

export const RestaurantTabs = ({onTabClick, restaurantIds, activeRestaurantId, className}) => {

    return (
        <div className={className}>

            <div className={"container"}>

                <div className={s.restaurantTabs}>
                    {
                        restaurantIds.map((restaurantId) =>
                            <RestaurantTabContainer
                                key={restaurantId}
                                onClick={() => onTabClick(restaurantId)}
                                restaurantId={restaurantId}
                                isActive={restaurantId === activeRestaurantId}
                            />
                        )
                    }
                </div>

            </div>
        </div>
    );
};