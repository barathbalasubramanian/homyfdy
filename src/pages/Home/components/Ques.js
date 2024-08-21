import React from 'react'

function Ques() {
  return (
    <div className='py-10'>
      <div className='px-16 py-6 flex items-center gap-8 justify-between text-start'>
        <div>
            <div className='text-3xl pb-2'>FREQUENTLY ASKED QUESTIONS</div>
            <div style={{color:"grey"}} className='w-3/4'>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</div>
        </div>
        <div className='cursor-pointer min-w-fit flex items-center gap-3 px-2 py-1' style={{border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"5px"}}>
            View All FAQ's
        </div>
      </div>

      <div className='flex w-full px-16 gap-8 overflow-scroll py-10' style={{borderBottom:"1px solid #262626"}}>
        <div className='ques-con'>
            <div className='pb-1'>How do I search for properties on Homyfyd?</div>
            <div style={{color:"grey"}} className='pb-1 text-sm'>Learn how to use our user-friendly search tools to find properties that match your criteria.</div>
            <div className='cursor-pointer bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)]  text-sm w-fit flex items-center gap-3 px-2 py-1' style={{backgroundColor:"var(--green)",borderRadius:"5px"}}>
                Read More
            </div>
        </div>
        <div className='ques-con'>
            <div className='pb-1'>How do I search for properties on Homyfyd?</div>
            <div style={{color:"grey"}} className='pb-1 text-sm'>Learn how to use our user-friendly search tools to find properties that match your criteria.</div>
            <div className='cursor-pointer bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] text-sm w-fit flex items-center gap-3 px-2 py-1' style={{backgroundColor:"var(--green)",borderRadius:"5px"}}>
                Read More
            </div>
        </div>
        <div className='ques-con'>
            <div className='pb-1'>How do I search for properties on Homyfyd?</div>
            <div style={{color:"grey"}} className='pb-1 text-sm'>Learn how to use our user-friendly search tools to find properties that match your criteria.</div>
            <div className='cursor-pointer bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] text-sm w-fit flex items-center gap-3 px-2 py-1' style={{backgroundColor:"var(--green)",borderRadius:"5px"}}>
                Read More
            </div>
        </div>
        <div className='ques-con'>
            <div className='pb-1'>How do I search for properties on Homyfyd?</div>
            <div style={{color:"grey"}} className='pb-1 text-sm'>Learn how to use our user-friendly search tools to find properties that match your criteria.</div>
            <div className='cursor-pointer bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] text-sm w-fit flex items-center gap-3 px-2 py-1' style={{backgroundColor:"var(--green)",borderRadius:"5px"}}>
                Read More
            </div>
        </div>
      </div>

    </div>
  )
}

export default Ques
