import React from 'react';
import {Menu} from "./component.jsx";
import {useGetRestaurantMenuQuery} from "../../redux/service/api.js";
import {useParams} from "react-router-dom";
import {Loading} from "../loading/component.jsx";

export const MenuContainer = () => {

    const {restaurantId} = useParams();

    const {data: dishes, isLoading} = useGetRestaurantMenuQuery(restaurantId);

    if (isLoading) {
        return <Loading text={"Загрузка меню ресторана ..."}/>
    }

    if (!dishes) {
        return null;
    }

    return <Menu dishes={dishes}/>
};