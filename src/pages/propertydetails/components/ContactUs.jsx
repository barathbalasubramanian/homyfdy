import React from "react";

function ContactUs({manager,phoneNumber,rankings}) {
  return (
    <section className="flex flex-col px-10 py-12 mt-3 w-full rounded-xl border border-solid border-neutral-800 max-md:px-5 max-md:max-w-full">
      <h2 className="text-xl font-semibold text-white max-md:max-w-full pb-2">Contact Us</h2>
      <p className="self-start text-base font-medium text-neutral-400 max-md:max-w-full">
        Hi! Please feel free to reach out to me if you have any questions.
      </p>
      <div className="flex flex-wrap gap-9 mt-7 w-full max-md:max-w-full">
        <div className="flex flex-auto gap-3.5">
          <img loading="lazy" src="/assets/owner.svg" alt="Brooklyn Simmons" className="object-contain shrink-0 rounded-lg aspect-[1.06] w-[95px]" />
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
          <img loading="lazy" src="/assets/call1.svg" alt="" className="object-contain shrink-0 my-auto w-10 rounded-full aspect-square" />
          <button className="gap-2 self-stretch px-5 py-3 bg-green-600 rounded-lg min-h-[44px] shadow-[0px_0px_20px_rgba(31,200,39,1)]">
            Book a Visit
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;