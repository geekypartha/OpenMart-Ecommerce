import axios from "axios";

// export const API_BASE_URL = "http://localhost:5000"; for local host
export const API_BASE_URL = "https://openmart-node-api.onrender.com/"; // for production

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})