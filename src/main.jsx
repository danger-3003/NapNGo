import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//Home Section
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

//User Section
import Home from "./User/Sections/Home";
import History from "./User/Sections/History";
import Profile from "./User/Sections/Profile";
import Help from "./User/Sections/Help.jsx";
import SideBar from "./User/Components/Navbar.jsx";

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
        path: "/user/:userName/",
        element: <UserSectionStructure />,
        children: [
            {
                path: "profile",
                element:<Profile />
            },
            {
                path: "help",
                element:<Help />
            },
            {
                path: "",
                element:<Home />
            },
            {
                path: "history",
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
