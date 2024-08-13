import React from 'react'

function Clients() {
  return (
    <div className='py-10'>
      <div className='px-16 py-6 flex items-center gap-8 justify-between text-start'>
        <div>
            <div className='text-3xl pb-2'>WHAT OUR CLIENTS SAY</div>
            <div style={{color:"grey"}} className='w-3/4'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</div>
        </div>
        <div className='cursor-pointer flex items-center gap-3 px-2 py-1' style={{border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"5px"}}>
            View All Testimonals
        </div>
      </div>

      <div className='flex w-full px-16 gap-8 overflow-scroll py-10' style={{borderBottom:"1px solid #262626"}}>
        <div className='ques-con'>
            <div><img src="/assets/star.svg" alt="Star" /></div>
            <div className='pb-1'>Exceptional Service!</div>
            <div style={{color:"grey"}} className='pb-1 text-sm'>Our experience with Homyfyd was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</div>
            <div className='flex items-center gap-2'>
                <div><img src="/assets/profile.svg" alt="Pro" style={{width:"50px",height:"50px",objectFit:"contain"}} /></div>
                <div className='flex flex-col text-start'>
                    <div>Wade Warden</div>
                    <div style={{color:"grey"}}>Bangalore</div>
                </div>
            </div>
        </div>
        <div className='ques-con'>
            <div><img src="/assets/star.svg" alt="Star" /></div>
            <div className='pb-1'>Exceptional Service!</div>
            <div style={{color:"grey"}} className='pb-1 text-sm'>Our experience with Homyfyd was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</div>
            <div className='flex items-center gap-2'>
                <div><img src="/assets/profile.svg" alt="Pro" style={{width:"50px",height:"50px",objectFit:"contain"}} /></div>
                <div className='flex flex-col text-start'>
                    <div>Wade Warden</div>
                    <div style={{color:"grey"}}>Bangalore</div>
                </div>
            </div>
        </div>

        <div className='ques-con'>
            <div><img src="/assets/star.svg" alt="Star" /></div>
            <div className='pb-1'>Exceptional Service!</div>
            <div style={{color:"grey"}} className='pb-1 text-sm'>Our experience with Homyfyd was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</div>
            <div className='flex items-center gap-2'>
                <div><img src="/assets/profile.svg" alt="Pro" style={{width:"50px",height:"50px",objectFit:"contain"}} /></div>
                <div className='flex flex-col text-start'>
                    <div>Wade Warden</div>
                    <div style={{color:"grey"}}>Bangalore</div>
                </div>
            </div>
        </div>
        <div className='ques-con'>
            <div><img src="/assets/star.svg" alt="Star" /></div>
            <div className='pb-1'>Exceptional Service!</div>
            <div style={{color:"grey"}} className='pb-1 text-sm'>Our experience with Homyfyd was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</div>
            <div className='flex items-center gap-2'>
                <div><img src="/assets/profile.svg" alt="Pro" style={{width:"50px",height:"50px",objectFit:"contain"}} /></div>
                <div className='flex flex-col text-start'>
                    <div>Wade Warden</div>
                    <div style={{color:"grey"}}>Bangalore</div>
                </div>
            </div>
        </div>
        <div className='ques-con'>
            <div><img src="/assets/star.svg" alt="Star" /></div>
            <div className='pb-1'>Exceptional Service!</div>
            <div style={{color:"grey"}} className='pb-1 text-sm'>Our experience with Homyfyd was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</div>
            <div className='flex items-center gap-2'>
                <div><img src="/assets/profile.svg" alt="Pro" style={{width:"50px",height:"50px",objectFit:"contain"}} /></div>
                <div className='flex flex-col text-start'>
                    <div>Wade Warden</div>
                    <div style={{color:"grey"}}>Bangalore</div>
                </div>
            </div>
        </div>
       
      </div>

    </div>
  )
}

export default Clients
