const initialState = {
    user: [],
   
  };
  const LogReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Add user":
        return {
          ...state,
          user: [...state.user, action.payload],
        };
      
      default:
        return state;
    }
  };
  
  export default LogReducer;
  