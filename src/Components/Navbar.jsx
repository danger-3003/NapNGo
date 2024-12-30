import React, { useEffect, useLocation, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import LogoLight from "../assets/LogoLight.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [scroll, setScroll] = useState("");
    const [userName, setUserName] = React.useState("Demo");
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    return (
        <>
            <div className={`flex items-center justify-center w-full fixed z-10 ${scroll > 200 ? "top-5" : "sm:top-2"} transition-all duration-500 ease-in-out`}>    
                <div
                    className={`flex items-center justify-center flex-row font-[poppins] ${
                        scroll > 200 ? "bg-accent text-secondary shadow-secondary/20 shadow-lg" : "bg-none text-secondary sm:text-accent"
                    } rounded-full h-14 gap-5 w-full md:w-[90%] transition-all duration-500 ease-in-out`}
                >
                    <img src={scroll>200?Logo:LogoLight} alt="Logo" className="h-12 transition-all duration-500 ease-in-out absolute sm:left-[1%] md:left-[5.5%]"/>
                    <div className={`bg-black/40 absolute ${scroll>200?"-top-5":"top-0"} ${menu?"left-0":"-left-full"} h-screen w-full block sm:hidden transition-all duration-500 ease-in-out`}></div>
                    <div className="absolute right-[1%] md:right-[5.5%] bg-primary text-accent rounded-full px-4 py-1 shadow-secondary/20 shadow-md">
                        <Link to="/Authentication">Book Now</Link>
                    </div>
                    <ul className={`flex items-center justify-center flex-col bg-accent sm:bg-transparent absolute sm:relative ${scroll>200?"-top-5 sm:top-0":"top-0"} ${menu?"left-0":"-left-52"} sm:left-auto h-screen sm:h-auto w-52 sm:w-auto sm:flex-row gap-5 font-semibold delay-100 sm:delay-0 transition-all duration-500 sm:duration-0`}>
                        <li>
                            <Link to="/#home" onClick={handleMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/#whyUs" onClick={handleMenu}>Why Us</Link>
                        </li>
                        <li>
                            <Link to="/#FAQ" onClick={handleMenu}>FAQ's</Link>
                        </li>
                        <li>
                            <Link to="/#contact" onClick={handleMenu}>Contact</Link>
                        </li>
                    </ul>
                    <FontAwesomeIcon icon={menu?faTimes:faBars} className={`${scroll>200?"text-secondary":"text-accent"} text-lg block absolute ${menu?"left-32 text-secondary":"left-[5%]"} left-[5%] sm:hidden transition-all duration-500 ease-in-out`} onClick={handleMenu}/>
                </div>
            </div>
            
        </>
    );
}

export default Navbar;
