import React from 'react';

const sidebarItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00c7af5a0f848f6f830526837852e7716c595b2fa889995233e1eeb13895b00a?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Dashboard" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b04546b5f1ec3fe9f4a160c196297154198af2f66d5e6370877526e379c084f?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Users" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b9ae2457c112d100f5447f95d9a9a85da38f7e1de3bca611161328fa0557ab9?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Responses" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8a5085fefa850f2822910aa12dd7321e58f0db3f04e713821dc9af9930f17db?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Property" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c75a55853251b22666be27493a78db73425c125af5f2be86a062d92f84a13ce?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Bookings" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8795c02fb4adcc5e043fcc2956d4c304eb6804f48ea8d081e602ca2930ae14b?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "FAQs" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e2874928d1e0259ff14a13d7627fbcb769ef994f9dffdc4bf938ad8b471db58?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Blogs" },
];

function Sidebar({ activeIndex, onSetActiveIndex }) {
  return (
    <aside className="flex flex-col w-full max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col grow text-base font-medium text-green-600 text-opacity-60 max-md:mt-10">
        <div className="flex flex-col py-7  w-full bg-white">
          <div className="flex flex-col items-start px-8 w-full whitespace-nowrap max-md:px-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b2c2711346c31721f777baa3e7e6de5fd23773ae742e0701257195aa15627e1?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="Company logo" className="mb-10 object-contain rounded-lg aspect-[1.2] w-[85px]" />
            {sidebarItems.map((item, index) => {
              const baseClasses = "flex gap-2.5 px-4 py-1  mt-4 whitespace-nowrap cursor-pointer";
              const activeClasses = index === activeIndex ? "px-4 py-1 text-green-600 bg-green-600 bg-opacity-10 max-md:px-5" : "";

              return (
                <div key={index} onClick={() => onSetActiveIndex(index)}>
                  <div className={`${baseClasses} ${activeClasses}`}>
                    <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
                    <div className={index === activeIndex ? "grow shrink w-[127px]" : ""}>{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3.5 py-7 px-12 mt-36 cursor-pointer font-medium text-green-600 text-opacity-70 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f7cea57bdde4783d18f4d3c3c86201f316a4091d1d3648a6c25e408f530c789?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="" className="object-contain shrink-0 w-6 aspect-square" />
            <div>Log out</div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
