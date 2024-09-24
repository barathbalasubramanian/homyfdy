import React, { useState } from "react";
import CustomForm from "./BookingForm";

function BookingButtons({ property }) {
  const [BookingForm, SetBookingForm] = useState(true);

  // Check if brochurelink is available in the property
  const brochureAvailable = property?.brochurelink;

  return (
    BookingForm ? 
    <>
      <div className="flex flex-wrap gap-6 w-full text-sm font-semibold text-white max-md:max-w-full">
        <button
          onClick={() => SetBookingForm(false)}
          style={{ backgroundColor: "#1FC827" }}
          className="flex-auto gap-2 self-stretch px-5 py-3.5 rounded-lg min-h-[49px] shadow-[0px_0px_20px_rgba(31,200,39,1)]"
        >
          Book Property
        </button>
        {brochureAvailable && (
          <a
            href={property.brochurelink} // Set the brochure PDF link
            target="_blank" // Open the PDF in a new tab
            rel="noopener noreferrer" // Prevent security vulnerabilities
            download="Brochure.pdf" // Force download with this file name (optional)
            className="flex-auto gap-2 self-stretch px-5 py-3.5 rounded-lg min-h-[49px] shadow-[0px_0px_20px_rgba(31,200,39,1)]"
            style={{ backgroundColor: "#1FC827", textAlign: 'center' }}
          >
            Download brochure
          </a>
        )}
      </div>
    </> 
    : <CustomForm property={property} SetBookingForm={SetBookingForm} />
  );
}

export default BookingButtons;
