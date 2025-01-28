import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const Error = useRouteError();
    return (
        <div className="flex bg-amber-200 justify-center items-center min-h-screen">
            <div className="container flex flex-col items-center justify-center p-8 bg-slate-500 rounded-xl shadow-lg border-2 animate-fadeIn">
                <h1 className="text-5xl font-bold animate-bounce text-white">404</h1>
                <h2 className="text-2xl text-white mt-2">Oops! Page Not Found</h2>
                <h3 className="text-slate-200 mt-4 mb-4">Sorry, Unexpected Error has Occurred</h3>
                <p className="font-bold text-center text-white text-lg">{Error.statusText || Error.message}</p>
            </div>
        </div>     
    );
}

export default ErrorPage;
