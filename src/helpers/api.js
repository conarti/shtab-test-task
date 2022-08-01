import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const createSetAuthInterceptor = (hasAuth, token) => {
  const authInterceptor = (config) => {
    if (hasAuth()) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Token ${token()}`;
    } else {
      // eslint-disable-next-line no-param-reassign
      delete config.headers.Authorization;
    }
    return config;
  };

  apiInstance.interceptors.request.use(authInterceptor);
};

export {
  createSetAuthInterceptor,
};
export default apiInstance;
