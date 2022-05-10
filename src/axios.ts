import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : "https://its-edmunds-api.herokuapp.com/",
});

export default instance;
