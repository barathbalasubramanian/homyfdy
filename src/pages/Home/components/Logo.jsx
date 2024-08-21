import React from "react";

function Logo() {
  return (
    <div className="max-md:hidden flex overflow-hidden gap-3 items-start self-start py-3 pr-3 pl-3 mt-10 border-solid bg-neutral-900 border-[1.173px] border-neutral-800 h-[100px] min-h-[100px] rounded-[117.273px] w-[100px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2709bf1645224364316e4182f2cfab28e9f2e268467e4ed3a36e069318ead6ed?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757"
        alt="Homyfyd logo"
        className="object-contain rounded-none aspect-square"
      />
    </div>
  );
}

export default Logo;