import axios from "axios";
import { userTypeInput } from "../types/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useProduct = () => {
    const [products, setProducts] = useState<>([]);
    const navigate = useNavigate();

    const getAll = async () => {
        try {
            const { data } = await axios.get("/products");
        } catch (error) {
            toast.error("loi");
        }
    };

    const getAll = async (value: userTypeInput) => {
        try {
            const { data } = await axios.post("/login", value);
            localStorage.setItem("token", data.accessToken);
            toast.success("thanh cong");
            navigate("/");
        } catch (error) {
            toast.error("loi");
        }
    };
    return { getAll };
};
