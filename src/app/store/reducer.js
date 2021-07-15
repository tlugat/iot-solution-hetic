const Reducer = (state, action) => {
  switch (action.type) {
      case 'SET_GLOBAL-DATA':
        return {
          ...state,
          ...action.payload
        };
      case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
  
      case 'SET_ERROR':
          return {
              ...state,
              error: action.payload
          };
      default:
          return state;
  }
};

export default Reducer;