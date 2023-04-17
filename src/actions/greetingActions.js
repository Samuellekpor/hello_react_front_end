import getRandomGreeting from '../api';

const getGreeting = () => async (dispatch) => {
  const greeting = await getRandomGreeting();
  dispatch({
    type: 'GET_GREETING',
    payload: greeting,
  });
};

export default getGreeting;
