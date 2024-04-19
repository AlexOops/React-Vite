import React, {useMemo} from 'react';
import {Review} from "../review/component.jsx";
import {useParams} from "react-router-dom";
import {useGetReviewsQuery, useGetUsersQuery} from "../../redux/service/api.js";

import s from "./style.module.scss";
import {NewReviewForm} from "../new-review-form/component.jsx";
import {Loading} from "../loading/component.jsx";

export const Reviews = () => {

    const {restaurantId} = useParams();

    const {data: reviews, isLoading: isLoadingReviews} = useGetReviewsQuery(restaurantId);
    const {data: users, isLoading: isLoadingUsers} = useGetUsersQuery();

    const reviewsWithUsers = useMemo(() => {
        return reviews?.map((review) => {
            const user = users?.find((user) => user.id === review.userId)
            return {...review, user}
        })
    }, [reviews, users]);

    if (isLoadingReviews || isLoadingUsers) {
        return <Loading text={"Загрузка отзывов ресторана ..."}/>
    }

    if (!reviews || !users) {
        return null;
    }

    return (
        <div>
            <div className={s.reviews}>

                {
                    reviewsWithUsers?.map((review) =>
                        <Review key={review.id} review={review} user={review.user}/>
                    )
                }

            </div>

            <div className={s.newReview}>
                <NewReviewForm restaurantId={restaurantId}/>
            </div>

        </div>

    );
};