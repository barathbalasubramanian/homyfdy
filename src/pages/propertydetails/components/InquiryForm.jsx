import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InquiryForm({property}) {

    const navigate = useNavigate();

    const handleViewDetails = () => {
      navigate('/connect', { state: { propertyType: property.propertyType } });
    };

    return (
    <section className="flex relative flex-col py-16 w-full max-md:py-4">
      <img loading="lazy" src="/assets/design.svg" alt="" style={{marginLeft:"-10px"}} className="pb-2 object-contain aspect-[2.29] w-[55px]" />
      <h2 className="averoxfont z-0 text-4xl text-white max-md:max-w-full">Inquire About Seaside Villa</h2>
      <p className="z-0 mt-2.5 text-base font-medium leading-6 text-neutral-400 max-md:max-w-full">
        Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
      </p>
      <form className="flex gap-10 items-start py-10 self-stretch max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-center p-10 w-full rounded-xl border border-solid basis-0 border-neutral-800 min-w-[240px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col w-full text-white max-md:max-w-full">
              <label htmlFor="selectedProperty" className="text-base font-semibold max-md:max-w-full">
                Selected Property
              </label>
              <div className="flex flex-wrap gap-3 items-center px-5 py-4 mt-3.5 w-full text-sm font-medium leading-none rounded-md border border-none bg-zinc-900 border-neutral-800 max-md:max-w-full">
                <input
                  id="selectedProperty"
                  type="text"
                  value={`${property.propertyType} ${property.address}`}
                  readOnly
                  className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none text-white max-md:max-w-full"
                />
                <img loading="lazy" src="/assets/location.svg" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-center items-center mt-10 w-full font-medium max-md:max-w-full">
            <div className="flex flex-wrap flex-1 shrink gap-1.5 items-center self-stretch my-auto text-base basis-[68px] min-w-[240px] text-neutral-400 max-md:max-w-full">
          </div>
            <button onClick={handleViewDetails}  type="submit" className="gap-10 self-stretch px-9 py-3.5 my-auto text-sm leading-6 text-white bg-green-600 rounded-md shadow-[0px_0px_21px_rgba(31,200,39,1)] max-md:px-5">
              Let's connect
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default InquiryForm;