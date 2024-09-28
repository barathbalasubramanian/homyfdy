import React, { useEffect, useState } from 'react'
import PropertyCard from '../../../components/PropertyCard';
import { useNavigate } from 'react-router-dom';

function FeaturedProperties({property, buttons, setbuttonValue, number}) {

  const [selectedButton, setSelectedButton] = useState(null);
  const Navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setbuttonValue(buttonName)
  };

  return (
    <div className='py-10 px-16 max-md:px-3 max-md:py-6'>
        <div><img src="/assets/design.svg" alt="Design" /></div>
            <div className='py-6 max-md:py-3 max-md:gap-2 flex items-center gap-8 justify-between text-start max-md:flex-col max-md:items-start max-md:pb-10'>
              {
                number === "two" && 
                <div>
                    <div className='averoxfont text-3xl pb-2 uppercase'>Exclusive Listings</div>
                    <div style={{color:"grey"}} className='w-3/4 max-md:w-full'>Discover our handpicked selection of villas, apartments, and Plots. Each listing highlights premium homes and prime investment opportunities through Homyfyd. Click "View Details" to explore these exceptional properties.</div>
                </div>
              }
              {
                number === "three" && 
                <div>
                    <div className='averoxfont text-3xl pb-2 uppercase'>Similar properties for you</div>
                    {/* <div style={{color:"grey"}} className='w-3/4'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</div> */}
                </div>
              }
              <div onClick={()=>Navigate('/properties')} className='cursor-pointer flex items-center gap-3 px-2 py-1' style={{textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"5px"}}>
                  View All Properties
              </div>
          </div>

        <div className='flex items-center gap-6 max-md:flex-wrap max-md:pt-0'>
            {buttons.map((button) => (
                <div
                key={button.name}
                className={`cursor-pointer flex items-center gap-3 px-2 py-1 border border-[#262626] rounded-md ${selectedButton === button.name ? 'bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)]' : 'bg-blackhd'} whitespace-nowrap`}
                onClick={() => handleButtonClick(button.name)}
                >
                {button.name}
                </div>
            ))}
        </div>

        <div className='flex w-full py-10 gap-10 items-center justify-between overflow-scroll max-md:pt-2'>
            {
              property.length <= 0 ? <div className='text-white text-2xl'>NO Properties according to this Filter</div> : null
            }
            {property.map((property) => (
                <PropertyCard key={property.id} property={property} verbose={false} />
            ))}
        </div>

    </div>
  )
}

export default FeaturedProperties