import axios from "axios";

export const useAuth = () => {
    const register = async(value: user) => {
        await axios.post('/register', value)
    };
    return { register };
};
