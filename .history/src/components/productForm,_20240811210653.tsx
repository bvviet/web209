import { useForm } from "react-hook-form";
import { productType, productTypeInput } from "../types/product";
import { useEffect } from "react";

interface formProps {
    onSubmit: (data: productTypeInput) => void;
    product?: productType;
}

const ProductForm = ({ onSubmit, product }: formProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<productTypeInput>();

    useEffect(() => {
        if (!product) {
            return;
        }
        reset(product);
    }, [product]);

    return (
        <>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                            ipsa culpa autem, at itaque nostrum!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter name"
                                    {...register("name", { required: "khong duoc bo trong" })}
                                />
                                {errors.name && <p className="red">{errors.name.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                price
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter price"
                                    {...register("price", {
                                        required: "khong duoc bo trong",
                                        min: {
                                            value: 1,
                                            message: "khong be hon 1",
                                        },
                                    })}
                                />
                                {errors.price && <p className="red">{errors.price.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">
                                isShow
                            </label>
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter isShow"
                                />
                                {errors.isShow && <p className="red">{errors.isShow.message}</p>}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
        </>
    );
};
export default ProductForm;
