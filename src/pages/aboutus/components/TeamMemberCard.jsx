import React from 'react';

function TeamMemberCard({ name, role, image }) {
  return (
    <div className="flex flex-col flex-1 shrink px-6 pt-6 pb-8 rounded-xl border border-solid basis-0 border-neutral-800 min-h-auto min-w-[240px] max-md:px-5">
      <img loading="lazy" src={image} alt={`${name} - ${role}`} className="object-contain w-full rounded-xl aspect-[1.17]" />
      <div className="flex flex-col mt-12 w-full max-md:mt-10">
        <div className="flex flex-col w-full">
          <h3 className="text-xl font-semibold leading-snug text-white">{name}</h3>
          <p className="mt-1 text-base font-medium text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;