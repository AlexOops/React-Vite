import React, {useEffect, useState} from 'react';
import {Restaurant} from "../restaurant/component.jsx";
import {RestaurantTabs} from "../restaurant-tabs/component.jsx";
import {restaurants} from "../../../materials/mock.js";

const getSavedCurrentRestaurantIndex = () => {
    return Number(localStorage.getItem('currentRestaurantIndex') || 0);
}

const setCurrentRestaurantIndexLocalStorage = (index) => {
    localStorage.setItem('currentRestaurantIndex', index.toString());
}

export const Restaurants = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(getSavedCurrentRestaurantIndex());
    const currentRestaurant = restaurants[currentRestaurantIndex];

    useEffect(() => {
        setCurrentRestaurantIndexLocalStorage(currentRestaurantIndex)
    }, [currentRestaurantIndex]);

    return (
        <div>
            <RestaurantTabs restaurants={restaurants} onTabClick={setCurrentRestaurantIndex}/>

            <Restaurant restaurant={currentRestaurant}/>
        </div>
    );
};