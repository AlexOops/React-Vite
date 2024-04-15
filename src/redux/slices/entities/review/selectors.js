export const selectReviewModule = (state) => state.review;

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export  const selectReviewByRestaurantId = (state, id) => selectReviewModule(state).entities[id];
