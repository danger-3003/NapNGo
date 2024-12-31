import React,{useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

function BookNow() {
    const location = useLocation();
    const homeSection = useRef();
    const userName = useSelector(state=>state.user.user);
    useEffect(()=>{
        if(location.hash==="#home" && homeSection.current)
        {
        homeSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location]);
    return (
        <>
            <div ref={homeSection} className="h-96 md:pl-52 w-full flex items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <div className="bg-secondary w-full">
                        <h1 className="text-4xl text-primary font-bold text-center">
                            Book Now
                        </h1>
                    </div>
                    <div>
                          
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookNow;
