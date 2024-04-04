import React from 'react';

import s from './style.module.scss';

export const Navigate = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s.navList}>
                <li className={s.navItem}><a className={s.navLink} href="/">Главная</a></li>
                <li className={s.navItem}><a className={s.navLink} href="#">Меню</a></li>
                <li className={s.navItem}><a className={s.navLink} href="#">О нас</a></li>
                <li className={s.navItem}><a className={s.navLink} href="#">Контакты</a></li>
            </ul>
        </nav>
    );
};
