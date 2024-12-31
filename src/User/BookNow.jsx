import Home from "./Sections/Home";
import History from "./Sections/History";
import Profile from "./Sections/Profile";
import Help from "./Sections/Help";
import Navbar from "./Components/Navbar";

import {useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../redux/slice/userSlice";

const BookNow =()=>{
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
    return(
        <>
            <Navbar />
            <Home user={user}/>
            <History user={user}/>
            <Profile user={user}/>
            <Help user={user}/>
        </>
    )
}

export default BookNow;