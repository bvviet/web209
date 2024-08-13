import { useProduct } from "../hook/useProduct";

const List = () => {
    const { products } = useProduct();
    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
                            <th className="px-4 py-2" />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {product.name}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.isShow}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default List;
