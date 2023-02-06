import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/", // replace with the actual API endpoint
});

export default api;
