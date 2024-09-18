import React from 'react';
import PropertyCard from './PropertyCard';
import ComparisonSection from './ComparisonSection';

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