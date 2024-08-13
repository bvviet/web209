import axios from "axios";
import { userTypeInput } from "../types/user";
import { toast } from "react-toastify";

export const useAuth = () => {
    const register = async (value: userTypeInput) => {
        await axios.post("/register", value);
        toast.s
    };
    return { register };
};
