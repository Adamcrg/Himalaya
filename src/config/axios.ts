import axios from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.API_URL;

axios.interceptors.request.use(
  (config) => {
    console.log('---请求配置---', config);
    return config;
  },
  (error) => {
    console.log('---请求错误---', error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log('---响应数据---', response);
    return response.data;
  },
  (error) => {
    console.log('---响应错误---', error);
    return Promise.reject(error);
  },
);
