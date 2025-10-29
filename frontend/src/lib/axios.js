//https://clap-backend-7b5zo3y8e-ashutosh4192s-projects.vercel.app/api

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
  base_URL: BASE_URL,
  withCredentials: true,
});
