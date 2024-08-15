import React, { useState } from 'react'
import PropertyCard from '../../../components/PropertyCard';


function FeaturedProperties() {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const buttons = [
    { name: 'Homyfyd reliable' },
    { name: 'Hot projects' },
    { name: 'Newly launched' },
  ];

  return (
    <div className='py-10 px-16'>
        <div><img src="/assets/design.svg" alt="Design" /></div>
            <div className='py-6 flex items-center gap-8 justify-between text-start'>
            <div>
                <div className='text-3xl pb-2'>WHAT OUR CLIENTS SAY</div>
                <div style={{color:"grey"}} className='w-3/4'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</div>
            </div>
            <div className='cursor-pointer flex items-center gap-3 px-2 py-1' style={{textWrap:"nowrap",border:"1px solid #262626",backgroundColor:"var(--blackhd)",borderRadius:"5px"}}>
                View All Testimonals
            </div>
        </div>

        <div className='flex items-center gap-6'>
            {buttons.map((button) => (
                <div
                key={button.name}
                className='cursor-pointer flex items-center gap-3 px-2 py-1'
                style={{
                    textWrap: 'nowrap',
                    border: '1px solid #262626',
                    backgroundColor: selectedButton === button.name ? 'green' : 'var(--blackhd)',
                    borderRadius: '5px',
                }}
                onClick={() => handleButtonClick(button.name)}
                >
                {button.name}
                </div>
            ))}
        </div>

        <div className='flex w-full py-10 gap-10 items-center justify-between overflow-scroll'>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
        </div>

    </div>
  )
}

export default FeaturedProperties