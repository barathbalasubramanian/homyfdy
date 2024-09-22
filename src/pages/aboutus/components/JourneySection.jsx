import React from 'react';
import StatCard from './StatCard';

function JourneySection() {
  const stats = [
    { value: '200+', label: 'Happy Customers' },
    { value: '10k+', label: 'Properties For Clients' },
    { value: '16+', label: 'Years of Experience' }
  ];

  return (
    <section className="flex py-16 px-20 justify-between gap-10 items-center mt-28 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full max-md:flex-col-reverse max-md:px-3">
      <div className="flex flex-col w-1/2 flex-1 shrink justify-center self-stretch my-auto basis-0 max-md:w-full min-w-[240px] sm:w-full">
        <div className="flex relative flex-col w-full max-md:max-w-full">
          <img loading="lazy" src="/assets/design.svg" alt="" className="object-contain  z-0 h-6 aspect-[2.29] top-[-31px] w-[55px]" />
          <h2 className="averoxfont z-0 text-4xl text-white max-md:max-w-full pt-2">Our Journey</h2>
          <p className="z-0 mt-2.5 text-base font-medium leading-6 text-neutral-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
      <div className='md:w-1/2 sm:w-full'>
      <img loading="lazy" src="/assets/house.svg" alt="Journey Illustration" className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[1.4] basis-0 min-w-[240px] max-md:max-w-full" />
      </div>
    </section>
  );
}

export default JourneySection;