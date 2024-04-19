import React from 'react';
import {RestaurantTabs} from "./component.jsx";
import {useGetRestaurantsQuery} from "../../redux/service/api.js";
import s from "./style.module.scss";
import {Loading} from "../loading/component.jsx";

export const RestaurantTabsContainer = () => {

    const {data: restaurants, isLoading} = useGetRestaurantsQuery();

    if (isLoading) {
        return <Loading text={'Загрузка ресторанов ...'}/>
    }

    if (!restaurants) {
        return null;
    }

    return (
        <RestaurantTabs restaurants={restaurants} className={s.action}/>
    );
};
