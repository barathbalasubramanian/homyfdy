import React from 'react'

function Noti() {
    const iconButtons = [
        { src: "/assets/noti.svg", alt: "Icon 1" },
        { src: "/assets/msg.svg", alt: "Icon 2" },
      ];
    return (
    <div>
      <nav className="flex overflow-hidden flex-wrap gap-2 items-center pr-0 pl-14 max-md:px-0">
      {iconButtons.map((button, index) => (
        <div key={index}>
            <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-2 my-auto w-10 h-10 bg-white rounded-lg border border-gray-200 border-solid">
                <img loading="lazy" src={button.src} alt={button.alt} className="object-contain self-stretch my-auto w-6 aspect-square" />
            </div>
        </div>
      ))}

        <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2 my-auto text-sm leading-6 bg-white rounded-lg border border-gray-200 border-solid text-neutral-700">
            <img loading="lazy" src='/assets/userimg.svg  ' alt={`Derek Alvarado's avatar`} className="object-contain shrink-0 self-stretch my-auto w-6 rounded-sm aspect-square" />
            <span className="self-stretch my-auto">Derek Alvarado</span>
            <img loading="lazy" src='/assets/down.svg' alt="" className="object-contain shrink-0 self-stretch my-auto w-[12px] aspect-square" />
        </div>
    </nav>
    </div>
  )
}

export default Noti
