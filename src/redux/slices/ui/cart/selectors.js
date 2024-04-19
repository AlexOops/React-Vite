
export const selectCartModule = (state) => state.cart;

// Object.keys() временно
export const selectCartDishIds = (state) => Object.keys(selectCartModule(state));

export const selectDishAmount = (state, dishId) => selectCartModule(state)[dishId] || 0;