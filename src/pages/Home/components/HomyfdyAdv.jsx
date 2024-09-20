import React, { useState } from "react";
import FeatureItem from "./FeatureItems";
import Logo from "./Logo";
import Title from "./Title";

const features = [
  { id:0, icon: "/assets/img1.svg", text: "In-demand properties", desc: "Gain early access to exclusive site tours, secure developer-direct pricing, and choose your inventory as needed" },
  { id:1, icon: "/assets/img2.svg", text: "Virtual tour", desc: "Gain early access to exclusive site tours, secure developer-direct pricing, and choose your inventory as needed" },
  { id:2, icon: "/assets/img3.svg", text: "Site visits", desc: "Experience virtual tours of properties without the need for physical visits, saving time. After exploring online, you can shortlist your preferred properties for an in-person site visit." },
  { id:3, icon: "/assets/img4.svg", text: "0% Brokerage", desc: "Secure your home by making the booking payment online. Contact us for further details and information." },
  { id:4, icon: "/assets/img5.svg", text: "Instant connect", desc: "Receive comprehensive support throughout every stage of your home-buying journey." },
  { id:5, icon: "/assets/img6.svg", text: "Online Booking", desc: "Gain unlimited access to site visits for properties and more at no cost, always ensuring transparency with no hidden commissions." }
];

function HomyfydAdvantage() {
  const [expandedItemId, setExpandedItemId] = useState(null);
  const handleToggleExpand = (id) => {
    setExpandedItemId(expandedItemId === id ? null : id); 
  };
  return (
    <main className="flex flex-col py-16 px-20 rounded-none max-sm:px-10">
      <header className="flex gap-5 justify-between w-full max-md:max-w-full">
        <Logo />
        <Title />
      </header>
      
      <section className="flex flex-col font-semibold text-white w-full items-end justify-end">
        <div className="flex w-full items-center justify-end">
            <div 
              className="absolute right-[8em] max-xl:right-[3em] max-lg:right-[2em] max-md:hidden text-8xl transform rotate-90 text-nowrap"
              style={{ color: "transparent", WebkitTextStroke: "1px #1FC827" }}
            >
              Book Your home in 5 Clicks
            </div>
          <div className="relative">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                text={feature.text}
                desc={feature.desc}
                isExpanded={expandedItemId === feature.id}
                onToggle={() => handleToggleExpand(feature.id)}
              />
            ))}
            <div className="line">
              <img src="assets/lineimg.svg" alt="Line"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomyfydAdvantage;
