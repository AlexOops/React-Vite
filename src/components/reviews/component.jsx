import React from 'react';
import {Review} from "../review/component.jsx";

export const Reviews = ({reviews}) => {

    return (
        <ul>
            {
                reviews.map((review) =>
                    <li>
                        <Review review={review}/>
                    </li>
                )
            }
        </ul>
    );
};