// api.js
import axios from 'axios';
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };
export const fetchData = async (apiEndpoint, queryParams = {}) => {
  try {
    const response = await axios.get(apiEndpoint,config, { params: queryParams });
    const result = response.data;
    localStorage.setItem(apiEndpoint + JSON.stringify(queryParams), JSON.stringify(result));
    return result;
  }
    catch (error) {
    console.error('Error fetching data from the API:', error);
    const cachedData = localStorage.getItem(apiEndpoint + JSON.stringify(queryParams));
    if (cachedData) {
      console.warn('Using cached data due to API error:', cachedData);
      return JSON.parse(cachedData);
    }
    throw error;
  }
};

export const postData = async (apiEndpoint, postData) => {
  try {
    const response = await axios.post(apiEndpoint,config, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putData = async (apiEndpoint, putData) => {
  try {
    const response = await axios.put(apiEndpoint,config, putData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
