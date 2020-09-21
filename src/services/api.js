import axios from "axios";

import { port } from "../port.json";

const api = axios.create({
  baseURL: `https://edithdafelicidade-backend.herokuapp.com/`,
});

export default api;
