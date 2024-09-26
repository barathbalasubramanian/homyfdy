import React from 'react'
import { useNavigate } from 'react-router-dom'

function VisitsPropertyCard({property}) {

  const Navigate = useNavigate();
  return (
    <div className='prop-con-pro flex gap-2 max-md:flex-col'> 
      <div><img src={property.MainImage} alt="Property" /></div>
      <div className='flex flex-col gap-4'>
        <div>
            <div className='text-lg'>{property.propertyName}</div>
            <div className='text-sm flex items-center justify-between pr-4'>
              <div>{property.propertyType}</div>
              <div>{property.propertyBHK}</div>
            </div>
            <div style={{color:"grey"}}>{property.description}</div>
        </div>
        <div className='flex items-center gap-2 max-md:flex-wrap'> 
            <div className='cursor-pointer flex items-center text-white gap-3 px-4 py-1' style={{fontSize:"12px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"8px"}}>
                <img src="/assets/bed.svg" alt="Bed" />  {property.bedrooms}-Bedroom
            </div>
            <div className='cursor-pointer flex items-center text-white gap-3 px-4 py-1' style={{fontSize:"12px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"8px"}}>
                <img src="/assets/bth.svg" alt="Bed" /> {property.bathrooms}-Bathroom
            </div>
            <div className='cursor-pointer flex items-center text-white gap-3 px-4 py-1' style={{fontSize:"12px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"8px"}}>
                <img src="/assets/vila.svg" alt="Bed" /> {property.maxRooms}Vila
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <div>
                <div style={{color:"grey",fontSize:"12px"}}>Price</div>
                <div className='text-xl'>${property.propertyPrice}</div>
            </div>
            <div onClick={()=>{Navigate(`/propertydetails/${property.id}`)}} className='cursor-pointer flex text-white items-center w-fit gap-3 px-2 py-2' style={{fontSize:"13px",textWrap:"nowrap",backgroundColor:"var(--green)",borderRadius:"5px"}}>
                <img src="/assets/vila.svg" alt="Bed" /> View Property Details
            </div>
        </div>
      </div>
    </div>
  )
}

export default VisitsPropertyCard
