import ProductForm from "../components/ProductForm";
import { useProduct } from "../hook/useProduct";

const Update = () => {
    const { product, updateProduct } = useProduct();
    return (
        <div>
            <ProductForm onSubmit={updateProduct} product={product} />
        </div>
    );
};
export default Update;
