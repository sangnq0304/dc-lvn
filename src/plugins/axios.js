import axios from "axios";
import TokenService from "@/common/authentication";

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

service.interceptors.request.use((config) => {
  const token = TokenService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const handleResponse = (response) => ({
  success: true,
  message: response.status,
});

const handleError = (error) => ({
  success: false,
  message: error.status,
});

service.interceptors.response.use(
  (response) => {
    return handleResponse(response);
  },
  (error) => {
    return handleError(error.response);
  }
);

export default service;
