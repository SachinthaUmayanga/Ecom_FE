import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7261/api",
});

export default api;