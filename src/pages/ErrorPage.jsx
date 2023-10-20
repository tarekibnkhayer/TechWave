import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center text-3xl font-semibold mt-40">
            <p>Something went wrong!!!</p>
            <p>
        <i>{error.statusText || error.message}</i>
      </p>
        </div>
    );
};

export default ErrorPage;