import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Welcome({ onFilter, filters, setFilters }) {

    const navigate = useNavigate();
    const handleSearch = () => {
        if (filters.location  !== '' || filters.propertyType !== '' || filters.priceRange !== '') {
            onFilter(filters.location, filters.propertyType, filters.priceRange);
            navigate('/properties', { state: { location: filters.location , propertyType: filters.propertyType , priceRange: filters.priceRange  } });
        }
    };

    return (
    <div className=''> 
        <div className='welcome pb-20'>
            <div className='px-20 py-16 flex gap-6 items-center w-full justify-between max-md:flex-col-reverse max-md:gap-10 max-md:px-6 max-md:py-10'>
                <div>
                    <div className='averoxfont text-7xl max-md:text-4xl text-white'>Uncover Your Dream Residence</div>
                    <div className='text-lg py-1 text-white'>Now with</div>
                    <div className='averoxfont text-2xl py-1' style={{color:"#1FC827"}}>HOMYFYD GPT</div>
                    <div className='text-lg py-1 text-white'>Homyfyd Real Estate Virtual Assistant</div>
                </div>
                <div><img src="/assets/build.svg" alt="Building" /></div>
            </div>
            <div className='flex items-center justify-around w-[90%] max-lg:w-[100%] max-lg:flex-col max-lg:gap-3'>
                <div className='home-input text-black flex max-md:flex-col max-md:items-start max-md:gap-4 justify-between w-[60%] max-md:w-[90%] max-md:ml-2 items-center ml-20 bg-white px-10 py-6 rounded-2xl'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="location" className='pl-1 text-[14px]'>Location:</label>
                        <select className='text-neutral-400 text-sm' id="location" value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })}>
                            <option value="">Select Location</option>
                            <option value="bangalorenorth">Bangalore North</option>
                            <option value="bangaloresouth">Bangalore South</option>
                            <option value="bangaloreeast">Bangalore East</option>
                            <option value="bangalorewest">Bangalore West</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="propertyType" className='pl-1 text-[14px]'>Property Type:</label>
                        <select className='text-neutral-400 text-sm' id="propertyType" value={filters.propertyType} onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}>
                            <option value="">Select Property Type</option>
                            <option value="plots">Plots</option>
                            <option value="apartments">Apartments</option>
                            <option value="villas">Villas</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="priceRange" className='pl-1 text-[14px]'>Price Range:</label>
                        <select className='text-neutral-400 text-sm' id="priceRange" value={filters.priceRange} onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}>
                            <option value="">Select Price Range</option>
                            <option value="0-100k">0 - 100k</option>
                            <option value="100k-500k">100k - 500k</option>
                            <option value="500k-1M">500k - 1M</option>
                        </select>
                    </div>

                    <div onClick={handleSearch}>
                        <button className="flex gap-1.5 items-center self-stretch px-2 py-2 my-auto text-sm text-white bg-green-600 rounded-lg">
                            <img loading="lazy" src="/assets/sea.svg" className="object-contain shrink-0 self-stretch my-auto aspect-square" alt="" />
                            <span className='hidden max-md:block'>Search</span>
                        </button>
                    </div>
                </div>
                <div className='text-white'>Or</div>
                <div className='text-md flex items-center justify-between text-white bg-[#1A1A1A] rounded-full px-4 py-1'>
                    Try <span className='text-[#1FC827] px-2'>HOMYFYD GPT</span> Search <img src="assets/round.svg" className='w-15 mt-[5px]' alt="" />
                </div>
            </div>
        </div>

        <marquee behavior="" direction="" className="px-20 py-2 bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)]">
            <pre>
                Streamlining Your Home Buying Journey    |     The One-Stop Solution for All Your Home Buying Needs Book Your Dream Home with Just a Few Clicks
            </pre>
        </marquee>
    </div>
  )
}

export default Welcome;
