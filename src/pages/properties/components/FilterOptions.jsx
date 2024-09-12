import React from "react";
import FilterOption from "./FilterOption";

function FilterOptions() {

    const LocationTypes = ["Location", "Bangalore North", "Bangalore South", "Bangalore West", "Bangalore East"]
    const PropertyTypes = ["Plots", "Apartments", "Vilas"]
    const PriceRanges = ["Price Range", "0-100k", "100k-500k", "500k-1M"]
    const PropertySizes = ["Property Size", "0-1000", "1000-5000", "5000-10000"]
    const BuildYears = ["Build Year", "2020", "2021", "2022"]

    const filterOptions = [
    {  options:LocationTypes, icon: "/assets/opt1.svg", label: "Location" },
    {  options:PropertyTypes,  icon: "/assets/opt2.svg", label: "Property Type" },
    {  options:PriceRanges, icon: "/assets/opt3.svg", label: "Pricing Range" },
    {  options:PropertySizes,  icon: "/assets/opt4.svg", label: "Property Size" },
    {  options:BuildYears,  icon: "/assets/opt5.svg", label: "Build Year" }
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