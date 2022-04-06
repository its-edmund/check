import axios from "axios";

const instance = axios.create({
  baseURL: "https://its-edmunds-api.herokuapp.com/",
});

export default instance;
