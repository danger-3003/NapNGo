import React,{useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

function BookNow({user}) {
    const location = useLocation();
    const homeSection = useRef();

    console.log(location);
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
                    <p>{user}</p>
                </div>
            </div>
        </>
    );
}

export default BookNow;
