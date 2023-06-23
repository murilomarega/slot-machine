import axios from 'axios';

const apiService = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  withCredentials: false,
  timeout: 5000,
  headers: {
    'content-Type': 'application/json',
    Accept: '/',
    'Cache-Control': 'no-cache',
  },
});

apiService.interceptors.response.use(
  (response) => response.data,
  (err) => Promise.reject(err),
);

export default apiService;
