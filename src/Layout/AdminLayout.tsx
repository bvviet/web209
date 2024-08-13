import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
    const token = localStorage.getItem("token");
    return <div>{token ? <Outlet></Outlet> : <Navigate to={"/login"} />}</div>;
};
export default AdminLayout;
