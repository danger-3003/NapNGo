import React, {useRef, useEffect} from "react";
import {useLocation} from "react-router-dom";
import BgPattern from "../assets/BgPattern.png";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyUs() {
    const location = useLocation();
    const whyUsSection = useRef(null);
    useEffect(()=>{
        if(location.hash==="#whyUs"){
            whyUsSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location]);
    return (
        <div
            ref={whyUsSection}
            className="pt-20 pb-10 px-5 sm:px-10 md:px-16 lg:px-20 flex items-center justify-center flex-col"
            style={{
                backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.95),rgba(255,255,255,0.95)), url(${BgPattern})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center flex-row mb-5 gap-1">
                    <div className="bg-gradient-to-l from-secondary to-secondary/00 rounded-full w-16 sm:w-24 h-0.5"></div>    
                    <h3 className="flex items-center justify-center flex-row">
                        <span className="text-secondary font-semibold text-xl">
                            Nap
                        </span>
                        <span className="text-2xl text-primary font-serif font-extrabold">
                            N
                        </span>
                        <span className="text-secondary font-semibold text-xl">
                            Go
                        </span>
                    </h3>
                    <div className="bg-gradient-to-r from-secondary to-secondary/00 rounded-full w-16 sm:w-24 h-0.5"></div>    
                </div>
                <h1 className="text-[5vw] sm:text-3xl md:text-4xl font-bold text-center mb-5">
                    <span className="bg-primary text-white px-2 py-1">
                        Rest <span className="font-extralight">|</span> Recharge{" "}
                        <span className="font-extralight">|</span> Repeat
                    </span>
                    <br />
                    <span className="font-light text-secondary text-xl md:text-2xl">
                        Comfort Awaits You at{" "}
                        <span className="font-semibold">NapNGo!</span>
                    </span>
                </h1>
                <p className="text-center text-base md:text-lg text-secondary">
                    Located near RTC Complex, Visakhapatnam, NapNGo offers
                    comfortable, affordable, and flexible lodging options.
                    Whether you need rest for a few hours or a full day, we
                    cater to your unique needs. Enjoy our clean, well-equipped
                    spaces and complimentary canteen services to make your stay
                    comfortable.
                </p>
            </div>
            <div className="mt-10">
                <p className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-5">Feature at a Glance</p>
                <div className="flex justify-center items-center flex-wrap gap-3">
                    <div className="flex items-center justify-center flex-col w-52 p-3 border border-secondary rounded-xl">
                        <FontAwesomeIcon icon={faCalendarDays} className="text-primary text-2xl my-2"/>
                        <p className="text-center mt-3">Flexible booking for your convenience.</p>
                    </div>
                    <div className="flex items-center justify-center flex-col w-52 p-3 border border-secondary rounded-xl">
                        <FontAwesomeIcon icon={faBed} className="text-primary text-2xl my-2"/>
                        <p className="text-center mt-3">Clean, comfortable, and cozy beds.</p>
                    </div>
                    <div className="flex items-center justify-center flex-col w-52 p-3 border border-secondary rounded-xl">
                        <FontAwesomeIcon icon={faUtensils} className="text-primary text-2xl my-2"/>
                        <p className="text-center mt-3">Canteen serving fresh, delicious meals.</p>
                    </div>
                    <div className="flex items-center justify-center flex-col w-52 p-3 border border-secondary rounded-xl">
                        <FontAwesomeIcon icon={faCreditCard} className="text-primary text-2xl my-2"/>
                        <p className="text-center mt-3">Hassle-free booking with secure payments.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
