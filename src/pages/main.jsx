import React from 'react';
import {Hero} from "../components/main/hero/component.jsx";
import {RestaurantsContainer} from "../components/main/restaurants/container.jsx";

export const Main = () => {
    return (
        <div>
            <Hero/>
            <RestaurantsContainer/>
        </div>
    );
};