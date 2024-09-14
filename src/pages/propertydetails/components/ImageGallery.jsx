import React from "react";

function ImageGallery({imageLinks}) {
  console.log(imageLinks)
  if (imageLinks.length <= 0) {
    return null;
  } 
  return (
    <section className="flex gap-8 items-start self-center mt-14 w-full overflow-scroll max-md:mt-10 max-md:max-w-full">
      {imageLinks.map((link, index) => (
        <img key={index} loading="lazy" src={link} alt={`Property image ${index}`} className="object-contain flex-1 shrink w-full rounded-xl aspect-[1.15] basis-0 min-w-[240px] max-md:max-w-full" />
      ))}
    </section>
  );
}

export default ImageGallery;