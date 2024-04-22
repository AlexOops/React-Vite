import React from 'react';
import {useParams} from "react-router-dom";
import {Ingredients} from "../../components/ingredients/components.jsx";
import {useGetDishQuery} from "../../redux/service/api.js";
import s from "./style.module.scss";
import {Counter} from "../../components/counter/component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectDishAmount} from "../../redux/slices/ui/cart/selectors.js";
import {decrementDish, incrementDish} from "../../redux/slices/ui/cart/index.js";
import bigDish from '../../assets/bigDish.png';
import {Loading} from "../../components/loading/component.jsx";

export const DishPage = () => {

    const {dishId} = useParams();
    const dispatch = useDispatch();

    const {data: dish, isLoading} = useGetDishQuery(dishId);

    const amount = useSelector((state) => selectDishAmount(state, dish?.id));

    if (isLoading) {
        return <Loading text={"Загрузка блюда..."} className={s.action}/>
    }

    if (!dish) {
        return null;
    }
    const increment = () => dispatch(incrementDish(dish.id));
    const decrement = () => dispatch(decrementDish(dish.id));

    return (
        <div className={s.dish}>

            <div className={s.dishWrapper}>
                <div className={s.img}>
                    <img src={bigDish} alt="dish"/>
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

                    <div className={s.buttons}>
                        <Counter value={amount} increment={increment} decrement={decrement}/>
                    </div>

                </div>
            </div>
        </div>
    );
};