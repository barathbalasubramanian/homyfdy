import React from "react";

function Logo() {
  return (
    <div className="max-md:hidden flex overflow-hidden gap-3 items-start self-start py-3 pr-3 pl-3 mt-10 border-neutral-800 h-[100px] min-h-[100px] rounded-[117.273px] w-[100px]">
      <img
        loading="lazy"
        src="/assets/logoadv.svg"
        alt="Homyfyd logo"
        className="object-contain rounded-none aspect-square"
      />
    </div>
  );
}

export default Logo;