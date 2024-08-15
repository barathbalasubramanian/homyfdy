import React from 'react'

function CommonContact() {
  return (
    <div>
      <div className='w-full flex justify-between py-10 px-32' style={{height:"15em"}}>
        <div className='flex gap-3 items-center'>
            <img src="/assets/profileimg.svg" style={{width:"4em",height:"4em",borderRadius:"50%"}} alt="Profile" />
            <div className='flex flex-col gap-1 items-start'>
                <div className='text-xl'>
                    JANE COOPER
                </div>
                <div className='text-sm'>
                    janecooper@example.com
                </div>
            </div>
        </div>
        <div className='text-8xl self-end' style={{fontWeight:'200',color:"green"}}>
            HOMYFYD
        </div>
      </div>
    </div>
  )
}

export default CommonContact
