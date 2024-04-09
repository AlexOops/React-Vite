import React from 'react';
import {Tab} from "../../tab/component.jsx";
import {useSelector} from "react-redux";

import s from './style.module.scss';
import {setStorageItem} from "../../../../utils/storage.js";

const ACTIVE_RESTAURANT_ID_STORAGE_KEY = 'currentRestaurantIndex';

export const RestaurantTabs = ({onTabClick, className, currentRestaurantId}) => {

    const restaurantIds = useSelector((state) => state.restaurant.ids);

    return (
        <div className={className}>

            <div className={"container"}>

                <div className={s.restaurantTabs}>
                    {
                        restaurantIds.map((restaurantId) =>
                            <Tab
                                key={restaurantId}
                                restaurantId={restaurantId}
                                onClick={() => {
                                    onTabClick(restaurantId);
                                    setStorageItem(ACTIVE_RESTAURANT_ID_STORAGE_KEY, restaurantId);
                                }}
                                isActive={restaurantId === currentRestaurantId}
                            />
                        )
                    }
                </div>

            </div>
        </div>
    );
};