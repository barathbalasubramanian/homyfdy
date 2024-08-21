import React from 'react'

function AbFooter() {
  return (
      <div>

        <div style={{position:"relative"}} className='px-10 py-16'>
          <div className='flex px-10 gap-10 items-center justify-between'>
            <div className=' w-4/5 flex flex-col gap-3 items-start text-start'style={{zIndex:"999"}}>
              <div className='text-2xl'>START YOUR REAL ESTATE JOURNEY TODAY</div>
              <div className='text-sm' style={{color:"grey"}}>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</div>
            </div>
            <div className='cursor-pointer w-fit bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] flex items-center gap-3 px-2 py-1' style={{zIndex:"999",backgroundColor:"var(--green)",borderRadius:"5px"}}>
              Explore Properties
            </div>
          </div>
          <div><img src="/assets/picture1.svg" alt="Picture" style={{position:"absolute", top:"-40px" , left:0 }} /></div>
          <div><img src="/assets/picture1.svg" alt="Picture" style={{position:"absolute", top:"-40px" , right:0 }} /></div>
        </div>

        <div className='w-full px-16 py-10 flex justify-between'>
          <div className='flex flex-col items-start'>
            <div className='text-4xl py-3' style={{color:"green",fontWeight:"200"}}>HOMYFDY.AI</div>
            <div className='flex'>
              <div className='flex flex-col items-start gap-4 p-8 pl-0'>
                <div style={{color:"grey"}}>Overview</div>
                <div>About Us</div>
                <div>Features</div>
                <div>Properties</div>
                <div>FAQ's</div>
              </div>
              <div className='flex flex-col items-start gap-4 p-8 pl-0'>
                <div style={{color:"grey"}}>Explore</div>
                <div>Developers</div>
                <div>Blogs</div>
                <div>Press mentions</div>
                <div>Careers</div>
              </div>
            </div>
          </div>
          <div style={{alignSelf:"end",backgroundColor:"white",color:"black",borderRadius:"10px",height:"12em",width:"30em"}}> 
            <div style={{width:'20em'}} className='p-6 flex flex-col gap-2'>
              <div className='flex gap-4 items-start text-start'>
                <div style={{padding:"5px 4px 0 0"}}><img src="/assets/map.svg" alt="Map" /></div>
                <div style={{width:"12em"}}>7th b main Btm 1st stage Bangalore Karnataka 560029</div>
              </div>
              <div className='flex gap-4 items-center text-start'>
                <div><img src="/assets/sms.svg" alt="Map" /></div>
                <div>hello@homyfyd.ai</div>
              </div>
              <div className='flex gap-4 items-center text-start'>
                <div><img src="/assets/call.svg" alt="Map" /></div>
                <div>(480) 555-0103</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AbFooter
