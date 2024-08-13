const AdminLayout = () => {
    const token = localStorage.getItem("token");
    return <div>{token}</div>;
};
export default AdminLayout;
