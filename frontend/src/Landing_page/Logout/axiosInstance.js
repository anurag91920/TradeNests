import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tradenest-uacn.onrender.com", // Backend API URL
  withCredentials: true, // Send cookies with requests
});

export default axiosInstance;