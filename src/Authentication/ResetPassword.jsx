import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash, faEnvelope, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Logo from "../assets/Logo.svg";
import Loader from "../Components/Loader";

function ResetPassword() {
    const [details, setDetails] = useState({ email: "", otp: "", newPassword: "" });
    const [disable, setDisable] = useState(true);
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
    const [showPassword, setShowPassword] = useState(false);

    const handleBack=()=>{
        window.history.back();
    }
    const handleOTP = ()=>{
        if(details.email.length === 0){
            setError(true);
            setMessage("Email is required");
        }
        else if(!details.email.includes("@") && !details.email.includes("."))
        {
            setError(true);
            setMessage("Invalid Email");
        }
        else{
            setDisable(false);
            setLoader(true);
            axios.post("https://napngo-api.vercel.app/auth/forgot-password",{email:details.email})
            .then(res=>{
                setLoader(false);
                if(res.data){
                    setSuccess(true);
                    setMessage(res.data.message);
                }
            })
            .catch(err=>{
                setLoader(false);
                setError(true);
                setMessage(err.response.data.message);
            });
        }
    }
    const handleResetPassword = (e) => {
        e.preventDefault();
        console.log(details);
        setLoader(true);
        axios.post("https://napngo-api.vercel.app/auth/reset-password",details)
        .then(res=>{
            setLoader(false);
            if(res.data){
                setSuccess(true);
                setMessage(res.data.message);
            }
            setTimeout(()=>{
                window.location.href="/authentication";
            },3000)
        })
        .catch(err=>{
            setLoader(false);
            setError(true);
            setMessage(err.response.data.message);
        });
    };
    return (
        <>
            <div className={`fixed top-10 ${success || error ?"right-10":"-right-full"} w-max ${success && "bg-green-400 border-green-600 text-green-800"} ${error && "bg-red-300 border-red-500 text-red-800"} border-b-4 rounded-lg px-5 py-1 pb-2 z-10 duration-700 transition-all`}>
                <p>{message}</p>
            </div>
            {
                loader &&
                <Loader />
            }
            <div className="font-[poppins] flex items-center justify-center flex-col px-8 sm:px-10 h-screen w-full">
                <div onClick={handleBack} className="cursor-pointer fixed top-7 left-7 flex items-center justify-center bg-secondary w-8 md:w-10 h-8 md:h-10 hover:scale-110 duration-300 text-accent rounded-full">
                    <FontAwesomeIcon icon={faAngleLeft} className="text-lg md:text-xl"/>
                </div>
                <img src={Logo} alt="NapNGo Logo" className="w-32 mb-5"/>
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-center font-bold text-primary text-xl sm:text-2xl lg:text-3xl mb-5">Want to change your PASSWORD?<br /><span className="font-light">Not a problem.</span></h1>
                    <p className="text-center">No worries, we'll send you reset instructions.</p>
                    <div className="mt-5">
                        <form className="w-full" onSubmit={handleResetPassword}>
                            {/* EmailId Section */}
                            <div className="bg-bg px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-secondary text-base mr-2"
                                />
                                <input
                                    type="email"
                                    name="Email"
                                    autoComplete="off"
                                    required
                                    placeholder="Enter your Email"
                                    className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                                />
                            </div>
                            {/* OTP Section */}
                            <div
                                className={`bg-bg px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2`}
                            >
                                <FontAwesomeIcon
                                    icon={faLock}
                                    className="text-secondary text-base mr-2"
                                />
                                <input
                                    type="text"
                                    name="OTP"
                                    autoComplete="off"
                                    required
                                    disabled={disable}
                                    placeholder="Get OTP via Mail"
                                    className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                    onChange={(e) => setDetails({ ...details, otp: e.target.value })}
                                />
                                <div
                                    className={`h-10 w-20 -mr-5 flex items-center justify-center hover:cursor-pointer rounded-full bg-secondary`}
                                    onClick={handleOTP}
                                >
                                    <p className="text-accent text-sm">Get</p>
                                </div>
                            </div>
                            {/* Password Section */}
                            <div className="bg-bg px-5 pl-4 py-0.5 relative flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2">
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
                                    onChange={(e) => setDetails({ ...details, newPassword: e.target.value })}
                                />
                                <FontAwesomeIcon
                                    icon={!showPassword ? faEyeSlash : faEye}
                                    className="text-secondary text-base absolute right-4"
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-center mt-5">
                                <button type="submit" className="bg-primary text-accent font-semibold rounded-full px-8 py-1">Done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetPassword;
