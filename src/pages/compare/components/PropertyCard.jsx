import React from 'react';

function PropertyCard({ property }) {
  console.log(property)
  return (
    <div style={{minWidth:"25em",maxWidth:"25em"}}>
      <div className="flex flex-col w-[80%]" >
        <div className="flex relative flex-col grow items-end pb-48 rounded-xl aspect-[1.675] max-md:px-5 max-md:pb-24 max-md:mt-6">
          <img loading="lazy" src="/assets/sample.svg" alt="DummyImage" className="object-cover absolute inset-0 size-full rounded-2xl" />
          <img loading="lazy" src="/assets/favi.svg" alt="" className="absolute top-2 right-2 object-contain w-6 aspect-square z-50" />
        </div>
        <div className="flex flex-col w-full mt-4 max-md:mt-2">
          <div className="flex gap-5 justify-between w-full max-md:mr-1 max-md:flex-wrap max-md:gap-2">
            <div className="text-xl text-black max-md:text-sm">{property.propertyType}</div>
            <div className="flex gap-1 items-center p-2 text-sm font-medium text-green-600 whitespace-nowrap rounded-md border border-green-600 border-solid min-h-[37px]">
              <img loading="lazy" src="/assets/loc.svg" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
              <div className="self-stretch my-auto">{property.region}</div>
            </div>
          </div>
          <div className="flex gap-2 mt-6 w-full text-sm font-medium text-white max-md:flex-wrap">
            <button className="flex-auto gap-2 self-stretch px-3 py-3.5 bg-green-600 rounded-lg min-h-[49px]">Book a Visit</button>
            <button className="flex-auto gap-2 self-stretch px-3 py-3.5 bg-green-600 rounded-lg min-h-[49px]">Call now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;