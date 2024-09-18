import React from 'react';

function ComparisonSection({ properties }) {
  if (!properties || properties.length === 0) return null;

  const excludedKeys = ['imageLinks', 'id', 'additionalFeatures', 'brochureLink', 'amenities'];
  const comparisonKeys = Object.keys(properties[0]).filter(key => !excludedKeys.includes(key));

  return (
    <div className="w-fit mt-10">
      {comparisonKeys.map((key, keyIndex) => (
        <React.Fragment key={keyIndex}>
          <div className="flex justify-start items-center px-10 py-5 text-lg font-bold text-black bg-green-200 max-md:px-2">
            {properties.map((_, propIndex) => (
              <div
                key={propIndex}
                style={{ minWidth: "25em", maxWidth: "25em", paddingRight: "2em", overflow: "scroll" }}
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
                style={{ minWidth: "25em", wordBreak: "break-all", maxWidth: "25em", paddingRight: "2em", overflow: "scroll" }}
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
