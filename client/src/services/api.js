import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-grocery-inventory-manager-75jm.onrender.com",
});

API.interceptors.request.use((req) => {
  const token =
    localStorage.getItem("token");

  if (token) {
    req.headers.Authorization =
      `Bearer ${token}`;
  }

  return req;
});

export default API;