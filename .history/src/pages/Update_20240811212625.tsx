import ProductForm from "../components/ProductForm";
import { useProduct } from "../hook/useProduct";

const Update = () => {
    const {product, } = useProduct();
    return (
        <div>
            <ProductForm />
        </div>
    );
};
export default Update;
