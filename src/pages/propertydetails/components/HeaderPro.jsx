import React from 'react';

function ProHeader() {
  const locationBadges = [
    { location: 'Bangalore', iconSrc: '/assets/location.svg' },
  ];

  const iconButtons = [
    { src: '/assets/like.svg' },
    { src: '/assets/compare.svg' },
    { src: '/assets/share.svg' }
  ];

  return (
    <section className="flex flex-wrap gap-5 justify-between self-stretch ml-3.5 w-full max-md:max-w-full">
      <div className="flex gap-5 my-auto text-white">
        <h1 className="grow text-2xl font-semibold">Seaside Villa</h1>
        <div className="flex flex-col text-sm font-medium whitespace-nowrap">
          {locationBadges.map((badge, index) => (
            <div key={index}>
                <div className="flex gap-1 items-center p-2 rounded-md border border-solid border-neutral-800">
                    <img loading="lazy" src={badge.iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                    <div className="self-stretch my-auto">{badge.location}</div>
                </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6 items-center whitespace-nowrap">
        {iconButtons.map((button, index) => (
            <button className="p-0 border-0 bg-transparent cursor-pointer">
                <img loading="lazy" src={button.src} alt="" className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square" />
            </button>
        ))}
        <div className="flex flex-col self-stretch">
            <div className="text-sm font-medium text-neutral-400">Price</div>
            <div className="text-xl font-semibold text-white">$1,250,000</div>
        </div>
      </div>
    </section>
  );
}

export default ProHeader;