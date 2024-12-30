import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faLock,
    faEnvelope,
    faEye,
    faEyeSlash,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(true);
    const [disable, setDisable] = useState(true);
    const [otp, setOtp] = useState(null);
    const [verify, setVerify] = useState(false);
    const navigate = useNavigate();

    const handelDisable = () => {
        const getOtp=()=>{
            console.log("get OTP");
            setDisable(false);
        }
        const verifyOtp=()=>{
            console.log("verify OTP");
            setVerify(true);
        }
        otp===null?getOtp():verifyOtp();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", user.name);
        console.log(user);
        navigate("/user/" + user.name);
    };

    return (
        <div className="flex items-center justify-center px-1 sm:px-3 w-[75vw] sm:w-80 md:w-96">
            <div className="w-full pt-0 sm:px-5 pb-10 flex itemes-center justify-center flex-col">
                <p className="text-primary font-semibold text-xl mb-3 md:mb-5">
                    Please <span className="uppercase">SignIn</span> to
                    continue.
                </p>
                <div className="w-full">
                    <form className="w-full" onSubmit={handleSubmit}>
                        {/* userName Section*/}
                        <div className="bg-white px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-secondary text-base mr-2"
                            />
                            <input
                                type="text"
                                name="UserName"
                                autoComplete="off"
                                required
                                placeholder="Enter User Name"
                                className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                onChange={(e) =>
                                    setUser({ ...user, name: e.target.value })
                                }
                            />
                        </div>
                        {/* EmailId Section */}
                        <div className="bg-white px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2">
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
                                onChange={(e) =>
                                    setUser({ ...user, email: e.target.value })
                                }
                            />
                        </div>
                        {/* OTP Section */}
                        <div className={`${verify?"bg-[#69ff69]":"bg-white"} px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2`}>
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
                                placeholder="Get OTP"
                                className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                onChange={(e) =>
                                    setOtp(e.target.value)
                                }
                            />
                            <div className={`h-10 w-20 -mr-5 flex items-center justify-center hover:cursor-pointer rounded-full ${verify?"bg-[#1cc41c]":"bg-secondary"}`} onClick={handelDisable}>
                                <p className="text-accent text-sm">{disable?"Get":"Done"}</p>
                            </div>
                        </div>
                        {/* Mobile Number Section */}
                        <div className="bg-white px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-secondary text-base mr-2"
                            />
                            <input
                                type="text"
                                name="Mobile"
                                autoComplete="off"
                                required
                                placeholder="Enter your Mobile Number"
                                className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                onChange={(e) =>
                                    setUser({ ...user, mobile: e.target.value })
                                }
                            />
                        </div>
                        {/* Password Section */}
                        <div className="bg-white px-5 pl-4 py-0.5 relative flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2">
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
                                    setUser({
                                        ...user,
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
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="bg-primary text-accent rounded-full shadow-md shadow-black/30 px-10 py-1"
                            >
                                SignIn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
