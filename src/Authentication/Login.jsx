import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLock,
    faEnvelope,
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({setLoader, setSuccess, setError, setMessage}) {
    const [userDetails, setUserDetails] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        axios.post("https://napngo-api.vercel.app/auth/login", userDetails)
        .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            setLoader(false);
            setSuccess(true);
            setMessage(res.data.message);
            setTimeout(()=>{
                navigate("/user/");
            },2000);
        })
        .catch((err) => {
            setLoader(false);
            setError(true);
            setMessage(err.response.data.message?err.response.data.message:"Something went wrong");
        });
    };

    const handleForgotPassword = () => {
        navigate("/resetpassword");
    };

    return (
        <>
            <div className="flex items-start justify-center px-1 sm:px-3 flex-col w-[75vw] sm:w-72 md:w-96">
                <div className="w-full  sm:px-5 pb-10 flex itemes-center justify-center flex-col">
                    <p className="text-primary font-semibold text-xl mb-5">
                        Welcome back User.
                    </p>
                    <div className="w-full">
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="bg-white px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-4">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-secondary text-base mr-2"
                                />
                                <input
                                    type="email"
                                    name="UserEmail"
                                    autoComplete="off"
                                    required
                                    placeholder="Enter Your Email"
                                    className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                    onChange={(e) =>
                                        setUserDetails({
                                            ...userDetails,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="bg-white px-5 pl-4 py-0.5 flex items-center relative justify-start rounded-full shadow-md shadow-black/10 my-4">
                                <FontAwesomeIcon
                                    icon={faLock}
                                    className="text-secondary text-base mr-2"
                                />
                                <input
                                    type={!showPassword ? "text" : "password"}
                                    name="Password"
                                    autoComplete="off"
                                    required
                                    placeholder="Enter your Password"
                                    className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                    onChange={(e) =>
                                        setUserDetails({
                                            ...userDetails,
                                            password: e.target.value,
                                        })
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={!showPassword ? faEyeSlash : faEye}
                                    className="text-secondary text-base absolute right-4"
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                />
                            </div>
                            <div
                                className="float-right -mt-3 hover:cursor-pointer"
                                onClick={handleForgotPassword}
                            >
                                <p className="text-sm mr-3 text-primary">
                                    Forgot Password?
                                </p>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="bg-primary text-accent rounded-full shadow-md shadow-black/30 px-10 py-1"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
