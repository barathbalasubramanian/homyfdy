import React from 'react'

function PlayStore() {
  return (
    <div className='px-16 py-32'>
      <div className='flex flex-col items-center gap-6 px-10 py-16' style={{border:"1px solid white" ,borderRadius:"10px"}}>
        <div className='text-2xl' style={{color:'grey'}}>Download the Mobile Application from Google Play Store and App Store</div>
        <div className='flex gap-8'>
            <img src="/assets/play.svg" alt="Play" />
            <img src="/assets/app.svg" alt="Play" />
        </div>
      </div>
    </div>
  )
}

export default PlayStore;

