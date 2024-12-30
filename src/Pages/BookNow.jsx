import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { LOGIN, LOGOUT } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

function BookNow() {
    const navigate = useNavigate();
    const { userName } = useParams();
    console.log(userName);

    //redux hooks
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    // console.log(user);

    useEffect(() => {
        const userStorage = localStorage.getItem("user");
        dispatch(LOGIN(userStorage));
        if (userName !== userStorage) {
            navigate("/");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch(LOGOUT(null));
        navigate("/");
    };
    return (
        <>
            <div className="h-96 w-full flex items-center justify-center">
                <div>
                    <h1 className="text-4xl text-primary font-bold text-center">
                        Book Now
                    </h1>
                </div>
                <p>{user}</p>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
}

export default BookNow;
