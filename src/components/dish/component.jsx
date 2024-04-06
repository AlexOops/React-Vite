import React, {useContext} from 'react';
import {useCounter} from "../../hooks/use-counter.js";
import dishImage from '../../assets/dish.png';

import s from './style.module.scss';
import {Button} from "../button/component.jsx";
import {UserAuthContext} from "../../contexts/userAuth.jsx";
import {useSelector} from "react-redux";
import {Ingredients} from "../ingredients/components.jsx";

export const Dish = ({dishId}) => {

    const {user} = useContext(UserAuthContext);

    const dish = useSelector((state) => state.dish.entities[dishId]);

    if (!dish) {
        return null;
    }
    const {name, price, ingredients} = dish;

    const {amount, increment, decrement} = useCounter();

    return (
        <ul className={s.dish}>

            <li className={s.img}>
                <img src={dishImage} alt="dish"/>
            </li>

            <li className={s.name}>
                <p>{name}</p>
            </li>

            <li className={s.ingredients}>
                <Ingredients ingredients={ingredients}/>
            </li>

            <li className={s.quantityControl}>

                <div className={s.price}>
                    <p>{price} $</p>
                </div>

                {

                    // вынести

                    !!user && <div className={s.buttons}>
                        <Button
                            children={'-'}
                            onClick={decrement}
                            disabled={amount === 0}
                            viewVariant={'amount'}
                        />

                        <div className={s.amount}>
                            {amount}
                        </div>

                        <Button
                            children={'+'}
                            onClick={increment}
                            disabled={amount === 5}
                            viewVariant={'amount'}
                        />
                    </div>
                }

            </li>
        </ul>
    );
};