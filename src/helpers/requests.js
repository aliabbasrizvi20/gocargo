import axios from "axios";

const BASE_URL = 'https://gocargo-1.onrender.com';
const INSTANCE = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
  });

const PUBLIC_INSTANCE = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: false
  });

export const API = {
    get: (path) => {
        return INSTANCE.get(path);
    },
    post: (path, data) => {
        return INSTANCE.post(path, data);
    }
}

export const PUBLIC_API = {
    get: (path) => {
        return PUBLIC_INSTANCE.get(path);
    }
}
