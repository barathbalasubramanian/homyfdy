import React from "react";

function BookingButtons() {
  return (
    <div className="flex flex-wrap gap-6 w-full text-sm font-semibold text-white max-md:max-w-full">
      <button style={{backgroundColor:"#1FC827"}} className="flex-auto gap-2 self-stretch px-5 py-3.5 rounded-lg min-h-[49px] shadow-[0px_0px_20px_rgba(31,200,39,1)]">
        Book Property
      </button>
      <button style={{backgroundColor:"#1FC827"}} className="flex-auto gap-2 self-stretch px-5 py-3.5 rounded-lg min-h-[49px] shadow-[0px_0px_20px_rgba(31,200,39,1)]">
        Download brochure
      </button>
    </div>
  );
}

export default BookingButtons;