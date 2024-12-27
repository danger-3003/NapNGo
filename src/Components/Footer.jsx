import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/LogoLight.svg"

function Footer() {
  return (
    <footer className='bg-secondary font-[poppins] py-10 w-full flex items-center justify-center'>
      <div>
        
      </div>
      <div className='flex items-center justify-around w-full md:w-[90vw] lg:w-[60rem] xl:w-[70rem]'>
        <img src={Logo} alt="NapNGo Logo" className='w-40'/>
        <div className='text-accent flex items-center justify-center text-xl font-extralight flex-col'>
          <p className='text-2xl font-semibold'>Quick Links</p>
          <Link to="/#home">Home</Link>
          <Link to="/#whyUs">Why Us</Link>
          <Link to="/#FAQ">FAQ's</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer