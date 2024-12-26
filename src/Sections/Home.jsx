import React,{useRef, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import Bg from "../assets/BgHome.png"

function Home() {
    const location = useLocation();
    const homeSection = useRef(null);

    useEffect(()=>{
        if(location.hash === '#home'){
            homeSection.current.scrollIntoView({behavior: 'smooth'})
        }
    })

  return (
    <div className='h-[35rem] flex items-center justify-center' ref={homeSection} style={{backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.3),rgba(0,0,0,0.8)), url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='flex items-center justify-center flex-col w-[90vw] lg:w-[50rem] h-full'>
            <p className='uppercase tracking-widest text-4xl md:text-5xl font-bold text-center' style={{background:`linear-gradient(to bottom, rgba(244,242,236,0.3),rgba(244,242,236,0.5)), url(${Bg})`,backgroundClip: 'text',backgroundSize:"cover",color: 'transparent'}}>
                Discover your perfect space
            </p>
            <Link to="/userName" className="relative inline-flex items-center mt-5 px-10 py-1.5 overflow-hidden text-lg font-medium text-accent border-2 border-accent rounded-full hover:text-white group hover:bg-gray-50">
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative text-sm md:text-base font-[poppins]">Book Now</span>
            </Link>
        </div>
    </div>
  )
}

export default Home