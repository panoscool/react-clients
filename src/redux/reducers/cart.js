export const ADD = "add-to-cart"

export const addToCart = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload]
    default:
      state;
  }
}
