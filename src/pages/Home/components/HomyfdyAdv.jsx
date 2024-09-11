import React from "react";
import FeatureItem from "./FeatureItems";
import Logo from "./Logo";
import Title from "./Title";

const features = [
  { icon: "/assets/img1.svg", text: "In-demand properties" },
  { icon: "/assets/img2.svg", text: "Virtual tour" },
  { icon: "/assets/img3.svg", text: "Site visits" },
  { icon: "/assets/img4.svg", text: "0% Brokerage" },
  { icon: "/assets/img5.svg", text: "Instant connect" },
  { icon: "/assets/img6.svg", text: "Online Booking" }
];

function HomyfydAdvantage() {
  return (
    <main className="flex flex-col py-16 px-20 rounded-none max-sm:px-10">
      <header className="flex gap-5 justify-between w-full max-md:max-w-full">
        <Logo />
        <Title />
      </header>
      
      <section className="flex flex-col font-semibold text-white w-full items-end justify-end pr-32 max-md:pr-10">
        <div className="relative">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            text={feature.text}
          />
        ))}
        <div className="line" >
            <img src="assets/lineimg.svg" alt="Line"/>
        </div>
        </div>
      </section>
    </main>
  );
}

export default HomyfydAdvantage;