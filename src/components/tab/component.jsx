import React from 'react';

import s from './style.module.scss';
import classNames from "classnames";

export const Tab = ({restaurant, onClick, isActive}) => {

    return (
        <div
            className={
                classNames(
                    s.tab,
                    {[s.active]: isActive}
                )}
            onClick={onClick}
            disabled={isActive}
        >
            {restaurant.name}

        </div>
    );
};