export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];

export const selectMenuByRestaurantId = (state, id) => selectRestaurantById(state, id)?.menu;
