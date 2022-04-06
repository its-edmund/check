import axios from "axios";
const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "prod"
      ? process.env.SERVER_BASE_URL
      : "http://localhost:8003",
});

export default instance;
