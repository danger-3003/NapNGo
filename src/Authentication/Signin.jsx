import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        navigate("/user/" + user.name);
    };

    return (
        <div className="flex items-center justify-center px-1 sm:px-3 w-[75vw] sm:w-80 md:w-96">
            <div className="w-full pt-0 sm:px-5 pb-10 flex itemes-center justify-center flex-col">
                <p className="text-primary font-semibold text-xl mb-3 md:mb-5">
                    Please SignIn to continue.
                </p>
                <div className="w-full">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="bg-accent px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-secondary text-base mr-2"
                            />
                            <input
                                type="text"
                                name="UserName"
                                required
                                placeholder="Enter User Name"
                                className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                onChange={(e) =>
                                    setUser({ ...user, name: e.target.value })
                                }
                            />
                        </div>
                        <div className="bg-accent px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-secondary text-base mr-2"
                            />
                            <input
                                type="email"
                                name="Email"
                                required
                                placeholder="Enter your Email"
                                className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                onChange={(e)=>
                                    setUser({...user,email:e.target.value})
                                }
                            />
                        </div>
                        <div className="bg-accent px-5 pl-4 py-0.5 flex items-center justify-start rounded-full shadow-md shadow-black/10 my-2">
                            <FontAwesomeIcon
                                icon={faLock}
                                className="text-secondary text-base mr-2"
                            />
                            <input
                                type={!showPassword?"text":"password"}
                                name="Password"
                                required
                                placeholder="Enter your Password"
                                className="outline-none text-sm md:text-base py-2 w-full bg-transparent"
                                onChange={(e)=>
                                    setUser({...user,password:e.target.value})
                                }
                            />
                            <FontAwesomeIcon icon={!showPassword?faEyeSlash:faEye} className="text-secondary text-base mr-2" onClick={()=>{setShowPassword(!showPassword)}}/>
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
