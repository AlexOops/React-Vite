import React from 'react';
import s from './style.module.scss';
export const MenuSkeleton = () => {
    return (
        <div className={s.loading}>
            Загрузка меню ресторана ...
        </div>
    );
};