import React from 'react';
import s from './style.module.scss';
import {RestaurantTabsContainer} from "../restaurant-tabs/container.jsx";
import {Outlet} from "react-router-dom";

export const Restaurants = () => {

    return (
        <div>
            <div className={"container"}>

                <div className={s.restaurants}>
                    <div className={s.description}>
                        <h2 className={s.title}>Наши лучшие рестораны</h2>
                        <p className={s.text}>
                            Выбирайте и наслаждайтесь: от изысканных блюд до домашних вкусов, доставленных прямо к вашей
                            двери.
                            Ваше следующее кулинарное приключение начинается здесь, с нашей коллекцией лучших
                            ресторанов.
                        </p>
                    </div>

                    <RestaurantTabsContainer/>

                    <Outlet/>

                </div>
            </div>
        </div>
    );
};