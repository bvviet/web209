const AdminLayout = () => {
    const token = localStorage.getItem("token");
    return <div>{token ? <Ou}</div>;
};
export default AdminLayout;
