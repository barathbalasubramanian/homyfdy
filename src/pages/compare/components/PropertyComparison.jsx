import React from 'react';
import PropertyCard from './PropertyCard';
import ComparisonSection from './ComparisonSection';

const properties = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc5646d3c00e288e1d598579d2e4dc43772bcfab7fa3a21af4a7fb534890166c?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757",
    name: "Rustomjee Heights",
    location: "Bangalore",
    developer: "Rustomjee Buliders",
    budget: "$48L - $90L",
    area: "876 -1309 Sqft",
    configuration: "2BHK,3BHK,4BHK",
    address: "Method & Madness Technology Pvt. Ltd Unit No. 1202, 12th floor, One International Center, Tower-3, Senapati Bapat Marg, Elphinstone Road,Delisle Road, Bangalore",
    type: "Residential",
    possession: "December 2025",
    floorPlan: "https://cdn.builder.io/api/v1/image/assets/TEMP/da099e4a4ce7b2d29ef947d45c4f926d1a39eb50e7187879e17b5bd349fc79b7?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6fea57dac80990405d979953c2adea1ed50d280530ab5a803a04c12e6be55?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757",
    name: "Rustomjee Heights",
    location: "Bangalore",
    developer: "Rustomjee Buliders",
    budget: "$48L - $90L",
    area: "876 -1309 Sqft",
    configuration: "2BHK,3BHK,4BHK",
    address: "Method & Madness Technology Pvt. Ltd Unit No. 1202, 12th floor, One International Center, Tower-3, Senapati Bapat Marg, Elphinstone Road,Delisle Road, Bangalore",
    type: "Residential",
    possession: "December 2025",
    floorPlan: "https://cdn.builder.io/api/v1/image/assets/TEMP/da099e4a4ce7b2d29ef947d45c4f926d1a39eb50e7187879e17b5bd349fc79b7?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757"
  }
];

function PropertyComparison() {
  return (
    <section className="flex z-10 px-20 py-16 flex-col self-center mt-0 w-full bg-white rounded-lg max-md:max-w-full max-md:px-4">
      <div className="self-center w-4/5 flex items-center justify-between max-md:w-full">
        <div className="flex w-full items-center gap-10 justify-between">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
      <ComparisonSection properties={properties} />
    </section>
  );
}

export default PropertyComparison;