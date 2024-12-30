import {useState, useEffect} from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { LOGIN, LOGOUT } from "../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

function BookNow() {
    const location = useLocation();
    const navigate = useNavigate();
    const {userName} = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    useEffect(()=>{
        const user=localStorage.getItem("user");
        if(userName!==user){
            navigate("/");
        }
    })
    const handleLogout=()=>{
        localStorage.removeItem("user");
        navigate("/");
    }
    return (
        <>
            <div className="h-96 w-full flex items-center justify-center">
                <div>
                    <h1 className="text-4xl text-primary font-bold text-center">
                        Book Now
                    </h1>
                </div>
                <button onClick={()=>dispatch(LOGIN("Sumanth Narem"))}>Login</button>
                <p>{userName}</p>
                <p>{user}</p>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
}

export default BookNow;
