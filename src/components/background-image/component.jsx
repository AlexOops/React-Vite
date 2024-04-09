import React from 'react';

import s from './style.module.scss';
import classNames from "classnames";

export const BackgroundImage = ({imageSrc, className}) => {

    const style = {
        backgroundImage: `url(${imageSrc})`,
    };

    return (
        <div className={
            classNames(
                s.image,
                className
            )}

             style={style}
        >

        </div>
    );
};