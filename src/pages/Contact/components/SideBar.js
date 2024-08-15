import React from "react";

function SideBar({ selected, setSelected }) {
  const menuItems = [
    "Dashboard",
    "My Properties",
    "My Visits",
    "Contact Details",
  ];

  return (
    <div className="flex w-full flex-col text-start gap-3">
      {menuItems.map((item) => (
        <div
          key={item}
          className={`cursor-pointer text-nowrap mt-4 w-4/5 justify-center px-6 py-1 pl-3 ${
            selected === item ? "text-white" : "text-black"
          }`}
          style={{
            backgroundColor: selected === item ? "var(--green)" : "transparent",
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
