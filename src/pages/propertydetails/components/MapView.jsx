import React from "react";

function MapView() {
  return (
    <section className="max-md:mt-10">
      <img loading="lazy" style={{marginLeft:"-10px"}} src="/assets/design.svg" alt="" className="object-contain pb-1 aspect-[2.29] w-[55px] max-md:mt-10" />
      <h2 className="averoxfont text-4xl text-white max-md:ml-2.5">MAP VIEW</h2>
      <div className="flex relative flex-col items-start self-stretch py-10 w-full text-sm font-semibold text-white rounded-lg min-h-[547px] max-md:px-5 max-md:pt-24 max-md:mr-0.5">
        <img loading="lazy" src="/assets/samplemap.svg" alt="Map of property location" className="object-cover inset-0 size-full" />
        <a href="#" className="gap-2 w-fit self-stretch px-5 py-3.5 bg-green-600 rounded-lg shadow-[0px_0px_6px_rgba(0,0,0,0.25)] absolute bottom-20 left-5">
          Open google maps
        </a>
      </div>
    </section>
  );
}

export default MapView;
