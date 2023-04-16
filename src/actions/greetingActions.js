import { getRandomGreeting } from '../api';

export const getGreeting = () => async (dispatch) => {
  const greeting = await getRandomGreeting();
  dispatch({
    type: 'GET_GREETING',
    payload: greeting,
  });
};
