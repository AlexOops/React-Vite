import React from 'react';

import s from './style.module.scss';
import {NavLink} from "react-router-dom";
import classNames from "classnames";

export const Navigate = () => {
    return (
        <nav className={s.navigation}>
            <div className={s.navList}>
                <NavLink className={({isActive}) => classNames(
                    s.navLink,
                    {[s.active]: isActive}
                )} to={'/'}>Главная</NavLink>

                <NavLink className={({isActive}) => classNames(
                    s.navLink,
                    {[s.active]: isActive}
                )} to={'/restaurants'}>Рестораны</NavLink>

                <NavLink className={({isActive}) => classNames(
                    s.navLink,
                    {[s.active]: isActive}
                )} to={'/about-us'}>О нас</NavLink>
            </div>
        </nav>
    );
};
