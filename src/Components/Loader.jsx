import React from 'react'
import './loader.css';

function Loader() {
  return (
    <div className='fixed bg-black/50 flex items-center justify-center z-10 h-screen w-full' style={{backdropFilter: 'blur(5px)'}}>
        <div className="loader"></div>
    </div>
  )
}

export default Loader