import { useForm } from "react-hook-form";
import { productType, productTypeInput } from "../types/product";
import { useEffect } from "react";

interface formProps {
    onSubmit: (data: productTypeInput) => void;
    product?: productType;
}

const productForm = ({ onSubmit }: formProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<productTypeInput>();
    useEffect(() => {
        if (!product) {
        }
    }, []);
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
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                    {...register("email", { required: "khong duoc bo trong" })}
                                />
                                {errors.email && <p className="red">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                    {...register("password", { required: "khong duoc bo trong" })}
                                />
                                {errors.password && <p className="red">{errors.password.message}</p>}
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
export default productForm;
