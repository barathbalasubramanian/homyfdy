import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function FilterComponent({ onSearch }) {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    type: '',
    region: '',
    priceRange: 0,
    areaRange: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSliderChange = (name) => (event, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <main className="flex flex-col px-9 py-8 mt-5 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
      <h2 className="self-start text-2xl font-medium leading-none text-black">Filter</h2>
      <div className="flex flex-wrap gap-4 mt-14 text-xs font-medium leading-6 whitespace-nowrap text-neutral-600 max-md:mt-10 max-md:max-w-full">
        <input
          type="text"
          name="keyword"
          placeholder="Keyword"
          aria-label="Keyword"
          value={filters.keyword}
          onChange={handleInputChange}
          className="px-6 py-2.5 flex-1 outline-none bg-white rounded-lg border border-solid border-neutral-200 max-md:px-5"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          aria-label="Location"
          value={filters.location}
          onChange={handleInputChange}
          className="px-6 py-2.5 flex-1 outline-none bg-white rounded-lg border border-solid border-neutral-200 max-md:px-5"
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          aria-label="Type"
          value={filters.type}
          onChange={handleInputChange}
          className="px-6 py-2.5 flex-1 outline-none bg-white rounded-lg border border-solid border-neutral-200 max-md:px-5"
        />
        <input
          type="text"
          name="region"
          placeholder="Region"
          aria-label="Region"
          value={filters.region}
          onChange={handleInputChange}
          className="px-6 py-2.5 flex-1 outline-none bg-white rounded-lg border border-solid border-neutral-200 max-md:px-5"
        />
      </div>
      <div className="flex pl-4 flex-wrap gap-5 justify-between mt-8 w-full max-md:mr-0.5 max-md:flex-col max-md:max-w-full">
        <div className="flex flex-wrap w-[50%] gap-10 max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 items-start max-w-full basis-0 w-fit">
            <label className="text-base font-medium text-nowrap text-black" htmlFor="priceRange">
              Price Range
            </label>
            <Slider
              value={filters.priceRange}
              onChange={handleSliderChange('priceRange')}
              aria-labelledby="price-range-slider"
              min={0}
              max={100}
              valueLabelDisplay="auto"
              color="secondary"
            />
            <div className="mt-2 text-base font-medium text-black">{filters.priceRange}</div>
          </div>
          <div className="flex flex-col grow shrink-0 items-start max-w-full basis-0 w-fit">
            <label className="text-base font-medium text-nowrap text-black" htmlFor="areaRange">
              Area Range
            </label>
            <Slider
              value={filters.areaRange}
              onChange={handleSliderChange('areaRange')}
              aria-labelledby="area-range-slider"
              min={0}
              max={100}
              valueLabelDisplay="auto"
              color="primary"
            />
            <div className="mt-2 text-base font-medium text-black">{filters.areaRange}</div>
          </div>
        </div>
        <div>
            <button
            onClick={handleSearch}
            className="gap-2 self-stretch px-5 py-3.5 my-auto text-sm font-medium text-white whitespace-nowrap bg-emerald-500 rounded-lg"
            >
            Search
            </button>
        </div>  
      </div>
    </main>
  );
}

export default FilterComponent;
