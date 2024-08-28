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

function PropertyComparison({PropertyData}) {
  return (
    <section className="overflow-scroll flex items-start z-10 px-20 py-16 flex-col self-center mt-0 w-full bg-white rounded-lg max-md:max-w-full max-md:px-4">
      <div className="w-fit">
        <div className="flex justify-start items-center px-10 py-5 text-lg font-bold text-black max-md:px-2">
          {PropertyData.map((property, index) => (
            <PropertyCard key={index} property={property}/>
          ))}
        </div>
      </div>
      <ComparisonSection properties={PropertyData} />
    </section>
  );
}

export default PropertyComparison;