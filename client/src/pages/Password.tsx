import { FC } from "react";
import PasswordForm from "../components/PasswordForm";

const Password: FC = () => {
    return (
        <div className="password">
            <h1 className="not-found__title">Password Page</h1>
            <PasswordForm />
        </div>
    );
};

export default Password;