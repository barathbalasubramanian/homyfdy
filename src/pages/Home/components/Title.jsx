import React from "react";

function Title() {
  return (
    <div className="flex flex-col items-end self-end max-w-full text-right w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f6924fd941434f7a17cc42fbb51494df215ffad110aa1f6cddff1d0db60735f?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757"
        alt=""
        className="object-contain aspect-[1.97] w-[71px]"
      />
      <h1 className="mt-3 text-3xl max-md:mr-2.5 text-white">The Homyfyd</h1>
      <h2 className="self-stretch text-5xl max-md:mr-2.5 max-md:max-w-full max-md:text-4xl text-white">
        Advantage
      </h2>
    </div>
  );
}

export default Title;