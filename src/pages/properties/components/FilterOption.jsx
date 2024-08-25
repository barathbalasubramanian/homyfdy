import React from "react";

function FilterOption({ icon, label, options }) {
  return (
    <div className="flex flex-col flex-1 gap-4 shrink basis-0 min-w-[240px] border-neutral-800">
      <div className="relative border-neutral-800">
        <div
          style={{
            borderRadius: "10px",
            border: "1px solid #262626",
            padding: "4px 10px",
            backgroundColor: "#141414",
          }}
          className="flex flex-1 shrink gap-2 border-neutral-800 items-center self-stretch my-auto text-sm font-medium basis-0 text-neutral-400"
        >
          <img
            loading="lazy"
            src={icon}
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt=""
          />
          <div className="shrink-0 w-0 border border-solid bg-neutral-800 border-neutral-800 h-[42px]" />
          <div className="flex-1">
            <select
              id={label.toLowerCase().replace(/\s/g, "-")}
              style={{ backgroundColor: "#141414" }}
              className="flex outline-none gap-3 items-center px-5 py-2 pl-2 w-full text-sm font-medium leading-none rounded-md border border-solid text-stone-500 appearance-none"
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  <div style={{ padding: "2em 0" }}>{option}</div>
                </option>
              ))}
            </select>
          </div>
        </div>
        <img
          loading="lazy"
          src="/assets/downarr.svg"
          alt=""
          className="object-contain absolute right-5 top-1/2 transform -translate-y-1/2 w-5 aspect-square pointer-events-none"
        />
      </div>
    </div>
  );
}

export default FilterOption;
