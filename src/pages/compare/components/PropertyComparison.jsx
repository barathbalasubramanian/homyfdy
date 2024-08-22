import React from 'react';
import PropertyCard from './PropertyCard';
import ComparisonSection from './ComparisonSection';

const properties = [
  {
    image: "/assets/sample.svg",
    name: "Rustomjee Heights",
    location: "Bangalore",
    developer: "Rustomjee Buliders",
    budget: "$48L - $90L",
    area: "876 -1309 Sqft",
    configuration: "2BHK,3BHK,4BHK",
    address: "Method & Madness Technology Pvt. Ltd Unit No. 1202, 12th floor, One International Center, Tower-3, Senapati Bapat Marg, Elphinstone Road,Delisle Road, Bangalore",
    type: "Residential",
    possession: "December 2025",
    floorPlan: "/assets/flat.svg"
  },
  {
    image: "/assets/sample.svg",
    name: "Rustomjee Heights",
    location: "Bangalore",
    developer: "Rustomjee Buliders",
    budget: "$48L - $90L",
    area: "876 -1309 Sqft",
    configuration: "2BHK,3BHK,4BHK",
    address: "Method & Madness Technology Pvt. Ltd Unit No. 1202, 12th floor, One International Center, Tower-3, Senapati Bapat Marg, Elphinstone Road,Delisle Road, Bangalore",
    type: "Residential",
    possession: "December 2025",
    floorPlan: "/assets/flat.svg"
  }
];

function PropertyComparison() {
  return (
    <section className="flex z-10 px-20 py-16 flex-col self-center mt-0 w-full bg-white rounded-lg max-md:max-w-full max-md:px-4">
      <div className="self-center w-4/5 flex items-center justify-between max-md:w-full">
        <div className="flex w-full items-center gap-10 justify-between max-md:gap-4">
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