import React from "react";
import { useLocation } from "react-router-dom";
import { LOGIN, LOGOUT } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

function BookNow() {
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    console.log(user);
    return (
        <div className="h-96 w-full flex items-center justify-center">
            <div>
                <h1 className="text-4xl text-primary font-bold text-center">
                    Book Now
                </h1>
            </div>
            <button onClick={()=>dispatch(LOGIN("Sumanth Narem"))}>Login</button>
        </div>
    );
}

export default BookNow;
