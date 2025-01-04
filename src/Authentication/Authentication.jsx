import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signin from "./Signin";
import imagePattern from "../assets/Home/bgPattern.svg";
import BgImage from "../assets/Authentication/bgImage.svg";
import Loader from "../Components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Authentication() {
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const errorSlack = ()=>{
        setTimeout(()=>{
            setError(false);
            // setMessage("user Not Found");
        },4000);
    }
    const successSlack = ()=>{
        setTimeout(()=>{
            setSuccess(false);
            // setMessage("Positive");
        },4000);
    }
    error && errorSlack();
    success && successSlack();

    const handleBack=()=>{
        window.history.back();
    }
    useEffect(() => {
        const userName = localStorage.getItem("token");
        userName !== null ? navigate("/admin/") : null;
    }, [navigate]);
    return (
        <>  
            <div className={`fixed top-10 ${success || error ?"right-10":"-right-full"} w-max ${success && "bg-green-300 border-green-600 text-green-800"} ${error && "bg-red-300 border-red-500 text-red-800"} border-b-4 rounded-lg px-5 py-1 pb-2 z-10 duration-700 transition-all`}>
                <p className="font-semibold">{message?message:"Error"}</p>
            </div>
            {
                loader &&
                <Loader />
            }
            <div
                className="w-full h-screen md:h-screen font-[Poppins] flex items-center justify-center relative overflow-hidden flex-col"
                style={{
                    backgroundImage: `url(${imagePattern})`,
                    backgroundSize: "cover",
                }}
            >
                <div onClick={handleBack} className="cursor-pointer fixed top-7 left-7 z-10 flex items-center justify-center bg-secondary w-8 md:w-10 h-8 md:h-10 hover:scale-110 duration-300 text-accent rounded-full">
                    <FontAwesomeIcon icon={faAngleLeft} className="text-lg md:text-xl"/>
                </div>
                {/* Authentication */}
                <div className="bg-secondary/60 hidden md:block h-[100vh] w-[80vw] rounded-full absolute z-[3] -right-[50%]"></div>
                <div className="bg-secondary/50 hidden md:block h-[100vh] w-[102vw] rounded-full absolute z-[2] -right-[65%]"></div>
                <div className="bg-secondary/40 hidden md:block h-[100vh] w-[110vw] rounded-full absolute z-[1] -right-[65%]"></div>
                <div
                    className="bg-white/20 relative z-[4] p-5 lg:p-10 rounded-2xl flex items-center justify-center sm:gap-5 md:gap-10 flex-col-reverse sm:flex-row h-max w-[95vw] sm:w-[90vw] lg:w-[60rem]"
                    style={{
                        backdropFilter: "blur(10px)",
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
                    }}
                >
                    <div className="flex items-center justify-center flex-col w-[75vw] h-[30rem] sm:w-80 md:w-96">
                        <div className="flex items-center justify-between w-[90%] mt-10 relative h-9 md:h-10 border-2 rounded-full border-secondary">
                            <div
                                className={`bg-secondary transition-all duration-500 absolute ${
                                    login ? "right-[50%]" : "right-0"
                                } w-[50%] text-center h-full rounded-full`}
                            ></div>
                            <div
                                className={`transition-all duration-500 ${
                                    !login ? "text-secondary" : "text-accent"
                                } font-semibold hover:cursor-pointer absolute flex items-center justify-center rounded-full h-8 md:h-9 w-[50%]`}
                                onClick={() => setLogin(true)}
                            >
                                <p className="text-sm md:text-base">LogIn</p>
                            </div>
                            <div
                                className={`transition-all duration-500 ${
                                    login ? "text-secondary" : "text-accent"
                                } font-semibold hover:cursor-pointer absolute right-0 flex items-center justify-center rounded-full h-8 md:h-9 w-[50%]`}
                                onClick={() => setLogin(false)}
                            >
                                <p className="text-sm md:text-base">SignIn</p>
                            </div>
                        </div>
                        <div className="mt-5 relative h-full w-[75vw] sm:w-72 md:w-96 overflow-hidden">
                            <div
                                className={`absolute flex items-start justify-center w-max h-full ${
                                    login ? "left-0" : "-left-full"
                                } transition-all duration-500`}
                            >
                                <Login setLoader={setLoader} setMessage={setMessage} setError={setError} setSuccess={setSuccess}/>
                                <Signin setLoader={setLoader} setMessage={setMessage} setError={setError} setSuccess={setSuccess}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src={BgImage}
                            alt="BgImage"
                            className="w-72 sm:w-[15rem] md:w-[30rem] lg:w-[30rem]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Authentication;
