import React from 'react';

function TotalProperties() {
    const currentValue = 4078;
    const totalValue = 5000;
    const percentage = (currentValue / totalValue) * 100;

    return (
    <section className="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
      <div className="flex flex-wrap gap-9 items-start px-8 py-6 bg-emerald-500 rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/abe2947aff1dfbb7e95f4b30d0efd22eefbb3ff0e1b9c7b37f1e1303a3cfe5c5?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757"
          alt=""
          className="object-contain shrink-0 aspect-[0.95] w-[60px]"
        />
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="flex gap-5 justify-between font-medium text-white max-md:mr-1.5 max-md:max-w-full">
            <h2 className="text-xl leading-none">Total Properties</h2>
            <span className="text-2xl leading-none">4,098</span>
          </div>
          <div className="flex flex-col items-start mt-3 rounded-xl bg-neutral-200 max-md:pr-5 max-md:max-w-full">
            <div
                className="flex shrink-0 h-2.5 bg-white rounded-xl"
                style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="self-start mt-1 text-sm leading-6 text-white">
            43 more to break last month record
          </p>
        </div>
      </div>
    </section>
  );
}

export default TotalProperties;