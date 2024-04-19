import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3005/api/'}),
    tagTypes: ["Review"],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => ({
                url: "restaurants",
            })
        }),
        getRestaurant: builder.query({
            query: (restaurantId) => ({
                url: "restaurant",
                params: {restaurantId},
            })
        }),
        getRestaurantMenu: builder.query({
            query: (restaurantId) => ({
                url: "dishes",
                params: {restaurantId},
            })
        }),

        //блюдо
        getDish: builder.query({
            query: (dishId) => ({
                url: `dish/${dishId}`
            })
        }),

        //отзывы
        getReviews: builder.query({
            query: (restaurantId) => ({
                url: "reviews",
                params: {restaurantId},
            }),
            providesTags: (result, _, restaurantId) =>
                result
                    .map(({id}) => ({type: "Review", id}))
                    .concat(
                        {type: "Review", id: "All"},
                        {type: "Product", id: restaurantId}
                    ),
        }),
        createReview: builder.mutation({
            query: ({ restaurantId, newReview }) => ({
                url: `review/${restaurantId}`,
                method: "POST",
                body: newReview,
            }),
            invalidatesTags: (result, error, { restaurantId }) => [
                { type: "Product", id: restaurantId }
            ],
        }),
        updateReview: builder.mutation({
            query: (reviewId, review) => ({
                url: `review/${review.id}`,
                method: "PATCH",
                body: review,
            }),
            invalidatesTags: (result, _, {review}) => [
                {type: "Review", id: review.id}
            ],
        }),

        //пользователи
        getUsers: builder.query({
            query: () => ({
                url: "users"
            })
        }),
    })
})

export const {
    useGetRestaurantsQuery,
    useGetRestaurantMenuQuery,
    useGetReviewsQuery,
    useGetUsersQuery,
    useGetDishQuery,

    useCreateReviewMutation,
} = apiService;