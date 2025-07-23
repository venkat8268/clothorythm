import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Auth from "./components/Auth";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Root = () => {
    return (
        <>
            <Provider store={appStore}>
                <Header />
                <Outlet />
                {/* <Footer /> */}
            </Provider>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/login',
                element: <Auth />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)
