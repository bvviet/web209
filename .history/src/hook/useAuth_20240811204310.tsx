import axios from "axios";

export const useAuth = () => {
    const register = async(val) => {
        await axios.post('/register', value)
    };
    return { register };
};
