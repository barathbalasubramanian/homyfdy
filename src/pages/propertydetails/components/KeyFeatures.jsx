import React from "react";

function KeyFeatures({features}) {
  
  const features_ = features
  .split('.')
  .map(feature => feature.trim()) 
  .filter(feature => feature.length > 0); 

  return (
    <section className="flex flex-col px-10 py-10 rounded-xl border border-solid border-neutral-800 min-h-fit max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-xl font-semibold text-white max-md:max-w-full">Key Features and Amenities</h2>
      <div className="flex flex-col mt-10 w-full text-base font-medium text-neutral-400 max-md:max-w-full">
        {features_.map((feature, index) => (
          <div key={index} className="flex flex-wrap gap-2.5 items-center px-4 py-3.5 mt-5 w-full border-l border-violet-600 border-solid border-l-violet-600 max-md:max-w-full">
            <img loading="lazy" src="/assets/thunder.svg" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">{feature}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyFeatures;