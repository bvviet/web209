import AuthForm from "../components/AuthForm";
import { useAuth } from "../hook/useAuth";

const Register = () => {
    const { register } = useAuth();
    return (
        <div>
            <AuthForm onSubmit={register} />
        </div>
    );
};
export default Register;
