import React from 'react'

function LoginDiv({setAuthStatus, setIsLoginOpen, setLoginDiv}) {
  return (
    <div className='absolute top-[5em] right-[2em] bg-white px-6 text-black space-y-2 rounded-lg py-8'>
      <div className='text-xl'>Explore. Experience. <span className='text-[#1FC827]'>Buy</span></div>
      <div className='text-sm'>Get personized experience by logging in</div>
      <div className='flex mt-6'>
        <div onClick={()=>{setAuthStatus("login");setIsLoginOpen(true);setLoginDiv(false)}} className='cursor-pointer text-sm px-4 py-2 bg-[#1FC827] rounded-md text-white'>Login</div>
        <div onClick={()=>{setAuthStatus("signup");setIsLoginOpen(true);setLoginDiv(false)}} className='cursor-pointer text-sm px-4 py-2 bg-white rounded-md text-black'>Sign Up</div>
      </div>
    </div>
  )
}

export default LoginDiv
