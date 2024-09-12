import React from "react";

function ImageGallery() {
  return (
    <section className="flex gap-8 items-start self-center mt-14 w-full overflow-scroll max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="/assets/sampleimg.svg" alt="Property exterior view" className="object-contain flex-1 shrink w-full rounded-xl aspect-[1.15] basis-0 min-w-[240px] max-md:max-w-full" />
      <img loading="lazy" src="/assets/sampleimg1.svg" alt="Property interior view" className="object-contain flex-1 shrink w-full rounded-xl aspect-[1.15] basis-0 min-w-[240px] max-md:max-w-full" />
      <img loading="lazy" src="/assets/sampleimg1.svg" alt="Property interior view" className="object-contain flex-1 shrink w-full rounded-xl aspect-[1.15] basis-0 min-w-[240px] max-md:max-w-full" />
      <img loading="lazy" src="/assets/sampleimg1.svg" alt="Property interior view" className="object-contain flex-1 shrink w-full rounded-xl aspect-[1.15] basis-0 min-w-[240px] max-md:max-w-full" />
      <img loading="lazy" src="/assets/sampleimg1.svg" alt="Property interior view" className="object-contain flex-1 shrink w-full rounded-xl aspect-[1.15] basis-0 min-w-[240px] max-md:max-w-full" />
    </section>
  );
}

export default ImageGallery;