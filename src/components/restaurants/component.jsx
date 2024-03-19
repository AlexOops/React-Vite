import React from 'react';

import {restaurants} from '/materials/mock.js';
import {Restaurant} from "../restaurant/component.jsx";

export const Restaurants = () => {
    return (
        <div>
            {restaurants.map((restaurant) => <Restaurant restaurant={restaurant}/>)}
        </div>
    );
};