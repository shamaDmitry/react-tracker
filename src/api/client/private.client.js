import axios from 'axios';
import queryString from 'query-string';
import { API_URL, LOCAL_STORAGE_TOKEN_NAME } from '../../../config';

const privateClient = axios.create({
  baseURL: API_URL,
  paramsSerializer: {
    encode: params => {
      console.log('private.client params', params);

      return queryString.stringify(params);
    },
  },
});

privateClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
      )}`,
    },
  };
});

privateClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  err => {
    const { response } = err;

    if (response.status === 401 && response.statusText === 'Unauthorized') {
      localStorage.clear();
      window.location = '/login';
    }

    throw err.response.data;
  }
);

export default privateClient;
