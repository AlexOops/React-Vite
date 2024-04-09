import React from 'react';
import {Restaurants} from "../components/main/restaurants/component.jsx";
import {Hero} from "../components/main/hero/component.jsx";

export const Main = () => {
    return (
        <div>
            <Hero/>
            <Restaurants/>
        </div>
    );
};