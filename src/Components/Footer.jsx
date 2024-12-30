import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoLight.svg";

function Footer() {
    return (
        <footer className="bg-secondary font-[poppins] pt-10 px-5 sm:px-10 w-full flex items-center justify-center flex-col">
            <div className="flex items-center justify-center text-center flex-col">
                <p className="text-accent text-xl"><span className="bg-accent text-primary text-xl sm:text-2xl px-1 sm:px-2">Rest . Refresh . Repeat .</span> Your comfort is just a click away!</p>
                <Link to="/Authentication" className="bg-accent text-primary font-semibold px-4 py-1 rounded-full mt-5">Book Now</Link>
            </div>
            <div className="flex items-center sm:justify-between px-5 md:px-10 flex-col sm:flex-row w-full md:w-[90vw] lg:w-[60rem] xl:w-[70rem]">
                <img src={Logo} alt="NapNGo Logo" className="w-40 my-10" />
                <div className="flex items-center sm:items-start justify-center gap-5 lg:gap-10 flex-wrap sm:flex-row pb-10 sm:pb-0">
                    <div className="text-accent flex items-center justify-center text-lg sm:text-xl font-extralight flex-col">
                        <p className="text-2xl font-semibold mb-3">Quick Links</p>
                        <Link to="/#home">Home</Link>
                        <Link to="/#whyUs">Why Us</Link>
                        <Link to="/#FAQ">FAQ's</Link>
                        <Link to="/#contact">Contact</Link>
                    </div>
                    <div className="text-4xl font-bold text-accent font-[Oswald] leading-[3rem]">
                        <p>Your Stay,<br/> Your Way</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
