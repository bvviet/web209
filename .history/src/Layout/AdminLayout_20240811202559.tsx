import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
    const token = localStorage.getItem("token");
    return <div>{token ? <Outlet></Outlet>: <Navigate}</div>;
};
export default AdminLayout;
