const initialState = {
    user: [],
   
  };
  const LogReducer = (state = initialState, action) => {
    switch (action.type) {
      case "add user":
        return {
          ...state,
          user: [...state.user, action.payload],
        };
        case "Delete user":
        return {
        ...state,
        /*user:state.user.filter(element=>element.usename !==action.payload)*/
        user:action.payload
      };
      
      default:
        return state;
    }
  };
  
  export default LogReducer;
  