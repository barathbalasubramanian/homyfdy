import React from "react";
import FeatureItem from "./FeatureItems";
import Logo from "./Logo";
import Title from "./Title";

const features = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0c31c7ae82ae2778ff459f834f9d547040e58c64fd059e6456b06bf90337c28?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "In-demand properties" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2db926f4b2ba75a85069a66e0bcd079639f25ed5826285cffb206c45d0d301b5?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Virtual tour" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3b117dfe422497bad280742003a693c97859c068bc993699f91fd24565af92e?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Site visits" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/065d32ceb796fc410ccfd45751630293beff34b811952ae7560ccc20452afe49?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "0% Brokerage" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43615527bc48a593b50798a078526b00c36382b8ad93048d0dffb5787683f0b5?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Instant connect" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2db926f4b2ba75a85069a66e0bcd079639f25ed5826285cffb206c45d0d301b5?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", text: "Online Booking" }
];

function HomyfydAdvantage() {
  return (
    <main className="flex flex-col py-16 px-20 rounded-none max-sm:px-10">
      <header className="flex gap-5 justify-between w-full max-md:max-w-full">
        <Logo />
        <Title />
      </header>
      
      <section className="relative flex flex-col font-semibold text-white w-full items-end justify-end max-md:max-w-full">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            text={feature.text}
          />
        ))}
        <div className="line" >
            <img src="/assets/line.svg" alt="Line"/>
        </div>
      </section>
    </main>
  );
}

export default HomyfydAdvantage;