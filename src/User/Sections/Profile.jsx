import React,{useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

function Profile() {
  const location = useLocation();
  const profileSection = useRef();

  console.log(location);
  useEffect(()=>{
    if(location.hash==="#profile" && profileSection.current)
    {
      profileSection.current.scrollIntoView({behavior:"smooth"});
    }
  },[location]);

  return (
    <div ref={profileSection} className='bg-primary h-screen w-full pl-52'>
      <div>
        Profile
      </div>
    </div>
  )
}

export default Profile