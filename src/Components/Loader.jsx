import React from 'react'
import './loader.css';
import GIF from "../assets/User/Loader.gif";

function Loader() {
  return (
    <div className='fixed bg-black/50 flex items-center justify-center z-[11] h-screen w-full' style={{backdropFilter: 'blur(5px)'}}>
        {/* <div className="loader"></div> */}
        <div>
            <img src={GIF} alt="NapNGo Loader" className="w-28 h-28 md:w-36 md:h-36"/>
        </div>
    </div>
  )
}

export default Loader