import React from 'react';

function ComparisonSection({ properties }) {
  if (!properties || properties.length === 0) return null;

  const comparisonKeys = Object.keys(properties[0]);

  return (
    <div className="w-fit mt-10">
      {comparisonKeys.map((key, keyIndex) => (
        <React.Fragment key={keyIndex}>
          <div className="flex justify-start items-center px-10 py-5 text-lg font-bold text-black bg-green-200 max-md:px-2">
            {properties.map((_, propIndex) => (
              <div
                key={propIndex}
                style={{ minWidth: "25em", maxWidth: "25em",paddingRight:"2em",overflow:"scroll" }}
                className="max-md:text-sm"
              >
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
            ))}
          </div>

          <div className="flex justify-start items-start break-words px-10 py-3 text-lg font-medium text-black max-md:px-2">
            {properties.map((property, propIndex) => (
              <div
                key={propIndex}
                style={{ minWidth: "25em", wordBreak:"break-all" ,maxWidth: "25em",paddingRight:"2em",overflow:"scroll" }}
              >
                {typeof property[key] === 'object' ? (
                  <ul>
                    {Object.entries(property[key]).map(
                      ([featureKey, featureValue]) => (
                        <li key={featureKey}>
                          {featureKey
                            .replace(/([A-Z])/g, ' $1')
                            .replace(/^./, str => str.toUpperCase())}
                          : {featureValue.toString()}
                        </li>
                      )
                    )}
                  </ul>
                ) : key === 'floorPlan' && property[key] ? (
                  <img
                    loading="lazy"
                    src={property[key]}
                    alt={`Floor plan for ${property.name}`}
                    className="object-contain grow w-full rounded-lg aspect-[1.93] max-md:mt-10"
                  />
                ) : (
                  property[key]
                )}
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ComparisonSection;



// import React from 'react';

// function ComparisonSection({ properties }) {
//   const comparisonItems = [
//     { label: "Property Type", key: "propertyType" },
//     { label: "Budget", key: "propertyPrice" },
//     { label: "Area / Size", key: "area" },
//     { label: "Description", key: "description" },
//     { label: "Location", key: "address" },
//     { label: "Region", key: "region" },
//     { label: "Features", key: "features" },
//     { label: "Floor Plan", key: "floorPlan", isImage: false }
//   ];

//   return (
//     <>
//       {comparisonItems.map((item, index) => (
//         <div key={index} className='w-fit'>
//           <div className="flex flex-col justify-center items-start px-10 py-5 mt-6 w-full text-2xl font-medium text-black bg-green-200 max-md:px-5 max-md:max-w-full">
//             <div className="flex gap-5 items-center w-full text-start">
//               {properties.map((_, propIndex) => (
//                 <div key={propIndex} style={{minWidth:"15em",maxWidth:"15em"}} className='max-md:text-sm'>{item.label}</div>
//               ))}
//             </div>
//           </div>
//             <div className="flex flex-col justify-center items-start px-10 py-3 w-full text-lg font-medium text-black max-md:px-2 max-md:max-w-full">  
//               <div className="flex gap-5 items-center w-full text-start">
//                 { properties.map((property, propIndex) => (
//                     <div key={propIndex} style={{minWidth:"15em",maxWidth:"15em"}}> 
//                         {item.isImage ? (
//                         <img loading="lazy" src={property[item.key]} alt={`Floor plan for ${property.name}`} className="object-contain grow w-full rounded-lg aspect-[1.93] max-md:mt-10" />
//                         ) : (
//                         property[item.key]
//                         )}
//                     </div>
//                   ))}
//               </div>
//             </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default ComparisonSection;