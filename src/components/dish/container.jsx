import React, {useContext} from 'react';
import {Dish} from "./component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectDishById} from "../../redux/slices/entities/dishe/selectors.js";
import {UserAuthContext} from "../../contexts/userAuth.jsx";
import {selectDishAmount} from "../../redux/slices/ui/cart/selectors.js";
import {decrementDish, incrementDish} from "../../redux/slices/ui/cart/index.js";

export const DishContainer = ({dishId}) => {

    const dispatch = useDispatch();

    const {user} = useContext(UserAuthContext);

    const dish = useSelector((state) => selectDishById(state, dishId));
    const amount = useSelector((state) => selectDishAmount(state, dishId));

    const increment = () => dispatch(incrementDish(dishId));
    const decrement = () => dispatch(decrementDish(dishId));

    if (!dish) {
        return null;
    }

    return (
        <Dish dish={dish} withCart={!!user} amount={amount} increment={increment} decrement={decrement}/>
    );
};