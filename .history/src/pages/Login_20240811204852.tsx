import AuthForm from "../components/AuthForm";
import { useAuth } from "../hook/useAuth";

const Login = () => {
    const { login } = useAuth();

    return (
        <div>
            <AuthForm onSubmit={login} />
        </div>
    );
};
export default Login;
