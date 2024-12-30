import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../../assets/User/Profile.jpg";
import {
    faHouse,
    faClockRotateLeft,
    faUser,
    faInfoCircle,
    faSignOut,
    faBars,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import {LOGOUT} from "../../redux/slice/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
    const [value, setValue] = useState("one");
    const [menu, setMenu] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state)=>state.user.user);
    console.log(user);

    const handleMenu=()=>{
        setMenu(!menu);
    }
    const handleValue = (param) => {
        setValue(param);
    };
    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch(LOGOUT(null));
        navigate("/");
    };

    return (
        <>
            <div className={`bg-black/50 absolute top-0 ${menu?"left-0":"-left-full"} h-full w-full md:hidden duration-500 transition-all delay-100`}></div>
            <div className="absolute block md:hidden top-7 left-7 z-10" onClick={handleMenu}>
                <FontAwesomeIcon icon={menu?faTimes:faBars} className="text-xl text-accent"/>
            </div>
            <div className={`bg-secondary shadow-lg shadow-black/50 flex flex-col items-center justify-start font-[Poppins] pt-10 h-full w-52 absolute duration-500 transition-all top-0 ${menu?"left-0":"-left-full md:left-0"} lg:fixed text-accent`}>
                <div className="flex items-center justify-center flex-col gap-3 my-5 mb-10">
                    <img src={Profile} alt="DemoProfile" className="w-32 rounded-full" style={{boxShadow:"0px 0px 15px rgba(0,0,0,0.5)"}}/>
                    <p>{user}</p>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <label
                        htmlFor="Home"
                        onClick={() => {
                            console.log("One");
                        }}
                        className="hover:cursor-pointer"
                    >
                        <div
                            className={`flex items-center justify-between flex-row-reverse w-40 px-5 py-2 my-1 rounded duration-300 transition-all ${
                                value === "one" ? "bg-accent text-secondary shadow-lg shadow-black/30 font-semibold" : null
                            }`}
                        >
                            <FontAwesomeIcon icon={faHouse} className="text-2xl" />{" "}
                            Home
                        </div>
                    </label>
                    <input
                        type="radio"
                        className="hidden"
                        name="Navigation"
                        id="Home"
                        onClick={() => handleValue("one")}
                    />
                    <label
                        htmlFor="History"
                        onClick={() => {
                            console.log("Two");
                        }}
                        className="hover:cursor-pointer"
                    >
                        <div
                            className={`flex items-center justify-between flex-row-reverse w-40 px-5 py-2 my-1 rounded duration-300 transition-all ${
                                value === "two" ? "bg-accent text-secondary shadow-lg shadow-black/30 font-semibold" : null
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faClockRotateLeft}
                                className="text-2xl"
                                
                            />{" "}
                            History
                        </div>
                    </label>
                    <input
                        type="radio"
                        className="hidden"
                        name="Navigation"
                        id="History"
                        onClick={() => handleValue("two")}
                    />
                    <label
                        htmlFor="Profile"
                        onClick={() => {
                            console.log("Three");
                        }}
                        className="hover:cursor-pointer"
                    >
                        <div
                            className={`flex items-center justify-between flex-row-reverse w-40 px-5 py-2 my-1 rounded duration-300 transition-all ${
                                value === "three"
                                    ? "bg-accent text-secondary shadow-lg shadow-black/30 font-semibold"
                                    : null
                                }`}
                        >
                            <FontAwesomeIcon icon={faUser} className="text-2xl" />{" "}
                            Profile
                        </div>
                    </label>
                    <input
                        type="radio"
                        className="hidden"
                        name="Navigation"
                        id="Profile"
                        onClick={() => handleValue("three")}
                    />
                </div>
                <div className="absolute bottom-5 w-[80%]">
                    <label
                        htmlFor="Help"
                        onClick={() => {
                            console.log("Four");
                        }}
                        className="hover:cursor-pointer"
                    >
                        <div
                            className={`flex items-center justify-between flex-row-reverse w-40 px-5 py-2 my-1 rounded duration-300 transition-all ${
                                value === "four" ? "bg-accent text-secondary shadow-lg shadow-black/30 font-semibold" : null
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faInfoCircle}
                                className="text-2xl"
                            />{" "}
                            Help
                        </div>
                    </label>
                    <input
                        type="radio"
                        className="hidden"
                        name="Navigation"
                        id="Help"
                        onClick={() => handleValue("four")}
                    />
                    <div className="bg-primary flex items-center justify-between mt-3 w-40 px-5 py-2 my-1 rounded hover:cursor-pointer shadow-lg shadow-black/30" onClick={handleLogout}>
                        <p className="text-accent font-semibold">Logout</p>
                        <FontAwesomeIcon icon={faSignOut} className="text-accent text-xl" />
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Navbar;
