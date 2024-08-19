import React from 'react';

function PropertyCard({ image, name, location }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow items-end px-10 pt-4 pb-48 rounded-lg aspect-[1.675] max-md:px-5 max-md:pb-24 max-md:mt-10">
        <img loading="lazy" src={image} alt={name} className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="/assets/favi.svg" alt="" className="object-contain w-6 aspect-square z-50" />
      </div>
      <div className="flex flex-col w-full mt-4 max-md:mt-10">
        <div className="flex gap-5 justify-between w-full max-md:mr-1">
          <div className="text-xl text-black">{name}</div>
          <div className="flex gap-1 items-center p-2 text-sm font-medium text-green-600 whitespace-nowrap rounded-md border border-green-600 border-solid min-h-[37px]">
            <img loading="lazy" src="/assets/loc.svg" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <div className="self-stretch my-auto">{location}</div>
          </div>
        </div>
        <div className="flex gap-2 mt-6 w-full text-sm font-medium text-white">
          <button className="flex-auto gap-2 self-stretch px-5 py-3.5 bg-green-600 rounded-lg min-h-[49px]">Book a Visit</button>
          <button className="gap-2 self-stretch px-5 py-3.5 bg-green-600 rounded-lg min-h-[49px]">Call now</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;