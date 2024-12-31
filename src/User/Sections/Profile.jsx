import React,{useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Profile() {
  const location = useLocation();
  const profileSection = useRef();
  const userName = useSelector(state=>state.user.user);
  useEffect(()=>{
    if(location.hash==="#profile" && profileSection.current)
    {
      profileSection.current.scrollIntoView({behavior:"smooth"});
    }
  },[location]);

  return (
    <div ref={profileSection} className='bg-primary h-screen w-full pt-16 md:pl-52'>
      <div className='flex items-center justify-center'>
        Profile
        <div>
          {userName}
        </div>
      </div>
    </div>
  )
}

export default Profile