import React from 'react';

export const Tab = ({restaurant, onClick, isActive}) => {

    return (
        <button onClick={onClick} disabled={isActive}>{restaurant.name}</button>
    );
};