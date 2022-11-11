import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  request => request,
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance;
