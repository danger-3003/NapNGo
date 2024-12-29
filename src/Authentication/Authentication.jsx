import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signin from "./Signin";
import imagePattern from "../assets/Home/bgPattern.jpg";
import BgImage from "../assets/Authentication/bgImage.svg";

function Authentication() {
    const [isLogin, setIsLogin] = useState(false);
    const [login, setLogin] = useState(true);
    return (
        <>
            <div
                className="w-full h-full md:h-screen py-20 font-[Poppins] flex items-center justify-center relative overflow-hidden flex-col"
                style={{
                    backgroundImage: `url(${imagePattern})`,
                    backgroundSize: "cover",
                }}
            >
                Authentication
                <div className="bg-secondary/60 hidden md:block h-[100vh] w-[80vw] rounded-full absolute z-[3] -right-[50%]"></div>
                <div className="bg-secondary/50 hidden md:block h-[100vh] w-[102vw] rounded-full absolute z-[2] -right-[65%]"></div>
                <div className="bg-secondary/40 hidden md:block h-[100vh] w-[110vw] rounded-full absolute z-[1] -right-[65%]"></div>
                <div
                    className="bg-accent/5 relative z-[4] p-5 lg:p-10 rounded-2xl flex items-center justify-center sm:gap-5 md:gap-10 flex-col-reverse sm:flex-row h-max w-[95vw] sm:w-[90vw] lg:w-[60rem]"
                    style={{
                        backdropFilter: "blur(7px)",
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
                    }}
                >
                    <div className="flex items-center justify-center flex-col h-96 w-[75vw] sm:w-80 md:w-96">
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
                            <div className={`absolute flex items-start justify-center w-max h-full ${login?"left-0":"-left-full"} transition-all duration-500`}>
                                <Login />
                                <Signin />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={BgImage} alt="BgImage" className="w-72 sm:w-[15rem] md:w-[30rem] lg:w-[30rem]"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Authentication;
