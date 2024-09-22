import React from 'react';
import ValueCard from './ValuesCard';

function ValuesSection() {
  const values = [
    { icon: '/assets/excel.svg', title: 'Trust', description: 'Trust is the cornerstone of every successful real estate transaction.' },
    { icon: "/assets/bas.svg" ,title: 'Excellence', description: 'We set the bar high for ourselves. From the properties we list to the services we provide.' },
    { icon: '/assets/clientimg.svg', title: 'Client-Centric', description: 'Your dreams and needs are at the center of our universe. We listen, understand.' },
    { icon: '/assets/excel.svg', title: 'Our Commitment', description: 'We are dedicated to providing you with the highest level of service, professionalism.' }
  ];

  return (
    <section className="flex py-16 px-20 max-md:px-3 flex-wrap gap-10 items-center mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col self-stretch my-auto min-w-[240px] w-[413px]">
        <h2 className="averoxfont z-0 text-4xl text-white">Our Values</h2>
        <p className="z-0 mt-2.5 text-base font-medium leading-6 text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img loading="lazy" src="/assets/design.svg" alt="" className="object-contain absolute -left-2.5 z-0 h-6 aspect-[2.29] top-[-31px] w-[55px]" />
      </div>
      <div className="flex overflow-hidden flex-col flex-1 shrink self-stretch p-12 my-auto rounded-xl border border-solid shadow-sm basis-0 bg-neutral-900 border-neutral-800 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          {values.slice(0, 2).map((value, index) => (
            <React.Fragment key={index}>
              <ValueCard {...value} />
              {index === 0 && <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[124px] max-md:border-none" />}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-6 w-full border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-6 items-start mt-6 w-full max-md:max-w-full">
          {values.slice(2).map((value, index) => (
            <React.Fragment key={index}>
              <ValueCard {...value} />
              {index === 0 && <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[124px] max-md:border-none" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;