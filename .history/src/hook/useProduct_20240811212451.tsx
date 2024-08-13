import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productType, productTypeInput } from "../types/product";

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

    useEffect(() => {
        getAll();
    }, []);

    const getDetail = async (id: string | undefined) => {
        try {
            const { data } = await axios.get(`/products/${id}`);
            setProduct(data);
        } catch (error) {
            toast.error("loi");
        }
    };

    useEffect(() => {
        if (!product) return;
        getDetail(id);
    }, [id]);

    const createProduct = async (value: productTypeInput) => {
        try {
            await axios.post("/products", value);
            toast.success("thanh cong");
            navigate("/product/list");
        } catch (error) {
            toast.error("loi");
        }
    };

    const updateProduct = async (value: productTypeInput) => {
        try {
            await axios.put(`/products/${id}`, value);
            toast.success("thanh cong");
            navigate("/");
        } catch (error) {
            toast.error("loi");
        }
    };

    const deleteProduct = async (id: string) => {
        try {
            if (window.confirm("Ban chac chan xoa")) {
                await axios.delete(`/products/${id}`);
                toast.success("thanh cong");
                navigate("/");
                getAll();
            }
        } catch (error) {
            toast.error("loi");
        }
    };
    return { product, products, createProduct, updateProduct, deleteProduct };
};
