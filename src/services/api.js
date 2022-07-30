import axios from 'axios';

const KEY = '4KV9Chpg2H2cGNoEZkUT6nJwkLvlEuMx';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

axios.defaults.baseURL = BASE_URL;

export const fetchEvents = async () => {
  const response = await axios.get(`events?size=20&apikey=${KEY}`);

  return response.data._embedded.events;
};

export const fetchEvent = async (id) => {
  const response = await axios.get(`events/${id}?apikey=${KEY}`);

  return response.data;
};
