import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://todo-list-be-400174736012.asia-southeast2.run.app',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
