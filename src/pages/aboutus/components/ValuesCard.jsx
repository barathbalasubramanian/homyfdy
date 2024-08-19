import React from 'react';

function ValueCard({ icon, title, description }) {
  return (
    <div className="flex flex-col flex-1 shrink rounded-xl basis-0 min-w-[240px]">
      <div className="flex gap-2.5 items-center w-full">
        {icon && (
          <div className="flex gap-2.5 items-center self-stretch p-4 my-auto border border-green-600 border-solid bg-neutral-900 h-[60px] rounded-[52px] w-[60px]">
            <img loading="lazy" src={icon} alt="" className="object-contain w-7 aspect-square" />
          </div>
        )}
        <h3 className="flex-1 shrink self-stretch my-auto text-xl font-semibold text-white basis-8">{title}</h3>
      </div>
      <p className="mt-4 text-base font-medium leading-6 text-neutral-400">{description}</p>
    </div>
  );
}

export default ValueCard;