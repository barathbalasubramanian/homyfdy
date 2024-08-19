import React from 'react';
import ConnectForm from './ConnectForm';

const ConnectSection = () => {
  return (
    <section className="flex flex-col pl-1.5 bg-neutral-900">
      <main className="flex px-20 py-16 flex-col self-center mt-0 w-full max-md:mt-0 max-md:px-6 max-md:py-6">
        <div>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b2a6197ff7a3d7585712b0a757b925992721691b1f4bcd1ec57260683e86361?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757"
            alt=""
        />
        </div>
        <div className="flex relative flex-col w-4/5 max-md:w-full">
          <h1 className="z-0 text-4xl text-white max-md:max-w-full">
            Let's Connect
          </h1>
          <p className="z-0 mt-2.5 text-base font-medium leading-6 text-neutral-400 max-md:max-w-full">
            We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Homyfyd. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.
          </p>
        </div>
        <ConnectForm />
      </main>
    </section>
  );
};

export default ConnectSection;