import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import BookNow from "./Pages/BookNow.jsx";
import { Provider } from "react-redux";
import store from "./redux/userStore.jsx";
import Authentication from "./Authentication/Authentication.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Structure = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Structure />,
        children: [
            {
                path: "/",
                element: <App />,
            },
        ],
    },
    {
        path: "/Authentication",
        element: <Authentication />,
    },
    {
        path: "/:userName",
        element: <BookNow />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
