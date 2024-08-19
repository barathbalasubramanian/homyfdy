import React from 'react';
import ValueCard from './ValuesCard';

function ValuesSection() {
  const values = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/687a3d3335da5f63a94efee7829c028fbce826b752a80022ee0c4ad078aaabc7?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757', title: 'Trust', description: 'Trust is the cornerstone of every successful real estate transaction.' },
    { title: 'Excellence', description: 'We set the bar high for ourselves. From the properties we list to the services we provide.' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5fef2e8deb753093857468ad2e099eab283f45237d553572e0397eee6d208680?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757', title: 'Client-Centric', description: 'Your dreams and needs are at the center of our universe. We listen, understand.' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e9b23d0a078d4a8c5c08854697ab7f8e12d13e56bf72fe28d80ae7ce0de25216?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757', title: 'Our Commitment', description: 'We are dedicated to providing you with the highest level of service, professionalism.' }
  ];

  return (
    <section className="flex py-16 px-20 flex-wrap gap-10 items-center mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col self-stretch my-auto min-w-[240px] w-[413px]">
        <h2 className="z-0 text-4xl text-white">Our Values</h2>
        <p className="z-0 mt-2.5 text-base font-medium leading-6 text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b863eb93cd8dbb3076ce4326f019ad6144b41c21193e8873496841bed11b83c?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="" className="object-contain absolute -left-2.5 z-0 h-6 aspect-[2.29] top-[-31px] w-[55px]" />
      </div>
      <div className="flex overflow-hidden flex-col flex-1 shrink self-stretch p-12 my-auto rounded-xl border border-solid shadow-sm basis-0 bg-neutral-900 border-neutral-800 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          {values.slice(0, 2).map((value, index) => (
            <React.Fragment key={index}>
              <ValueCard {...value} />
              {index === 0 && <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[124px]" />}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-6 w-full border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-6 items-start mt-6 w-full max-md:max-w-full">
          {values.slice(2).map((value, index) => (
            <React.Fragment key={index}>
              <ValueCard {...value} />
              {index === 0 && <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[124px]" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;