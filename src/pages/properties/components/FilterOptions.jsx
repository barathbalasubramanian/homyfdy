import React from "react";
import FilterOption from "./FilterOption";

function FilterOptions() {

    const inquiryTypes = ['Select Inquiry Type', 'General Inquiry', 'Property Listing', 'Buying', 'Selling'];
    const hearAboutUs = ['Select', 'Friend', 'Social Media', 'Advertisement', 'Other'];

    const filterOptions = [
    {  options:inquiryTypes, icon: "/assets/opt1.svg", label: "Location" },
    {  options:hearAboutUs,  icon: "/assets/opt2.svg", label: "Property Type" },
    {  options:inquiryTypes, icon: "/assets/opt3.svg", label: "Pricing Range" },
    {  options:hearAboutUs,  icon: "/assets/opt4.svg", label: "Property Size" },
    {  options:hearAboutUs,  icon: "/assets/opt5.svg", label: "Build Year" }
  ];

  return (
    <section className="flex flex-wrap gap-5 items-start p-2.5 w-full rounded-xl bg-zinc-900 max-md:max-w-full">
      {filterOptions.map((option, index) => (
        <FilterOption key={index} icon={option.icon} label={option.label} options={option.options}/>
      ))}
    </section>
  );
}

export default FilterOptions;