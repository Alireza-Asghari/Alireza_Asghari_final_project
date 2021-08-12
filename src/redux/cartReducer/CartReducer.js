const initialState = {
  cart: [],
  numbers:[1,2,3,4]
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add to cart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "delete":
      return {
        ...state,
        cart:state.cart.filter(item=>item.id!==action.payload)
      };

    default:
      return state;
  }
};

export default CartReducer;
