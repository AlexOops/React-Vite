import React from 'react';
import {Dish} from "../dish/component.jsx";

export const Menu = ({menu}) => {

    return (
        <div>
            {
                menu.map((dish) => <Dish dish={dish}/>)
            }
        </div>
    );
};