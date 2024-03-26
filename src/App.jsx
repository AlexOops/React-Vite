import React from 'react';
import {Layout} from "./components/layout/component.jsx";
import {Restaurants} from "./components/restaurants/component.jsx";

export const App = () => {
    return (
        <div>
            <Layout>
                <Restaurants/>
            </Layout>
        </div>
    );
};