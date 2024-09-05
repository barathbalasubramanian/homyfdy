import React, { useState } from 'react'

function Welcome() {
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [priceRange, setPriceRange] = useState("");

    const handleSearch = () => {
        console.log("Location:", location);
        console.log("Property Type:", propertyType);
        console.log("Price Range:", priceRange);
    };

  return (
    <div className=''> 
        <div className='welcome pb-20'>
            <div className='px-20 py-16 flex gap-6 items-center w-full justify-between max-md:flex-col-reverse max-md:gap-10 max-md:px-6 max-md:py-10'>
                <div>
                    <div className='text-7xl max-md:text-4xl text-white'>Uncover Your Dream Residence</div>
                    <div className='text-lg py-1 text-white'>Now with</div>
                    <div className='text-2xl py-1' style={{color:"#1FC827"}}>HOMYFYD GPT</div>
                    <div className='text-lg py-1 text-white'>Homyfyd Real Estate Virtual Assistant</div>
                </div>
                <div><img src="/assets/welimg.svg" alt="Building" /></div>
            </div>
            <div className='home-input text-black flex max-md:flex-col max-md:items-start max-md:gap-4 justify-between w-[60%] max-md:w-[90%] max-md:ml-2 items-center ml-20 bg-white px-10 py-6 rounded-2xl'>
                <div  className='flex flex-col gap-1'>
                    <label htmlFor="location" className='pl-1 text-[14px]'>Location:</label>
                    <select
                    className='text-neutral-400 text-sm'
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    >
                    <option value="">Select Location</option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="miami">Miami</option>
                    <option value="san-francisco">San Francisco</option>
                    </select>
                </div>

                <div  className='flex flex-col gap-1'>
                    <label htmlFor="propertyType" className='pl-1 text-[14px]'>Property Type:</label>
                    <select
                    className='text-neutral-400 text-sm'
                    id="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    >
                    <option value="">Select Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                    <option value="commercial">Commercial</option>
                    </select>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="priceRange" className='pl-1 text-[14px]'>Price Range:</label>
                    <select
                    className='text-neutral-400 text-sm'
                    id="priceRange"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    >
                    <option value="">Select Price Range</option>
                    <option value="0-100k">0 - 100k</option>
                    <option value="100k-500k">100k - 500k</option>
                    <option value="500k-1M">500k - 1M</option>
                    <option value="1M+">1M+</option>
                    </select>
                </div>

                <div onClick={handleSearch}>
                    <button className="flex gap-1.5 items-center self-stretch px-2 py-2 my-auto text-sm text-white bg-green-600 rounded-lg">
                        <img loading="lazy" src="/assets/sea.svg" className="object-contain shrink-0 self-stretch my-auto aspect-square" alt="" />
                        <span className='hidden max-md:block'>Search</span>
                    </button>
                </div>
            </div>
        </div>

        <marquee behavior="" direction="" className="px-20 py-2 bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)]">
            <pre>
                Streamlining Your Home Buying Journey    |     The One-Stop Solution for All Your Home Buying Needs Book     |     Your Dream Home with Just a Few Clicks
            </pre>
        </marquee>
    </div>
  )
}

export default Welcome
