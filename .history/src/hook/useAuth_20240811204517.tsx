import axios from "axios";
import { userTypeInput } from "../types/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate()
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
