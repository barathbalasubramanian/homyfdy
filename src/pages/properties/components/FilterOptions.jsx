import React from "react";
import FilterOption from "./FilterOption";

function FilterOptions() {

    const inquiryTypes = ['Select Inquiry Type', 'General Inquiry', 'Property Listing', 'Buying', 'Selling'];
    const hearAboutUs = ['Select', 'Friend', 'Social Media', 'Advertisement', 'Other'];

    const filterOptions = [
    {  options:inquiryTypes, icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ecb488ce358e480b045d3690c69ee9f068cded1ac29c496e85c73d3af3f334e?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", label: "Location" },
    {  options:hearAboutUs,  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/62608ec8ab965a232fe6e9c7f3123d0a35db62370201849a42a1ea5d8330ea87?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", label: "Property Type" },
    {  options:inquiryTypes, icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f79a8f98bab74b1c392d4615f22e3c50598e9288215f785c47c0a2d2b908aa03?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", label: "Pricing Range" },
    {  options:hearAboutUs,  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2fa60bfcaf488f21e7966b999c27ab335836c568dbb2c0633fd101cdb3fe8a1?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", label: "Property Size" },
    {  options:hearAboutUs,  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/39ec7ebbdc972fc8dc2339cb42a2cd8e3c306185efd236d9ab6178a21a308908?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", label: "Build Year" }
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