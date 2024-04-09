import React from 'react';

import s from './style.module.scss';

export const Ingredients = ({ingredients}) => {
    return (
        <>
            {ingredients.map((ingredient) => <p className={s.ingredient}>{ingredient + ", "}</p>)}
        </>
    );
};