import React from 'react'

function PropertyCard() {
  return (
    <div className='prop-con' > 
      <div><img src="/assets/property.svg" alt="Property" /></div>
      <div>
        <div className='text-lg'>SeaSide Vila</div>
        <div style={{color:"grey"}}>A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood  3-bathroom villa in a peaceful suburban neighborhood </div>
      </div>
      <div className='flex items-center justify-between max-md:flex-wrap max-md:gap-2 max-md:items-start max-md:justify-start'> 
        <div className='cursor-pointer flex items-center gap-3 px-4 py-1' style={{fontSize:"12px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"8px"}}>
            <img src="/assets/bed.svg" alt="Bed" /> 4-Bedroom
        </div>
        <div className='cursor-pointer flex items-center gap-3 px-4 py-1' style={{fontSize:"12px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"8px"}}>
            <img src="/assets/bth.svg" alt="Bed" /> 2-Bathroom
        </div>
        <div className='cursor-pointer flex items-center gap-3 px-4 py-1' style={{fontSize:"12px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"8px"}}>
            <img src="/assets/vila.svg" alt="Bed" /> Vila
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div>
            <div style={{color:"grey",fontSize:"12px"}}>Price</div>
            <div className='text-xl'>$550,000</div>
        </div>
        <div className='cursor-pointer flex items-center w-fit bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] gap-3 px-2 py-2' style={{fontSize:"13px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--green)",borderRadius:"5px"}}>
            <img src="/assets/vila.svg" alt="Bed" /> View Property Details
        </div>
      </div>
    </div>
  )
}

export default PropertyCard


