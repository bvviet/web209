import axios from "axios";
import { userTypeInput } from "../types/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();
    const register = async (value: userTypeInput) => {
        try {
            await axios.post("/register", value);
            toast.success("thanh cong");
            navigate("/login");
        } catch (error) {
            toast.error("loi");
        }
    };
    const login = async (value: userTypeInput) => {
        try {
            const { data } = await axios.post("/login", value);
            localStorage.setItem("token", data.accessToken);
            toast.success("thanh cong");
            navigate("/");
        } catch (error) {
            toast.error("loi");
        }
    };
    return { register, login };
};
