import React,{useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

function Help() {
  const location = useLocation();
  const helpSection = useRef();

  console.log(location);
  useEffect(()=>{
    if(location.hash==="#help" && helpSection.current)
    {
      helpSection.current.scrollIntoView({behavior:"smooth"});
    }
  },[location]);

  return (
    <div ref={helpSection} className='bg-secondary h-screen w-full pl-52'>
      <div>
        Help
      </div>
    </div>
  )
}

export default Help