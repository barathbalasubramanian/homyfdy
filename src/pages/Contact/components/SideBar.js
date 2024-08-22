import React from "react";

function SideBar({ selected, setSelected }) {
  const menuItems = [
    "Dashboard",
    "My Properties",
    "My Visits",
    "Contact Details",
  ];

  return (
    <div className="flex w-full flex-col text-start gap-3 max-md:flex-row max-md:flex-wrap max-md:justify-center">
      {menuItems.map((item) => (
        <div
          key={item}
          className={`cursor-pointer text-nowrap mt-4 w-4/5 justify-center px-6 py-1 pl-3 max-md:text-sm max-md:w-[9em] ${
            selected === item ? "text-white" : "text-black"
          }`}
          style={{
            backgroundColor: selected === item ? "var(--green)" : "#F4F4F4",
            color: selected === item ? 'white' : '#B6B6B6',
            borderRadius: "5px",
          }}
          onClick={() => setSelected(item)}
        >
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
