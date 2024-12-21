import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faFacebook,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    const contactRef = useRef(null);
    const location = useLocation();
    const [user,setUser] = useState({name:"",email:"",message:""});

    useEffect(() => {
        if (location.hash === "#contact") {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    const handleUserMessage=(event)=>{
        event.preventDefault();
        console.log(user);
        setUser({name:"",email:"",message:""});
    }

    return (
        <div
            ref={contactRef}
            className="bg-accent pt-20 pb-10 flex items-center justify-center flex-col"
        >
            <div className="w-[90vw] lg:w-[60rem] xl:w-[70rem]">
                <div className="text-center mb-10"> 
                    <p className="font-bold text-3xl sm:text-3xl md:text-4xl text-primary">
                        Contact Us
                    </p>
                </div>
                <div className="flex items-center justify-center flex-col md:flex-row h-max gap-10">
                    <div className="w-[80vw] sm:w-[70vw] md:w-[50%]">
                        <p className="text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl">
                            Get In Touch
                        </p>
                        <p className="text-lg lg:text-xl my-4 lg:my-5">
                            Feel free to reach out with any questions or
                            queries.
                        </p>
                        <div>
                            <div className="flex items-center justify-start gap-3 text-secondary flex-row mb-4">
                                <div className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full text-accent">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <div>
                                    <p className="font-bold text-xl">Address</p>
                                    <p>RTC Complex, Visakhapatnam, India.</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-3 text-secondary flex-row mb-4">
                                <div className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full text-accent">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div>
                                    <p className="font-bold text-xl">
                                        Phone Number
                                    </p>
                                    <a href="tel:">+91 1234567890</a>
                                </div>
                            </div>
                            <div className="flex items-center justify-start gap-3 text-secondary flex-row mb-4">
                                <div className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full text-accent">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div>
                                    <p className="font-bold text-xl">Email</p>
                                    <a href="mailto:">support@napngo.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 border-t border-secondary pt-4">
                            <p className="text-primary text-lg lg:text-xl font-semibold">
                                Reach Us:
                            </p>
                            <div className="flex items-center justify-start gap-4 mt-2">
                                <a target="_blank" href="">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="text-xl md:text-2xl lg:text-3xl bg-white p-1 md:p-2 rounded-full text-secondary cursor-pointer hover:text-primary"
                                        style={{
                                            filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.3))",
                                        }}
                                    />
                                </a>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className="text-xl md:text-2xl lg:text-3xl bg-white p-1 md:p-2 rounded-full text-secondary cursor-pointer hover:text-primary"
                                        style={{
                                            filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.3))",
                                        }}
                                    />
                                </a>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon
                                        icon={faWhatsapp}
                                        className="text-xl md:text-2xl lg:text-3xl bg-white p-1 md:p-2 rounded-full text-secondary cursor-pointer hover:text-primary"
                                        style={{
                                            filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.3))",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-[80vw] sm:w-[70vw] md:w-[50%] rounded-2xl p-5 lg:p-10">
                        <p className="text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl mb-3">
                            Send a Message
                        </p>
                        <form onSubmit={handleUserMessage}>
                            <div>
                                <input
                                    type="text"
                                    name="Name"
                                    value={user.name}
                                    placeholder="Name"
                                    className="w-full border-b-2 rounded border-secondary py-1 px-3 my-2 bg-accent/30 text-secondary outline-none"
                                    onChange={(e)=>{setUser({...user,name:user.name=e.target.value})}}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="Email"
                                    value={user.email}
                                    placeholder="E-mail address"
                                    className="w-full border-b-2 rounded border-secondary py-1 px-3 my-2 bg-accent/30 text-secondary outline-none"
                                    onChange={(e)=>{setUser({...user,email:user.email=e.target.value})}}
                                />
                            </div>
                            <div>
                                <textarea
                                    name="Message"
                                    rows="3"
                                    value={user.message}
                                    placeholder="Message"
                                    className="w-full border-b-2 rounded border-secondary py-1 px-3 my-2 bg-accent/30 text-secondary outline-none"
                                    onChange={(e)=>{setUser({...user,message:user.message=e.target.value})}}
                                ></textarea>
                            </div>
                            <p className="text-primary text- mt-3">
                                By Submitting you agree that you'll be sharing
                                your Name and Email-id with us.
                            </p>
                            <div className="flex items-center justify-end mt-4">
                                <button type="submit" className="bg-primary hover:bg-primary/80 rounded-full px-5 py-1 text-bg transition-all duration-500">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
