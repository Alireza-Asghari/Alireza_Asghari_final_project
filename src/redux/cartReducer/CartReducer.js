const initialState = {
  cart: [],
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add to cart":
      let item = state.cart.find(el=>el.id ==action.payload.id)
      if (!item){
       item = action.payload
       item.count =1
      }
      else(
        item.count +=1
      )
      return {
        ...state,
        cart: [...state.cart.filter(product=>product.id !== item.id), item],
      };
    case "delete":
      return {
        ...state,
        cart:state.cart.filter(item=>item.id!==action.payload)
      };

    case 'inc':
      action.payload.count +=1
      return {
      
          ...state,
          cart: state.cart,
        
      }  
      case 'dec':
        if(action.payload.count ==1){
          return {
            ...state,
            cart:state.cart.filter(item=>item.id!==action.payload.id)
          };
        }
        else{
          let item = state.cart.find(el=>el.id ==action.payload.id)
          item.count -=1
          return {
            ...state,
            cart: state.cart,
          };
        }

      case "delete basket":
        return {
          
          cart:action.payload
        };
    default:
      return state;
  }
};

export default CartReducer;
