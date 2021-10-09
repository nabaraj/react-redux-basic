import axios from 'axios';

const defaultOption = {};

/**
 *
 * @param {object} options
 *  return axios object
 */
export const requestApi = function (options) {
  let finalOptions = Object.assign({}, defaultOption, options);
  let axiosInstance = axios(finalOptions);
  return axiosInstance;
};
