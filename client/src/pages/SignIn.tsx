import { FC } from "react";
import LoginForm from "../components/LoginForm";

const SignIn: FC = () => {
    return (
        <div className="sign-in">
            <h1 className="sign-in__title">Sign In Page</h1>
            <LoginForm />
        </div>
    );
};

export default SignIn;