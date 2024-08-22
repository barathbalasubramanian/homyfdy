import React from "react";

function SearchBar() {
  return (
    <section className="flex flex-col px-24 w-full font-medium max-md:px-5 max-md:max-w-full">
      <div className="flex bg-zinc-900 overflow-hidden flex-wrap gap-10 items-center py-3 pr-4 pl-5 w-full rounded-xl border border-solid shadow-sm border-neutral-800 max-md:max-w-full">
        <div className="w-11/12 flex rounded-xl " style={{backgroundColor:"#141414",padding:"6px 10px"}}>
            <div className="flex-1 shrink self-stretch my-auto text-xl basis-10 text-stone-500 max-md:max-w-full">
                <input type="text" style={{backgroundColor:"#141414"}} className="w-full outline-none border-none max-md:text-sm" placeholder="Search For A Property" />
            </div>
            <button className="flex gap-1.5 items-center self-stretch px-5 py-2 my-auto text-sm text-white bg-green-600 rounded-lg">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd2493101f8f9fc1e78b9dae5c8d5862201f888af2e57cd5cd81b4c018333dfe?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
            <span className="self-stretch my-auto max-md:hidden">Find Property</span>
            </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;