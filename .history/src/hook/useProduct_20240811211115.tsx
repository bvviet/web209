import axios from "axios";
import { userTypeInput } from "../types/user";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { productType } from "../types/product";

export const useProduct = () => {
    const [products, setProducts] = useState<productType[]>([]);
    const [product, setProduct] = useState<productType>();
    const navigate = useNavigate();
    const { id } = useParams();

    const getAll = async () => {
        try {
            const { data } = await axios.get("/products");
            setProducts(data);
        } catch (error) {
            toast.error("loi");
        }
    };

    const getDetail = async () => {
        try {
            const { data } = await axios.get("/products/`);
            setProducts(data);
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
