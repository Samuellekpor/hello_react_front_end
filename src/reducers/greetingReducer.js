const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case 'GET_GREETING':
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
