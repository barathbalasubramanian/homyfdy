import React, { useState } from "react";
import CustomForm from "./BookingForm";

function BookingButtons({property}) {

  const [BookingForm,SetBookingForm] = useState(true);
  return (
    BookingForm ? 
    <>
    <div className="flex flex-wrap gap-6 w-full text-sm font-semibold text-white max-md:max-w-full">
      <button onClick={()=>SetBookingForm(false)} style={{backgroundColor:"#1FC827"}} className="flex-auto gap-2 self-stretch px-5 py-3.5 rounded-lg min-h-[49px] shadow-[0px_0px_20px_rgba(31,200,39,1)]">
        Book Property
      </button>
      <button style={{backgroundColor:"#1FC827"}} className="flex-auto gap-2 self-stretch px-5 py-3.5 rounded-lg min-h-[49px] shadow-[0px_0px_20px_rgba(31,200,39,1)]">
        Download brochure
      </button>
    </div>
    </> : <CustomForm property={property} SetBookingForm={SetBookingForm}/>
  );
}

export default BookingButtons;