import React from 'react';

function CompareHeader() {
  return (
    <section className="flex flex-row items-center gap-4 max-md:flex-col max-md:items-start justify-between px-20 py-16 w-full border-b border-solid border-b-neutral-800 max-md:px-5 max-md:py-24 max-md:mr-2 max-md:max-w-full">
      <div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae8eb2180968399a5d87eaec0e17cfe3a8d12e0add682b9cde587cfaca4e3fd4?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="" className="object-contain pl-2 aspect-[2.29] w-[55px]" />
        <div className="flex flex-wrap gap-5 justify-between items-start mt-1.5 ml-2.5 w-full text-white max-md:max-w-full">
          <h1 className="text-4xl">Compare Properties</h1>
        </div>
        <div className="mb-0 ml-2.5 pt-1 text-base font-medium leading-6 text-neutral-400 max-md:mb-2.5">
          Effortlessly compare multiple properties side-by-side to make informed decisions. Our intuitive interface lets you evaluate key aspects such as price, location, amenities, and more, helping you find your perfect home with ease.
        </div>
      </div>
      <div className='text-nowrap pl-2  '>
        <button className="gap-2 self-stretch px-5 py-3.5 text-sm font-medium bg-green-600 rounded-lg min-h-[49px] shadow-[0px_0px_19px_rgba(31,200,39,1)]">
            Add Property
        </button>
      </div>
    </section>
  );
}

export default CompareHeader;