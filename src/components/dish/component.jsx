import React, {useState} from 'react';
import {Ingredients} from "../ingredients/components.jsx";

export const Dish = ({dish}) => {
    const {name, price, ingredients} = dish;
    const [total, setTotal] = useState(0);

    const decrementTotalCount = () => {
        setTotal(prevState => prevState > 0 ? prevState - 1 : prevState);
    }

    const incrementTotalCount = () => {
        setTotal(prevState => prevState < 5 ? prevState + 1 : prevState);
    }

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
                <button onClick={decrementTotalCount}>-</button>
                {total}
                <button onClick={incrementTotalCount}>+</button>
            </div>

            <hr/>
        </div>
    );
};