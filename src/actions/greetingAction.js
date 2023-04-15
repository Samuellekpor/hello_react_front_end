export const fetchGreeting = () => {
  return dispatch => {
    return fetch('/random-greeting')
      .then(response => response.json())
      .then(greeting => dispatch({ type: 'SET_GREETING', payload: greeting }));
  };
};
