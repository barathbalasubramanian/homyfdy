import React, { useState } from 'react';

function FilterComponent({ onSearch }) {
  const [filters, setFilters] = useState({
    keyword: '',
    BHKType: '',
    type: '',
    region: '',
    propertyPrice: '',
  });

  const BHKTypeOptions = ["BHK2", "BHK3", "BHK4", "BHK5", "BHK6"];
  const propertyTypes = ["Apartments", "Villas", "Plots"];
  const regions = ["Bangalore North", "Bangalore South", "Bangalore East", "Bangalore West"];
  const propertyPrices = ["0-100k", "100k-500k", "500k-1M", "1M+"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));  
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const renderSelect = (name, options, label) => (
    <select
      name={name}
      value={filters[name]}
      onChange={handleInputChange}
      className="px-6 py-2.5 flex-1 outline-none bg-white rounded-lg border border-solid border-neutral-200 max-md:px-5"
      aria-label={label}
    >
      <option value="">{`Select ${label}`}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  return (
    <main className="flex flex-col px-9 py-8 mt-5 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
      <h2 className="self-start text-2xl font-medium leading-none text-black">Filter</h2>
      <div className="flex flex-wrap gap-4 mt-14 text-xs font-medium leading-6 whitespace-nowrap text-neutral-600 max-md:mt-10 max-md:max-w-full">
        <input
          required
          type="text"
          name="keyword"
          placeholder="Property Name"
          aria-label="Keyword"
          value={filters.keyword}
          onChange={handleInputChange}
          className="px-6 py-2.5 flex-1 outline-none bg-white rounded-lg border border-solid border-neutral-200 max-md:px-5"
        />
        {renderSelect('region', regions, 'Region')}
        {renderSelect('BHKType', BHKTypeOptions, 'BHK')}
        {renderSelect('type', propertyTypes, 'Property Type')}
        <select
          name="propertyPrice"
          value={filters.propertyPrice}
          onChange={handleInputChange}
          className="px-6 py-2.5 flex-1 outline-none bg-white rounded-lg border border-solid border-neutral-200 max-md:px-5"
          aria-label="Property Price"
        >
          <option value="">Select Price Range</option>
          {propertyPrices.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-8">
        <button
          onClick={handleSearch}
          className="gap-2 self-stretch px-5 py-3.5 my-auto text-sm font-medium text-white whitespace-nowrap bg-emerald-500 rounded-lg"
        >
          Search
        </button>
      </div>
    </main>
  );
}

export default FilterComponent;
