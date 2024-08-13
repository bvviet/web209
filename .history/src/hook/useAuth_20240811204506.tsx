import axios from "axios";
import { userTypeInput } from "../types/user";
import { toast } from "react-toastify";

export const useAuth = () => {
    const navigate = 
    const register = async (value: userTypeInput) => {
        try {
            await axios.post("/register", value);
            toast.success("thanh cong");

        } catch (error) {
            toast.error("loi");
        }
    };
    return { register };
};
