import React from "react";
import imagePattern from "../assets/Home/bgPattern.jpg";

function Login() {
    return (
        <div
            className="flex items-center justify-center relative overflow-hidden w-[75vw] sm:w-72 md:w-96 h-max bg-red-400 "
        >
            <div className="">
                <p>Welcome back User.</p>
                <div>
                    <form onSubmit={()=>{console.log("submit")}}>
                        <div>
                            <input type="text" name="UserName" placeholder="Enter User Name" className="outline-none rounded-full"/>
                        </div>
                        <div>
                            <input type="password" name="Password" placeholder="Enter your Password" className="outline-none rounded-full" />
                        </div>
                        <div>
                            <button type="submit" className="bg-primary text-accent rounded-full shadow-lg shadow-black/30 px-4 py-1">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
