import React from 'react';
import dishImage from '../../assets/dish.png';

import s from './style.module.scss';
import {Ingredients} from "../ingredients/components.jsx";
import {Counter} from "../counter/component.jsx";

export const Dish = ({dish, withCart, amount, increment, decrement}) => {

    return (
        <ul className={s.dish}>
            <li className={s.img}>
                <img src={dishImage} alt="dish"/>
            </li>

            <li className={s.name}>
                <p>{dish.name}</p>
            </li>

            <li className={s.ingredients}>
                <Ingredients ingredients={dish.ingredients}/>
            </li>

            <li className={s.quantityControl}>

                <div className={s.price}>
                    <p>{dish.price} $</p>
                </div>

                {
                    !!withCart && <div className={s.buttons}>
                        <Counter value={amount} increment={increment} decrement={decrement}/>
                    </div>
                }

            </li>
        </ul>
    );
};