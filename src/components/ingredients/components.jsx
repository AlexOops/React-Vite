import React from 'react';

export const Ingredients = ({ingredients}) => {
    return (
        <>
            {ingredients.map((ingredient) => <p>{ingredient}</p>)}
        </>
    );
};