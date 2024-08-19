import React from 'react';
import TeamMemberCard from './TeamMemberCard';

function TeamSection() {
  const teamMembers = [
    { name: 'Max Mitchell', role: 'Founder', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/41ad197f7f957f5e54dd5e764e2f7a7698e68f6eb6f9923b5fa901ada9684d77?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757' },
    { name: 'Sarah Johnson', role: 'Chief Real Estate Officer', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/742e87b6169383150e36c5e7e744fd950efb43e815ed13b41ef1f795c1cb7a21?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757' },
    { name: 'David Brown', role: 'Head of Property Management', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8f8671d49e6ebed9e0085ed43a6ee29005de72864df39d5925ca53f6a00c8c48?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757' },
    { name: 'Michael Turner', role: 'Legal Counsel', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/edc0cee99d62e7059d1c5d1245076eafd3153ff84f5703245bed40f038093ae1?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757' }
  ];

  return (
    <section className="flex py-6 px-20 flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col pr-64 w-full max-md:pr-5 max-md:max-w-full">
        <h2 className="z-0 text-4xl text-white max-md:max-w-full">Meet the Homyfyd Team</h2>
        <p className="z-0 mt-2.5 text-base font-medium leading-6 text-neutral-400 max-md:max-w-full">
          At Homyfyd, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
        </p>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ae3e085de5fdfc264f262e156dddfb929e62ab7822ce1b5d55cf9b8a2cc07b6?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="" className="object-contain absolute -left-2.5 z-0 h-6 aspect-[2.29] top-[-30px] w-[55px]" />
      </div>
      <div className="flex flex-wrap gap-5 items-start mt-16 w-full text-center max-md:mt-10 max-md:max-w-full">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;