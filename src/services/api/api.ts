import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import constant from '../config/constant';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const axiosInstance = axios.create({
  baseURL: constant.baseURL,
  // cancelToken: source.token,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'Cache-Control': 'no-cache',
    // Pragma: 'no-cache',
    // Expires: '0',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    //do want you wont to do before call
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Relogin the user if the token expires
axiosInstance.interceptors.response.use(
  async response => response,
  async function (error) {
    if (
      error?.response?.status == 401 &&
      error?.response?.data?.message == 'No token authorized'
    ) {
      //   navigateAndSimpleReset(routeName.sessionTimeout, 0);
      // source.cancel('Operation becouse of status code 401');
    } else if (
      error?.response?.status == 500 &&
      error?.response?.data?.message == 'Internal server error'
    ) {
      Snackbar.show({
        text: 'Please update your app',
      });
    } else if (error?.response?.status === 422) {
      Snackbar.show({
        text:
          error?.response?.data?.error?.[
            Object.keys(error?.response?.data?.error)[0]
          ][0] ?? 'Somthing went wrong! Please try again.',
      });
    }

    return Promise.reject(error.response);
  },
);

export {axiosInstance};
