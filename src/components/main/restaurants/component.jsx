import React, {useState} from 'react';
import {RestaurantTabs} from "../restaurant-tabs/component.jsx";
import {getStorageItem} from "../../../../utils/storage.js";

import s from './style.module.scss';
import {Menu} from "../../menu/component.jsx";

const ACTIVE_RESTAURANT_ID_STORAGE_KEY = 'currentRestaurantId';

export const Restaurants = () => {

    const [currentRestaurantId, setCurrentRestaurantId] = useState(() => getStorageItem(ACTIVE_RESTAURANT_ID_STORAGE_KEY));

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

                    <RestaurantTabs
                        className={s.action}
                        onTabClick={setCurrentRestaurantId}
                        currentRestaurantId={currentRestaurantId}
                    />

                    <Menu restaurantId={currentRestaurantId}/>
                </div>
            </div>
        </div>
    );
};