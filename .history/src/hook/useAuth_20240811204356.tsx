import axios from "axios";
import { userTypeInput } from "../types/user";

export const useAuth = () => {
    const register = async (value: userTypeInput) => {
        await axios.post("/register", value);
    };
    return { register };
};
