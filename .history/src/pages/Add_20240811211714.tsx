import ProductForm from "../components/productForm,";
import { useProduct } from "../hook/useProduct";

const Add = () => {
  const {createProduct} = useProduct()
    return (
        <div>
            <ProductForm onSubmit={}/>
        </div>
    );
};
export default Add;
