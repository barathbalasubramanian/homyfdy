import React from "react";
import ImageGallery from "./ImageGallery";
import BookingButtons from "./BookingsButton";
import Description from "./Description";
import ContactUs from "./ContactUs";
import KeyFeatures from "./KeyFeatures";
import InquiryForm from "./InquiryForm";
import MapView from "./MapView";
import ProHeader from "./HeaderPro";

function PropertyCon() {
  return (
    <main className="flex flex-col items-start px-16 py-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <ProHeader/>
      <ImageGallery />
      <section className="self-stretch py-20 max-md:py-16 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <BookingButtons />
              <Description />
              <ContactUs />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-5 max-md:max-w-full">
              <KeyFeatures />
            </div>
          </div>
        </div>
      </section>
      <InquiryForm />
      <MapView />
    </main>
  );
}

export default PropertyCon;