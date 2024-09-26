import React, { useState } from "react";
import CustomForm from "./BookingForm";

function ContactUs({ property, manager, phoneNumber, rankings, managerDet }) {

  const [BookingForm, SetBookingForm] = useState(true);
  const handleBookVisitClick = () => {
    SetBookingForm(false);
  };

  return (
    BookingForm ? (
      <section className="flex flex-col px-10 py-12 mt-3 w-full rounded-xl border border-solid border-neutral-800 max-md:px-5 max-md:max-w-full">
        <h2 className="text-xl font-semibold text-white max-md:max-w-full pb-2">Contact Us</h2>
        <p className="self-start text-base font-medium text-neutral-400 max-md:max-w-full">
          Hi! Please feel free to reach out to me if you have any questions.
        </p>
        <div className="flex flex-wrap gap-9 mt-7 w-full max-md:max-w-full">
          <div className="flex flex-auto gap-3.5">
            <img loading="lazy" style={{width:"4em",height:"4em"}} src={managerDet[0].managerImage} alt="Brooklyn Simmons" className=" shrink-0 rounded-full" />
            <div className="flex flex-col items-start my-auto">
              <div className="self-stretch text-xl font-semibold text-white">{manager}</div>
              <div className="text-xs text-neutral-400">Relationship manager</div>
              <div className="flex gap-1.5 items-center">
                <div className="flex gap-0.5 items-center">
                  {[...Array(parseInt(rankings))].map((_, index) => (
                    <img key={index} loading="lazy" src='/assets/star1.svg' alt="" className="object-contain shrink-0 w-4 aspect-square" />
                  ))}
                </div>
                <div className="text-xs text-neutral-400 pt-1">{rankings} Stars</div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 my-auto text-sm font-semibold text-white">
            <a href={`tel:${managerDet[0].contactInfo}`}>
              <img loading="lazy" src="/assets/call1.svg" alt="" className="object-contain shrink-0 my-auto w-10 rounded-full aspect-square cursor-pointer" />
            </a>
            <button onClick={handleBookVisitClick} className="gap-2 self-stretch px-5 py-3 outline-none bg-green-600 rounded-lg min-h-[44px] shadow-[0px_0px_20px_rgba(31,200,39,1)]">
              Book a Visit
            </button>
          </div>
        </div>
      </section>
    ) : (
      <CustomForm property={property} SetBookingForm={SetBookingForm} />
    )
  );
}

export default ContactUs;
