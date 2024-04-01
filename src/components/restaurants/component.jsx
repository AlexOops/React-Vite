import React, {useState} from 'react';
import {Restaurant} from "../restaurant/component.jsx";
import {RestaurantTabs} from "../restaurant-tabs/component.jsx";
import {restaurants} from "../../../materials/mock.js";
import {getStorageItem, setStorageItem} from "../../../utils/storage.js";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = 'currentRestaurantIndex';

export const Restaurants = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => getStorageItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY));
    const currentRestaurant = restaurants[currentRestaurantIndex];

    return (
        <div>
            <RestaurantTabs
                restaurants={restaurants}
                onTabClick={(index) => {
                    setCurrentRestaurantIndex(index);
                    setStorageItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, index)
                }}
                currentIndex={currentRestaurantIndex}
            />

            <Restaurant restaurant={currentRestaurant}/>
        </div>
    );
};