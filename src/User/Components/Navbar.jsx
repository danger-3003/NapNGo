import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/LogoLight.svg";
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
        <div className="fixed top-0 z-10 w-full">
            <div className="bg-secondary absolute flex items-center justify-center z-10 h-14 w-full">
                <img src={Logo} alt="NapNGo Logo" className="h-[90%]"/>
            </div>
            <div className={`bg-black/50 absolute top-0 ${menu?"left-0":"-left-full"} h-screen w-full md:hidden duration-500 transition-all delay-100`}></div>
            <div className="absolute block md:hidden top-5 left-7 z-10" onClick={handleMenu}>
                <FontAwesomeIcon icon={menu?faTimes:faBars} className="text-xl text-accent"/>
            </div>
            <div className={`bg-secondary shadow-lg shadow-black/50 flex flex-col items-center justify-start font-[Poppins] pt-10 h-screen w-52 absolute duration-500 transition-all top-0 ${menu?"left-0":"-left-full md:left-0"} lg:fixed text-accent`}>
                <div className="flex items-center justify-center flex-col gap-3 my-5 mb-10">
                    <img src={Profile} alt="DemoProfile" className="w-28 mt-7 md:mt-3 md:w-32 rounded-full" style={{boxShadow:"0px 0px 15px rgba(0,0,0,0.5)"}}/>
                    <p>{user}</p>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex items-center justify-start flex-row relative">
                        {
                            value==="one"&&
                            <div className="bg-accent/70 h-10 w-1 absolute -left-6 rounded-full"></div>
                        }
                        <label
                            htmlFor="Home"
                            onClick={() => {
                                console.log("One");
                                navigate("");
                                setMenu(false);
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
                    </div>
                    <div className="flex items-center justify-start flex-row relative">
                        {
                            value==="two" &&
                            <div className="bg-accent/70 h-10 w-1 absolute -left-6 rounded-full"></div>
                        }
                        <label
                            htmlFor="History"
                            onClick={() => {
                                console.log("Two");
                                navigate("history");
                                setMenu(false);
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
                    </div>
                    <div className="flex items-center justify-start flex-row relative">
                        {
                            value==="three"&&
                            <div className="bg-accent/70 h-10 w-1 absolute -left-6 rounded-full"></div>
                        }
                        <label
                            htmlFor="Profile"
                            onClick={() => {
                                console.log("Three");                               
                                navigate("profile");
                                setMenu(false);
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
                </div>
                <div className="absolute bottom-5 w-[80%]">
                    <div className="flex items-center justify-start flex-row relative">
                        {
                            value==="four"&&
                            <div className="bg-accent/70 h-10 w-1 absolute -left-5 rounded-full"></div>
                        }
                        <label
                            htmlFor="Help"
                            onClick={() => {
                                console.log("Four");
                                navigate("help");
                                setMenu(false);
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
                    </div>
                    <div className="bg-primary flex items-center justify-between mt-3 w-40 px-5 py-2 my-1 rounded hover:cursor-pointer shadow-lg shadow-black/30" onClick={handleLogout}>
                        <p className="text-accent font-semibold">Logout</p>
                        <FontAwesomeIcon icon={faSignOut} className="text-accent text-xl" />
                    </div>
                </div>
            </div> 
        </div>
        </>
    );
}

export default Navbar;
