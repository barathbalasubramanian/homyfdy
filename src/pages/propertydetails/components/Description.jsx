import React from "react";

function Description({property}) {
  return (
    <section className="flex flex-col justify-center p-10 mt-8 w-full rounded-xl border border-solid border-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <h2 className="text-xl font-semibold text-white max-md:max-w-full">
          Description
        </h2>
        <p className="mt-2.5 text-base font-medium leading-6 text-neutral-400 max-md:max-w-full">
          {property.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2.5 items-start pt-4 mt-10 border-t border-solid border-t-neutral-800 min-h-[75px]">
        <PropertyFeature icon="/assets/feature.svg" title="Bedrooms" value={property.bedrooms} />
        <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[59px]" />
        <PropertyFeature icon="/assets/feature1.svg" title="Bathrooms" value={property.bathrooms} />
        <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[59px]" />
        <PropertyFeature icon="/assets/feature2.svg" title="Area" value={`${property.area} Square Feet`} />
      </div>
    </section>
  );
}

function PropertyFeature({ icon, title, value }) {
  return (
    <div className="flex flex-col flex-1 shrink whitespace-nowrap basis-0">
      <div className="flex gap-1 items-center w-full text-sm font-medium text-neutral-400">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
        <div className="flex-1 shrink self-stretch my-auto basis-0">{title}</div>
      </div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}

export default Description;