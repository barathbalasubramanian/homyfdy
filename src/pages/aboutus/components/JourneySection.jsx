import React from 'react';
import StatCard from './StatCard';

function JourneySection() {
  const stats = [
    { value: '200+', label: 'Happy Customers' },
    { value: '10k+', label: 'Properties For Clients' },
    { value: '16+', label: 'Years of Experience' }
  ];

  return (
    <section className="flex py-16 px-20 justify-between gap-10 items-center mt-28 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full lg:flex-row  sm:flex-col">
      <div className="flex flex-col w-1/2 flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] sm:w-full">
        <div className="flex relative flex-col w-full max-md:max-w-full">
          <h2 className="z-0 text-4xl text-white max-md:max-w-full">Our Journey</h2>
          <p className="z-0 mt-2.5 text-base font-medium leading-6 text-neutral-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7268696a2d44a35922e81c5b1fa66a1387ce4fcd08f46b39525d394d6aa65c7e?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="" className="object-contain absolute -left-2.5 z-0 h-6 aspect-[2.29] top-[-31px] w-[55px]" />
        </div>
        <div className="flex flex-wrap gap-4 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
      <div className='md:w-1/2 sm:w-full'>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2823de99c433d9b9e94738eb65044075ca98d76b3817b49d345cac651beb14e2?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="Journey Illustration" className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[1.4] basis-0 min-w-[240px] max-md:max-w-full" />
      </div>
    </section>
  );
}

export default JourneySection;