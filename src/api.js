import axios from 'axios';

export const getRandomGreeting = async () => {
  const response = await axios.get('http://localhost:3000/api/v1/messages/random');
  return response.data.message;
};
