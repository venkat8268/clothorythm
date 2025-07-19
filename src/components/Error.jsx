import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-[100vh] bg-black text-white">
            <div className="text-9xl">{error.status}</div>
            <div className="text-2xl mt-4">{error.statusText}</div>
            <div className="mt-12 text-3xl">{error.data}</div>
        </div>
    )
}

export default Error