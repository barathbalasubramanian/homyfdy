import React, { useState } from "react";

// Hardcoded map for Location values
const locationMapping = {
  bangalorenorth: "Bangalore North",
  bangaloresouth: "Bangalore South",
  bangaloreeast: "Bangalore East",
  bangalorewest: "Bangalore West",
};

// Function to capitalize propertyType
const capitalizePropertyType = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";
};

function FilterOption({ icon, label, options, onFilterChange, bhkType, Location, propertyType, priceRange }) {
  // Local state to track selected values
  const [selectedValue, setSelectedValue] = useState(() => {
    return (
      (label === "BHK Type" && (bhkType !== "BHK Type" ? bhkType : '')) ||
      (label === "Location" && Location ? locationMapping[Location.toLowerCase()] : undefined) ||
      (label === "Property Type" && propertyType ? capitalizePropertyType(propertyType) : undefined) ||
      (label === "Pricing Range" && priceRange) ||
      undefined
    );
  });

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue(newValue); // Update local state

    // Pass the updated value back to parent via the onFilterChange callback
    onFilterChange(label, newValue);
  };

  return (
    <div className="flex flex-col flex-1 gap-4 shrink basis-0 min-w-[240px] border-neutral-800">
      <div className="relative border-neutral-800">
        <div
          style={{
            borderRadius: "10px",
            border: "1px solid #262626",
            padding: "4px 10px",
            backgroundColor: "#141414",
          }}
          className="flex flex-1 shrink gap-2 border-neutral-800 items-center self-stretch my-auto text-sm font-medium basis-0 text-neutral-400"
        >
          <img
            loading="lazy"
            src={icon}
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt=""
          />
          <div className="shrink-0 w-0 border border-solid bg-neutral-800 border-neutral-800 h-[42px]" />
          <div className="flex-1">
            <select
              id={label.toLowerCase().replace(/\s/g, "-")}
              style={{ backgroundColor: "#141414" }}
              className="flex outline-none border-none gap-3 items-center px-5 py-2 pl-2 w-full text-sm font-medium leading-none rounded-md border text-stone-500 appearance-none"
              onChange={handleSelectChange}
              value={selectedValue} // Controlled value from state
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <img
          loading="lazy"
          src="/assets/downarr.svg"
          alt=""
          className="object-contain absolute right-5 top-1/2 transform -translate-y-1/2 w-5 aspect-square pointer-events-none"
        />
      </div>
    </div>
  );
}

export default FilterOption;
