import axios from "axios";

export const configAxios = () => {
    axios.defaults.baseURL = "http://localhost:3000";

    const token = localStorage.getItem()

    axios.interceptors.request.use((config) => {
        if () {
            
        }
        return config;
    });
};
