import React from 'react'
import { useNavigate } from 'react-router-dom'

function PropertyCard({property,verbose}) {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate('/propertydetails', { state: { property } });
  };

  return (
    <div key={property.id} className={`prop-con ${verbose ? 'bg-white' : ''}`} > 
      <div><img src="/assets/property.svg" alt="Property" /></div>
      <div>
        <div className={`text-lg ${!verbose ? 'text-white' : 'text-black'}`}>{property.propertyType}</div>
        <div style={{color:"grey"}}>{property.description}</div>
      </div>
      {
        !verbose && (
          <div className='flex items-center justify-between max-md:flex-wrap max-md:gap-2 max-md:items-start max-md:justify-start'> 
            <div className='cursor-pointer flex items-center gap-3 px-4 py-1' style={{fontSize:"12px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"8px"}}>
                <img src="/assets/bed.svg" alt="Bed" /> {property.bedrooms}-Bedroom
            </div>
            <div className='cursor-pointer flex items-center gap-3 px-4 py-1' style={{fontSize:"12px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"8px"}}>
                <img src="/assets/bth.svg" alt="Bed" /> {property.bathrooms}-Bathroom
            </div>
            <div className='cursor-pointer flex items-center gap-3 px-4 py-1' style={{fontSize:"12px",textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"8px"}}>
                <img src="/assets/vila.svg" alt="Bed" /> {property.maxRooms}-Vila
            </div>
          </div>
        )
      }
      <div className='flex items-center justify-between'>
        <div>
            <div style={{color:"grey",fontSize:"12px"}}>Price</div>
            <div className={`${!verbose ? 'text-white' : 'text-black'}`}>${property.propertyPrice}</div>
        </div>
        <div onClick={handleViewDetails} className='cursor-pointer border-none flex items-center w-fit bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] gap-3 px-2 py-2' style={{fontSize:"13px", textWrap:"nowrap", backgroundColor:"var(--green)", borderRadius:"5px"}}>
          <img src="/assets/vila.svg" alt="Bed"/> View Property Details
        </div>
      </div>
    </div>
  )
}

export default PropertyCard


