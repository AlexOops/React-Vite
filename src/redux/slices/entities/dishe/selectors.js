export const selectMenuModule = (state) => state.dish;

export const selectDishIds = (state) => selectMenuModule(state).ids;

export  const selectDishById = (state, id) => selectMenuModule(state).entities[id];
