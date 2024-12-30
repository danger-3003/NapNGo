import React,{useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

function History() {
  const location = useLocation();
  const historySection = useRef();

  console.log(location);
  useEffect(()=>{
    if(location.hash==="#history" && historySection.current)
    {
      historySection.current.scrollIntoView({behavior:"smooth"});
    }
  },[location]);

  return (
    <div ref={historySection} className='bg-secondary h-screen w-full pl-52'>
      <div>
        History
      </div>
    </div>
  )
}

export default History