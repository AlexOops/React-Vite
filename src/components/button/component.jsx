import React from 'react';
import classNames from "classnames";

import s from './style.module.scss';

export const Button = ({children, onClick, disabled, viewVariant, size, className}) => {
    return (
        <button className={
            classNames(
                s.button,
                s[viewVariant],
                s[size],
                className
            )}
                onClick={onClick}
                disabled={disabled}
        >
            {children}

        </button>
    );
};