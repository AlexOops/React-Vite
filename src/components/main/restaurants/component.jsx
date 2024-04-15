import React, {useState} from 'react';
import s from './style.module.scss';
import {MenuContainer} from "../../menu/container.jsx";
import {RestaurantTabsContainer} from "../restaurant-tabs/container.jsx";

export const Restaurants = () => {

    const [activeRestaurantId, setActiveRestaurantId] = useState(null);

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

                    <RestaurantTabsContainer
                        className={s.action}
                        onTabClick={setActiveRestaurantId}
                        activeRestaurantId={activeRestaurantId}
                    />

                    {
                        activeRestaurantId ? (
                            <MenuContainer restaurantId={activeRestaurantId}/>
                        ) : (
                            <div className={s.noRestaurant}>Выберите расторан!</div>
                        )

                    }
                </div>
            </div>
        </div>
    );
};