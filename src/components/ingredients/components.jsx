import React from 'react';

export const Ingredients = ({ingredients}) => {
    return (
        <div>
            {ingredients.map((ingredient) =>
                <p>{ingredient}</p>
            )}
        </div>
    );
};