import React from 'react';

function ComparisonSection({ properties }) {
  const comparisonItems = [
    { label: "Developer Name", key: "developer" },
    { label: "Budget", key: "budget" },
    { label: "Area / Size", key: "area" },
    { label: "Property configuration", key: "configuration" },
    { label: "Location", key: "address" },
    { label: "Property type", key: "type" },
    { label: "Possession Status", key: "possession" },
    { label: "Floor Plan", key: "floorPlan", isImage: true }
  ];

  return (
    <>
      {comparisonItems.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col justify-center items-start px-16 py-5 mt-6 w-full text-2xl font-medium text-black bg-green-200 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 items-center justify-between w-full text-start">
              {properties.map((_, propIndex) => (
                <div key={propIndex} className='w-1/2 pl-20 max-md:text-lg max-md:pl-4'>{item.label}</div>
              ))}
            </div>
          </div>
          <div className='w-full px-16 flex items-center justify-center'>
            <div className="flex gap-5 items-center w-full text-start pt-4 justify-between max-w-full text-xl text-black">
                {properties.map((property, propIndex) => (
                <div key={propIndex} className='w-1/2 pl-20 max-md:text-sm max-md:pl-4'> 
                    {item.isImage ? (
                    <img loading="lazy" src={property[item.key]} alt={`Floor plan for ${property.name}`} className="object-contain grow w-full rounded-lg aspect-[1.93] max-md:mt-10" />
                    ) : (
                    property[item.key]
                    )}
                </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ComparisonSection;