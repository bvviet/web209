import axios from "axios";

export const useAuth = () => {
    const register = async() => {
        await axios.post('/re')
    };
    return { register };
};
