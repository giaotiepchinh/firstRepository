import axios from "axios";
import queryString from "query-string";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
  headers: {
    "content-type": "applocation/json",
  },
  // paramsSerializer: (params, body) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = "";
  if (token) {
    config.headers.Authorization = `Beare ${token}`;
  }
  return config;
});
axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
