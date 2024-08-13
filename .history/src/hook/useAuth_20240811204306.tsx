import axios from "axios";

export const useAuth = () => {
    const register = async() => {
        await axios.post('/register', value)
    };
    return { register };
};
