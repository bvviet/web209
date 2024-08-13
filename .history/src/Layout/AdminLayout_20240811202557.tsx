import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const token = localStorage.getItem("token");
    return <div>{token ? <Outlet></Outlet>: <Nav}</div>;
};
export default AdminLayout;
