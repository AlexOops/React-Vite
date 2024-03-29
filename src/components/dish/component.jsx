import React from 'react';
import {Ingredients} from "../ingredients/components.jsx";
import {useCounter} from "../../hooks/use-counter.js";

export const Dish = ({dish}) => {

    if (!dish) {
        return null;
    }

    const {name, price, ingredients} = dish;

    const {amount, increment, decrement} = useCounter();

    return (
        <div>
            <ul>
                <li>
                    <p><span>name: </span>{name}</p>
                </li>
                <li>
                    <p>price: {price}</p>
                </li>
                <li>
                    <span>ingredients: </span>
                    <Ingredients ingredients={ingredients}/>
                </li>
            </ul>

            <div>
                <button onClick={decrement} disabled={amount === 0}>-</button>
                {amount}
                <button onClick={increment} disabled={amount === 5}>+</button>
            </div>

            <hr/>
        </div>
    );
};