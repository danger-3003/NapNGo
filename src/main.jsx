import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//Home Section
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

//User Section
import Dashboard from "./Admin/Sections/Dashboard.jsx";
import History from "./Admin/Sections/Reports.jsx";
import Profile from "./Admin/Sections/Profile";
import Booking from "./Admin/Sections/Booking.jsx";
import SideBar from "./Admin/Components/Navbar.jsx";

import { Provider } from "react-redux";
import store from "./redux/userStore.jsx";
import Authentication from "./Authentication/Authentication.jsx";
import ResetPassword from "./Authentication/ResetPassword.jsx";
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

const UserSectionStructure=()=>{
    return(
        <>
            <SideBar />
            <Outlet />
        </>
    )
}

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
        path: "/authentication",
        element: <Authentication />,
    },
    {
        path:"/resetpassword",
        element:<ResetPassword />
    },
    {
        path: "/admin/",
        element: <UserSectionStructure />,
        children: [
            {
                path: "profile",
                element:<Profile />
            },
            {
                path: "booking",
                element:<Booking />
            },
            {
                path: "",
                element:<Dashboard />
            },
            {
                path: "report",
                element:<History />
            }
        ]
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>
);
