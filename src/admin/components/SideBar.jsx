import React from 'react';

const sidebarItems = [
  { icon: "/assets/dashboard.svg", text: "Dashboard" },
  { icon: "/assets/users.svg", text: "Users" },
  { icon: "/assets/human.svg", text: "R Managers" },
  { icon: "/assets/responses.svg", text: "Responses" },
  { icon: "/assets/proicon.svg", text: "Property" },
  { icon: "/assets/bookings.svg", text: "Bookings" },
  { icon: "/assets/faqs.svg", text: "FAQs" },
  { icon: "/assets/blogs.svg", text: "Blogs" },
];

function Sidebar({ activeIndex, onSetActiveIndex }) {
  return (
    <aside className="flex flex-col w-full max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col grow text-base font-medium text-green-600 text-opacity-60 max-md:mt-10">
        <div className="flex flex-col py-7  w-full bg-white">
          <div className="flex flex-col items-start px-8 w-full whitespace-nowrap max-md:px-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b2c2711346c31721f777baa3e7e6de5fd23773ae742e0701257195aa15627e1?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="Company logo" className="mb-10 object-contain rounded-lg aspect-[1.2] w-[85px]" />
            {sidebarItems.map((item, index) => {
              const baseClasses = "flex gap-2.5 px-4 py-1 rounded-md mt-4 whitespace-nowrap cursor-pointer";
              const activeClasses = index === activeIndex ? "px-4 py-1 rounded-md text-green-600 bg-green-600 bg-opacity-10 max-md:px-5" : "";

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
            <img loading="lazy" src="/assets/logout.svg" alt="" className="object-contain shrink-0 w-6 aspect-square" />
            <div>Log out</div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
