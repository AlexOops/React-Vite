import React from 'react';
import dishImage from '../../assets/dish.png';
import s from './style.module.scss';
import {Ingredients} from "../ingredients/components.jsx";
import {Counter} from "../counter/component.jsx";
import {NavLink} from "react-router-dom";

export const Dish = ({dish, withCart, amount, increment, decrement}) => {

    return (
        <NavLink className={s.dish} to={`/dish/${dish?.id}`}>

            <div className={s.img}>
                <img src={dishImage} alt="dish"/>
            </div>

            <div className={s.name}>
                <p>{dish.name}</p>
            </div>

            <div className={s.ingredients}>
                <Ingredients ingredients={dish.ingredients}/>
            </div>

            <div className={s.quantityControl}>

                <div className={s.price}>
                    <p>{dish.price} $</p>
                </div>

                {
                    !!withCart && <div className={s.buttons}>
                        <Counter value={amount} increment={increment} decrement={decrement}/>
                    </div>
                }

            </div>
        </NavLink>
    );
};