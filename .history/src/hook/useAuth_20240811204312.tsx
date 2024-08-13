import axios from "axios";

export const useAuth = () => {
    const register = async(value: ) => {
        await axios.post('/register', value)
    };
    return { register };
};
