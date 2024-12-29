import axios from "axios";

const API_BASE_URL = "http://localhost:7261/api";

export const login = async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/user/login`, { email, password });
    return response.data;
};

export const getProducts = async (email, password) => {
    const response = await axios.get(`${API_BASE_URL}/product`);
    return response.data;
};

