import React from "react";

function Title() {
  return (
    <div className="flex flex-col items-end self-end max-w-full text-right w-full">
      <img
        loading="lazy"
        src="/assets/design.svg"
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