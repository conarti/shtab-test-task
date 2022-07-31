import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://my.shtab.app/api/',
});

const createSetAuthInterceptor = (hasAuth, token) => (config) => {
  if (hasAuth()) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Token ${token()}`;
  } else {
    // eslint-disable-next-line no-param-reassign
    delete config.headers.Authorization;
  }
  return config;
};

export {
  createSetAuthInterceptor,
};
export default apiInstance;
