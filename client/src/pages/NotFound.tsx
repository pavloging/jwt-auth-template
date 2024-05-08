import { FC } from "react";

const NotFound: FC = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__title">Page Not Found</h1>
            <div>
                <img src="/not-found.webp" alt="Git Not Found" />
            </div>
        </div>
    );
};

export default NotFound;