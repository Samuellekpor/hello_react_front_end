export const fetchGreeting = () => {
  return dispatch => {
    return fetch('http://localhost:3000/random-greeting')
      .then(response => response.json())
      .then(greeting => dispatch({ type: 'SET_GREETING', payload: greeting }));
  };
};
