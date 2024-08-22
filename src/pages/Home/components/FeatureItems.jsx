import React from "react";

function FeatureItem({ icon, text }) {
  return (
    <div className={`flex gap-5 justify-between mt-7 `}>
        <div className={`flex items-center gap-2 my-auto`}>
            <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 aspect-square w-[65px]"/>
            <div className="flex-auto text-2xl max-md:text-xl">{text}</div>
        </div>
        <div className="flex shrink-0 w-1 rounded-xl border border-solid bg-zinc-900 border-neutral-800 h-[200px]" />
    </div>
  );
}

export default FeatureItem;