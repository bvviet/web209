import { Link, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLayout from "./Layout/AdminLayout";

function App() {
    const routes = useRoutes([
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "register",
            element: <Register />,
        },
        {
            
            element: <AdminLayout />,
            children: [
                {
                    path: "login",
                    element: <Login />,
                },
            ],
        },
    ]);
    return (
        <>
            <nav className="bg-gray-900 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link className="text-white text-xl font-semibold" to="/">
                        Thi WEB209
                    </Link>
                    <div className="flex-1 ml-4">
                        <ul className="flex space-x-4 text-lg text-white">
                            <li className="nav-item">
                                <Link className="hover:text-gray-300" to="/register">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="hover:text-gray-300" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="hover:text-gray-300" to="/product/add">
                                    Add Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="hover:text-gray-300" to="/product/list">
                                    List Product
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-danger bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </nav>
            <ToastContainer />
            <div className="container mx-auto p-4">{routes}</div>
        </>
    );
}

export default App;
