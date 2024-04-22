import React, {useContext} from 'react';
import {Dish} from "./component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {UserAuthContext} from "../../contexts/userAuth.jsx";
import {selectDishAmount} from "../../redux/slices/ui/cart/selectors.js";
import {decrementDish, incrementDish} from "../../redux/slices/ui/cart/index.js";

export const DishContainer = ({dish}) => {

    if (!dish) {
        return null;
    }

    const dispatch = useDispatch();

    const {user} = useContext(UserAuthContext);

    const amount = useSelector((state) => selectDishAmount(state, dish.id));

    const increment = () => dispatch(incrementDish(dish.id));
    const decrement = () => dispatch(decrementDish(dish.id));

    return (
        <Dish dish={dish} withCart={!!user} amount={amount} increment={increment} decrement={decrement}/>
    );
};