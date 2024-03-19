import React from 'react';
import {Ingredients} from "../ingredients/components.jsx";

export const Menu = ({menu}) => {

    return (
            <ul>
                {
                    menu.map((item) =>
                        <li>
                            <p>{item.name}</p>
                            <p>{item.price}</p>

                            <Ingredients ingredients={item.ingredients}/>
                        </li>
                    )
                }
            </ul>
    );
};