import React, {useState} from 'react';
import {RestaurantTabs} from "../restaurant-tabs/component.jsx";
import {restaurants} from "../../../../materials/mock.js";
import {getStorageItem, setStorageItem} from "../../../../utils/storage.js";

import s from './style.module.scss';
import {Menu} from "../../menu/component.jsx";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = 'currentRestaurantIndex';

export const Restaurants = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => getStorageItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY));
    const currentRestaurant = restaurants[currentRestaurantIndex];

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
                        restaurants={restaurants}
                        onTabClick={(index) => {
                            setCurrentRestaurantIndex(index);
                            setStorageItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, index)
                        }}
                        currentIndex={currentRestaurantIndex}
                    />

                    <Menu menu={currentRestaurant.menu}/>
                </div>
            </div>
        </div>
    );
};