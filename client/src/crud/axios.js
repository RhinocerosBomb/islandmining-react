import axios from 'axios';

axios.interceptors.request.use(
  function(config) {
    const { authToken } = JSON.parse(localStorage.getItem('persist:auth'));
    if (authToken) {
      config.headers.authorization = 'JWT ' + authToken.replace(/['"]+/g, '');
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default axios;