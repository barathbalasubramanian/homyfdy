import React from 'react'

function Footer() {
  return (
    <div style={{backgroundColor:"var(--blackhd)"}} className=' py-3 w-full flex px-10 items-center justify-between'>
      <div>Terms & Conditions</div>
      <div>Privacy Policy</div>
      <div className='flex gap-6 items-center'>
        <div><img src="/assets/fb.svg" alt="FaceBook" /></div>
        <div><img src="/assets/linkedin.svg" alt="FaceBook" /></div>
        <div><img src="/assets/twitter.svg" alt="FaceBook" /></div>
        <div><img src="/assets/utube.svg" alt="FaceBook" /></div>
      </div>
    </div>
  )
}

export default Footer
