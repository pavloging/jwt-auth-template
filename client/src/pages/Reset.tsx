import { FC } from "react";
import ResetForm from "../components/ResetForm";

const Reset: FC = () => {
    return (
        <div className="reset">
            <h1 className="not-found__title">Reset Page</h1>
            <ResetForm />
        </div>
    );
};

export default Reset;