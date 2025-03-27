import axios from "axios";

const BASE_URL = "http://localhost:5000";
//  const BASE_URL = 'https://gocargo-1.onrender.com';
//  const BASE_URL = 'https://7e3c-182-69-177-63.ngrok-free.app';

const INSTANCE = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const PUBLIC_INSTANCE = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: false,
});

// Interceptor to modify headers dynamically
INSTANCE.interceptors.request.use(
  (config) => {
    // Set default Content-Type
    config.headers["Content-Type"] = "application/json";

    // Modify headers based on custom metadata
    if (config.contentType === "multipart") {
      config.headers["Content-Type"] = "multipart/form-data";
    } else if (config.contentType === "urlencoded") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const API = {
  get: (path) => {
    return INSTANCE.get(path);
  },
  post: (path, data) => {
    return INSTANCE.post(path, data);
  },
};

export const PUBLIC_API = {
  get: (path) => {
    return PUBLIC_INSTANCE.get(path);
  },
};
