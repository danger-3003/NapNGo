import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import {LOGOUT, LOGIN} from "../../redux/slice/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
    const [value, setValue] = useState("home");
    const [menu, setMenu] = useState(false);
    const location=useLocation();

    const navigate = useNavigate();

    //redux hooks
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    // console.log(user);

    useEffect(()=>{
        const userStorage = localStorage.getItem("user");
        dispatch(LOGIN(userStorage));

        const locationArr=location.pathname.split("/");
        if(locationArr.length>2)
        {
            setValue(locationArr[2]);
            return;
        }
        setValue("home");
    },[]);

    const handleMenu=()=>{
        setMenu(!menu);
    }
    const handleValue = (param) => {
        setValue(param);
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
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
            <div className={`bg-secondary shadow-lg shadow-black/50 flex flex-col items-center justify-between font-[Poppins] pt-10 h-screen w-52 absolute duration-500 transition-all top-0 ${menu?"left-0":"-left-full md:left-0"} lg:fixed text-accent`}>
                <div>
                    <div className="flex items-center justify-center flex-col gap-3 my-5 mb-10">
                        <img src={Profile} alt="DemoProfile" className="w-28 mt-7 md:mt-3 md:w-32 rounded-full" style={{boxShadow:"0px 0px 15px rgba(0,0,0,0.5)"}}/>
                        <p>{user}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex items-center justify-start flex-row relative">
                            {
                                value==="home"&&
                                <div className="bg-accent/70 h-10 w-1 absolute -left-6 rounded-full"></div>
                            }
                            <label
                                htmlFor="Home"
                                onClick={() => {
                                    navigate("");
                                    setMenu(false);
                                }}
                                className="hover:cursor-pointer"
                            >
                                <div
                                    className={`flex items-center justify-between flex-row-reverse w-40 px-5 py-2 my-1 rounded duration-300 transition-all ${
                                        value === "home" ? "bg-accent text-secondary shadow-lg shadow-black/30 font-semibold" : null
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faHouse} className="text-xl" />{" "}
                                    Home
                                </div>
                            </label>
                            <input
                                type="radio"
                                className="hidden"
                                name="Navigation"
                                id="Home"
                                onClick={() => handleValue("home")}
                            />
                        </div>
                        <div className="flex items-center justify-start flex-row relative">
                            {
                                value==="booking"&&
                                <div className="bg-accent/70 h-10 w-1 absolute -left-6 rounded-full"></div>
                            }
                            <label
                                htmlFor="Booking"
                                onClick={() => {                              
                                    navigate("booking");
                                    setMenu(false);
                                }}
                                className="hover:cursor-pointer"
                            >
                                <div
                                    className={`flex items-center justify-between flex-row-reverse w-40 px-5 py-2 my-1 rounded duration-300 transition-all ${
                                        value === "booking"
                                            ? "bg-accent text-secondary shadow-lg shadow-black/30 font-semibold"
                                            : null
                                        }`}
                                >
                                    <FontAwesomeIcon icon={faUser} className="text-xl" />{" "}
                                    Booking
                                </div>
                            </label>
                            <input
                                type="radio"
                                className="hidden"
                                name="Navigation"
                                id="Booking"
                                onClick={() => handleValue("booking")}
                            />
                        </div>
                        <div className="flex items-center justify-start flex-row relative">
                            {
                                value==="report" &&
                                <div className="bg-accent/70 h-10 w-1 absolute -left-6 rounded-full"></div>
                            }
                            <label
                                htmlFor="Report"
                                onClick={() => {
                                    navigate("report");
                                    setMenu(false);
                                }}
                                className="hover:cursor-pointer"
                            >
                                <div
                                    className={`flex items-center justify-between flex-row-reverse w-40 px-5 py-2 my-1 rounded duration-300 transition-all ${
                                        value === "report" ? "bg-accent text-secondary shadow-lg shadow-black/30 font-semibold" : null
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faClockRotateLeft}
                                        className="text-xl"
                                        
                                    />{" "}
                                    Report
                                </div>
                            </label>
                            <input
                                type="radio"
                                className="hidden"
                                name="Navigation"
                                id="Report"
                                onClick={() => handleValue("report")}
                            />
                        </div>
                        <div className="flex items-center justify-start flex-row relative">
                            {
                                value==="profile"&&
                                <div className="bg-accent/70 h-10 w-1 absolute -left-6 rounded-full"></div>
                            }
                            <label
                                htmlFor="Profile"
                                onClick={() => {                              
                                    navigate("profile");
                                    setMenu(false);
                                }}
                                className="hover:cursor-pointer"
                            >
                                <div
                                    className={`flex items-center justify-between flex-row-reverse w-40 px-5 py-2 my-1 rounded duration-300 transition-all ${
                                        value === "profile"
                                            ? "bg-accent text-secondary shadow-lg shadow-black/30 font-semibold"
                                            : null
                                        }`}
                                >
                                    <FontAwesomeIcon icon={faUser} className="text-xl" />{" "}
                                    Profile
                                </div>
                            </label>
                            <input
                                type="radio"
                                className="hidden"
                                name="Navigation"
                                id="Profile"
                                onClick={() => handleValue("profile")}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-5">
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
