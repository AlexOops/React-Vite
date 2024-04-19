import React from 'react';
import s from './style.module.scss';
import classNames from "classnames";

export const Tab = ({title, onClick, isActive}) => {

    return (
        <div
            className={
                classNames(
                    s.tab,
                    {[s.active]: isActive}
                )}
            onClick={() => onClick()}
        >
            {title}

        </div>
    );
};