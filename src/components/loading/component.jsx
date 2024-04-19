import React from 'react';
import s from "./style.module.scss";
import classNames from "classnames";

export const Loading = ({text, className}) => {
    return (
        <div className={classNames(
            s.loading,
            className
        )}>
            {text}
        </div>
    );
};