import React from 'react';

export const Review = ({review}) => {

    const {user, text, rating} = review;

    return (
        <>
            <p>{user}</p>
            <p>{text}</p>
            <p>{rating}</p>
        </>
    );
};